import { storyblokEditable } from '@storyblok/react/rsc';

export default function Footer({ blok }) {
	return (
		<footer
			className="bg-gray-900 text-white px-8 py-8 flex items-center gap-4"
			{...storyblokEditable(blok)}
		>
			<div>
				<p className="font-semibold">{blok.copyright}</p>
				{blok.description && (
					<p className="text-sm text-gray-400">{blok.description}</p>
				)}
			</div>
		</footer>
	);
}