import { notFound } from "next/navigation";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { posts } from "../posts";

export default function ThinkingPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <main className="min-h-screen px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto space-y-6 text-slate-800">
                <Link
                    href="/"
                    className="underline text-blue-800 hover:no-underline flex w-fit"
                >
                    <IoMdArrowRoundBack className="mt-1 mr-1" />
                    back to home
                </Link>

                <h1 className="text-3xl font-bold">
                    <span className="text-slate-700 text-2xl">{post.title}</span>
                </h1>

                <article className="prose prose-slate max-w-none whitespace-pre-line">
                    {post.content}
                </article>
            </div>
        </main>
    );
}