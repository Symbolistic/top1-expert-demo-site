import Link from 'next/link';
import { getPublishedPosts } from '@/utils/fetchBlogPosts';
import { SITE_NAME } from '@/utils/constants';

export const metadata = {
    title: `Blog – ${SITE_NAME}`,
};

export default async function BlogIndexPage() {
    const posts = await getPublishedPosts();

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-4xl font-bold mb-10 text-text">Blog</h1>

            {posts.length === 0 && (
                <p className="text-muted">No posts published yet. Check back soon.</p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block p-6 rounded-[var(--radius-md)] bg-surface-2 border border-border hover:border-primary transition-colors duration-200"
                    >
                        <h2 className="font-heading text-lg font-semibold text-text mb-2">{post.title}</h2>
                        <p className="text-sm text-muted">{post.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
