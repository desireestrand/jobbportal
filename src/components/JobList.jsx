import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';

export default async function JobList({ blok, query = '', department = '' }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.getStories({
		version: 'published',
		starts_with: 'jobs/',
		content_type: 'job-post',
		sort_by: 'content.publishedAt:desc',
		...(query && { search_term: query }),
		...(department && { filter_query: { department: { in: department } } }),
	});

	const stories = data.stories;

	return (
		<section className="px-8 py-6" {...storyblokEditable(blok)}>
			{blok.heading && (
				<h2 className="text-lg font-bold mb-4">{blok.heading}</h2>
			)}

			{stories.length === 0 ? (
				<p className="text-gray-500">
					{blok.empty_text || 'Inga lediga tjänster.'}
				</p>
			) : (
				stories.map((story) => (
					<Link
						href={`/${story.full_slug}`}
						key={story.uuid}
						className="flex gap-4 items-center bg-white border border-gray-200 rounded-2xl p-5 mb-4 hover:shadow-sm transition-shadow"
					>
						<article className="flex-1 min-w-0" key={story.uuid}>
							<h3 className="text-base font-semibold mb-1">
								{story.content.title}
							</h3>
							<p className="text-sm font-semibold text-gray-700 mb-1">
								{story.content.location}
							</p>
							<p className="text-sm text-gray-500 mb-2 line-clamp-2">
								{story.content.summary}
							</p>
							<div className="flex gap-1.5">
								<span className="text-xs font-medium bg-gray-100 rounded-full px-2.5 py-1 uppercase">
									{story.content.department}
								</span>
							</div>
						</article>

						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="text-gray-300 shrink-0"
						>
							<path d="M9 6l6 6-6 6" />
						</svg>
					</Link>
				))
			)}
		</section>
	);
}
