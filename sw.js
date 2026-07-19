const SW_VERSION = 'v1';
const PAGE_CACHE = `dgkh-pages-${SW_VERSION}`;
const ASSET_CACHE = `dgkh-assets-${SW_VERSION}`;
const OFFLINE_URL = '/offline.html';

const OFFLINE_HTML = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Offline | Digital Growth KH</title>
	<style>
		body { margin: 0; font-family: Inter, Arial, sans-serif; background: #0a0c0f; color: #e0e4f0; display: grid; place-items: center; min-height: 100vh; }
		main { max-width: 560px; padding: 24px; text-align: center; border: 1px solid #2a2e36; border-radius: 12px; background: rgba(255,255,255,0.04); }
		h1 { margin: 0 0 8px; color: #00f0ff; font-size: 1.6rem; }
		p { margin: 0 0 16px; line-height: 1.5; color: #a0b0c0; }
		a { color: #ff2a6d; text-decoration: none; font-weight: 600; }
	</style>
</head>
<body>
	<main>
		<h1>You are offline</h1>
		<p>The latest page could not be loaded right now. Please check your connection and try again.</p>
		<a href="/">Go to homepage</a>
	</main>
</body>
</html>`;

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(PAGE_CACHE).then((cache) => {
			return cache.put(
				OFFLINE_URL,
				new Response(OFFLINE_HTML, {
					headers: { 'Content-Type': 'text/html; charset=utf-8' }
				})
			);
		})
	);

	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => ![PAGE_CACHE, ASSET_CACHE].includes(key))
					.map((key) => caches.delete(key))
			);
		})
	);

	self.clients.claim();
});

async function networkFirst(request) {
	const cache = await caches.open(PAGE_CACHE);

	try {
		const networkResponse = await fetch(request);
		if (networkResponse && networkResponse.ok) {
			cache.put(request, networkResponse.clone());
		}
		return networkResponse;
	} catch {
		const cached = await cache.match(request);
		if (cached) return cached;

		if (request.mode === 'navigate') {
			const offline = await cache.match(OFFLINE_URL);
			if (offline) return offline;
		}

		return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
	}
}

async function cacheFirst(request) {
	const cache = await caches.open(ASSET_CACHE);
	const cached = await cache.match(request);
	if (cached) return cached;

	const response = await fetch(request);
	if (response && response.ok) {
		cache.put(request, response.clone());
	}
	return response;
}

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);
	const isSameOrigin = url.origin === self.location.origin;
	const isImageOrStaticAsset =
		isSameOrigin && (url.pathname.startsWith('/images/') || url.pathname.startsWith('/_next/static/'));

	if (isImageOrStaticAsset) {
		event.respondWith(cacheFirst(event.request));
		return;
	}

	const isMainPageRequest =
		event.request.mode === 'navigate' ||
		(isSameOrigin && event.request.headers.get('accept')?.includes('text/html'));

	if (isMainPageRequest) {
		event.respondWith(networkFirst(event.request));
	}
});
