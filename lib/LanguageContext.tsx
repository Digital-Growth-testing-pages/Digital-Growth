'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type LanguageCode = 'en' | 'km' | 'zh';
type TranslationDictionary = Record<string, string>;
type Translations = Record<LanguageCode, TranslationDictionary>;

type LanguageContextValue = {
	currentLang: LanguageCode;
	setLanguage: (lang: LanguageCode) => void;
	changeLanguage: (lang: LanguageCode) => void;
	t: (key: string) => string;
};

const translations: Translations = {
	en: {
		brand_logo: 'Digital Growth KH',
		nav_home: 'Home',
		nav_services: 'Services',
		nav_projects: 'Projects',
		nav_about: 'About',
		nav_contact: 'Contact',
		dock_quote: 'Get a Quote',
		nav_toggle: 'Toggle navigation menu',
	},
	km: {
		brand_logo: 'Digital Growth KH',
		nav_home: 'ទំព័រដើម',
		nav_services: 'សេវាកម្ម',
		nav_projects: 'គម្រោង',
		nav_about: 'អំពីយើង',
		nav_contact: 'ទំនាក់ទំនង',
		dock_quote: 'ស្នើសុំតម្លៃ',
		nav_toggle: 'បើក/បិទ ម៉ឺនុយ',
	},
	zh: {
		brand_logo: 'Digital Growth KH',
		nav_home: '首页',
		nav_services: '服务',
		nav_projects: '项目',
		nav_about: '关于',
		nav_contact: '联系',
		dock_quote: '获取报价',
		nav_toggle: '切换导航菜单',
	},
};

const LanguageContext = createContext<LanguageContextValue>({
	currentLang: 'en',
	setLanguage: () => {},
	changeLanguage: () => {},
	t: (key: string) => translations.en[key] || key,
});

function addKhmerWordBreaks(text: string): string {
	if (typeof window !== 'undefined' && window.Intl && Intl.Segmenter) {
		const segmenter = new Intl.Segmenter('km', { granularity: 'word' });
		const segments = segmenter.segment(text);
		let result = '';

		for (const segment of segments) {
			result += segment.segment + '\u200B';
		}

		return result;
	}

	return text;
}

type LanguageProviderProps = {
	children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [currentLang, setCurrentLang] = useState<LanguageCode>('en');

	useEffect(() => {
		const savedLang = localStorage.getItem('dgkh_lang');
		if (savedLang === 'en' || savedLang === 'km' || savedLang === 'zh') {
			setCurrentLang(savedLang);
		}
	}, []);

	const changeLanguage = (lang: LanguageCode) => {
		setCurrentLang(lang);
		localStorage.setItem('dgkh_lang', lang);
		document.documentElement.lang = lang;
	};

	const t = (key: string): string => {
		const text = translations[currentLang][key] || translations.en[key] || key;
		if (currentLang === 'km') {
			return addKhmerWordBreaks(text);
		}
		return text;
	};

	const value = useMemo<LanguageContextValue>(
		() => ({
			currentLang,
			setLanguage: changeLanguage,
			changeLanguage,
			t,
		}),
		[currentLang],
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	return useContext(LanguageContext);
}
