import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';

export default async function JobCategoryLinks({ blok }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource: 'job-departments',
	});

	const entries = data.datasource_entries;

	return (
		<section className="px-8 py-6" {...storyblokEditable(blok)}>
			{blok.heading && (
				<h2 className="text-lg font-bold mb-4">{blok.heading}</h2>
			)}

			{entries.length === 0 ? (
				<p className="text-gray-500">
					{blok.empty_text || 'Inga avdelningar hittades.'}
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{entries.map((d) => (
						<Link
							key={d.value}
							href={`/jobs?department=${d.value}`}
							className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow group"
						>
							<article className="flex-1 min-w-0">
								<h3 className="text-base font-semibold text-gray-90 transition-colors mb-1">
									{d.name}
								</h3>
								<p className="text-sm text-gray-500">Utforska tjänster</p>
							</article>

							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="text-gray-300 group-hover:text-gray-900 transition-colors shrink-0"
							>
								<path d="M9 6l6 6-6 6" />
							</svg>
						</Link>
					))}
				</div>
			)}
		</section>
	);
}
