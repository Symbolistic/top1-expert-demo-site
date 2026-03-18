import { notFound } from 'next/navigation';
import { getPublishedPosts, getPostMarkdown } from '@/utils/fetchBlogPosts';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const posts = await getPublishedPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;

    const posts = await getPublishedPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) return notFound();

    const markdown = await getPostMarkdown(post.id);

    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="font-heading text-4xl font-bold mb-3 text-text">{post.title}</h1>
            <p className="text-sm text-muted mb-10">{post.date}</p>
            <div className="text-text/80 leading-relaxed space-y-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-text [&_h2]:mt-8 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-6 [&_a]:text-primary [&_a]:underline [&_strong]:text-text [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:text-muted">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
