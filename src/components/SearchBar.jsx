import { storyblokEditable } from '@storyblok/react';

export default function SearchBar({ blok, query = '', department = '' }) {
	return (
		<form
			action="/jobs"
			method="get"
			className="flex flex-col gap-1.5"
			{...storyblokEditable(blok)}
		>
			{blok.label && (
				<label
					htmlFor="search"
					className="text-xs font-medium text-gray-500 px-1"
				>
					{blok.label}
				</label>
			)}

			<div className="h-10 flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-4">
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					className="text-gray-400 shrink-0"
				>
					<circle cx="11" cy="11" r="7" />
					<path d="M21 21l-4.3-4.3" />
				</svg>

				<input
					type="search"
					id="search"
					name="q"
					placeholder={blok.placeholder}
					defaultValue={query}
					className="flex-1 h-full border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
				/>

				<input type="hidden" name="department" value={department} />

				<button
					type="submit"
					className="ml-auto h-full flex items-center bg-gray-900 text-white rounded-full px-5 font-semibold text-sm whitespace-nowrap hover:bg-gray-800"
				>
					Sök
				</button>
			</div>
		</form>
	);
}
