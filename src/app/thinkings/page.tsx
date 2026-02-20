import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { posts } from "./posts";

const ThinkingsPage = () => {
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
                    <span className="text-slate-700 text-2xl">/thinkings</span>
                </h1>

                <ul className="mt-8 list-disc list-inside">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/thinkings/${post.slug}`}
                                className="text-md underline hover:no-underline"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ThinkingsPage;