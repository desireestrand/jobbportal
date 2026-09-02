import { renderRichText } from '@storyblok/react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

export default function JobPost({ blok }) {
    const renderedContent = renderRichText(blok.content);

    return (
        <article className="px-8 py-10 max-w-3xl mx-auto" {...storyblokEditable(blok)}>
            <Link
                href="/jobs"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M15 6l-6 6 6 6" />
                </svg>
                Tillbaka till jobbannonser
            </Link>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
                {blok.title}
            </h1>

            <p className="text-lg text-gray-500 mb-5">{blok.summary}</p>

            <div className="flex flex-wrap items-center gap-2 mb-8">
                {blok.department && (
                    <span className="text-xs font-medium bg-gray-100 rounded-full px-2.5 py-1 uppercase">
                        {blok.department}
                    </span>
                )}
                {blok.location && (
                    <span className="text-xs font-medium bg-gray-100 rounded-full px-2.5 py-1">
                        {blok.location}
                    </span>
                )}
            </div>

            <div
                className="rich-text mb-8"
                dangerouslySetInnerHTML={{ __html: renderedContent }}
            />

            <p className="text-sm text-gray-400 border-t border-gray-100 pt-4">
                Publicerad: {blok.publishedAt}
            </p>
        </article>
    );
}