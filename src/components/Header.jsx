import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Header({ blok }) {
	return (
		<header
			className="flex items-center justify-between bg-white px-8 py-5 border-b border-gray-200"
			{...storyblokEditable(blok)}
		>
			<div className="flex items-center gap-2">
				{blok.logo?.filename && (
					<img src={blok.logo.filename} alt="Logotyp" className="w-6" />
				)}
				<span className="font-bold text-xl tracking-tight uppercase">
					{blok.title}
				</span>
			</div>

			<nav>
				<ul className="flex gap-8 list-none m-0 p-0">
					{blok.navigation?.map((navBlok) => (
						<StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
					))}
				</ul>
			</nav>
		</header>
	);
}
