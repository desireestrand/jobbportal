import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
	title: 'Jobbportal',
	description: 'Hitta din nästa yrkesroll här.',
};

export default function RootLayout({ children }) {
	const currentYear = new Date().getFullYear();
	return (
		<StoryblokProvider>
			<html lang="en">
				<body>
					{children}
					<footer>All rights reserved © {currentYear} </footer>
				</body>
			</html>
		</StoryblokProvider>
	);
}
