import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Hero({ blok }) {
	return (
		<section
			className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white px-8 py-12 items-center"
			{...storyblokEditable(blok)}
		>
			<div>
				<h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
					{blok.heading}
				</h1>

				<p className="text-gray-500 text-lg mb-6">{blok.description}</p>

				{blok.blocks?.map((nestedBlok) => (
					<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
				))}
			</div>

			{blok.image?.filename && (
				<img
					src={blok.image.filename}
					alt={blok.image.alt || 'Hero-bild'}
					className="rounded-2xl object-cover w-full h-full max-h-80"
				/>
			)}
		</section>
	);
}