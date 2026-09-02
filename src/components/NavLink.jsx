import { storyblokEditable } from '@storyblok/react/rsc';

export default function NavLink({ blok }) {
	return (
		<li {...storyblokEditable(blok)}>
			<a
				href={blok.link?.cached_url ?? blok.link?.url ?? '/'}
				className="text-sm font-medium text-gray-900 hover:text-gray-600 uppercase"
			>
				{blok.label}
			</a>
		</li>
	);
}
