import type { BlogPost } from '../app/blog/posts';

type BlogPostPageContentProps = {
  post: BlogPost;
};

export default function BlogPostPageContent({ post }: BlogPostPageContentProps) {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 max-w-[900px] mx-auto px-6">
      <h1 className="text-neonCyan text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <p className="font-mono text-neonMagenta mb-6">{post.meta}</p>

      <div className="border-l-4 border-neonCyan bg-white/5 p-6 my-8 rounded-r-lg">
        <h2 className="text-neonCyan font-bold mb-3">Executive Summary</h2>
        <p className="text-gray-300 leading-relaxed text-lg">{post.executiveSummary}</p>
      </div>

      <article className="space-y-6">
        {post.content.map((block, index) =>
          block.type === 'heading' ? (
            <h2 key={`${block.text}-${index}`} className="text-2xl text-neonCyan font-semibold pt-4">
              {block.text}
            </h2>
          ) : (
            <p key={`${block.text}-${index}`} className="text-gray-300 leading-relaxed text-lg">
              {block.text}
            </p>
          )
        )}
      </article>
    </main>
  );
}
