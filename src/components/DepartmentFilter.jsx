import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function DepartmentFilter({
    blok,
    department = '',
    query = '',
}) {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/datasource_entries', {
        datasource: 'job-departments',
    });

    return (
        <form
            action="/jobs"
            method="get"
            className="flex flex-col gap-1.5"
            {...storyblokEditable(blok)}
        >
            {blok.label && (
                <label
                    htmlFor="department"
                    className="text-xs font-medium text-gray-500 px-1"
                >
                    {blok.label}
                </label>
            )}

            <div className="h-10 flex items-center gap-2">
                <div className="relative h-full">
                    <select
                        id="department"
                        name="department"
                        defaultValue={department}
                        className="h-full appearance-none border border-gray-200 bg-white rounded-full pl-4 pr-9 text-sm font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-300 hover:bg-gray-50"
                    >
                        <option value="">{blok.placeholder}</option>
                        {data.datasource_entries.map((entry) => (
                            <option key={entry.id} value={entry.value}>
                                {entry.name}
                            </option>
                        ))}
                    </select>

                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                </div>

                <input type="hidden" name="q" value={query} />

                <button
                    type="submit"
                    className="h-full flex items-center bg-gray-900 text-white rounded-full px-4 text-sm font-medium hover:bg-gray-800"
                >
                    Filtrera
                </button>
            </div>
        </form>
    );
}