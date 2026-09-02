import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

export default function Cta({ blok }) {
	return (
		<Link
			href={blok.link?.cached_url || '#'}
			className="inline-block bg-gray-900 text-white rounded-full px-6 py-3 font-semibold text-sm"
			{...storyblokEditable(blok)}
		>
			{blok.label}
		</Link>
	);
}