import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';
import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export const metadata = {
	title: 'Jobbportal — Hitta ditt nästa jobb',
	description:
		'Sveriges jobbportal — sök bland lediga tjänster inom teknik, design, marknadsföring och mer.',
};

export default async function RootLayout({ children }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/stories/config', {
		version: 'published',
		resolve_links: 'url',
	});

	const config = data.story.content;

	const headerBlok = config.header?.[0];
	const footerBlok = config.footer?.[0];

	return (
		<StoryblokProvider>
			<html lang="sv">
				<body className="bg-gray-100 min-h-screen py-8 px-4">
					<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
						{headerBlok && <StoryblokServerComponent blok={headerBlok} />}
						{children}
						{footerBlok && <StoryblokServerComponent blok={footerBlok} />}
					</div>
				</body>
			</html>
		</StoryblokProvider>
	);
}
