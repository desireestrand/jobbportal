import {
    storyblokEditable,
    StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Toolbar({ blok, ...rest }) {
    return (
        <div
            className="flex justify-between items-end px-8 py-5 flex-wrap gap-4 border-b border-gray-100"
            {...storyblokEditable(blok)}
        >
            <div className="flex gap-4 flex-wrap items-end">
                {blok.blocks?.map((nestedBlok) => (
                    <StoryblokServerComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                        {...rest}
                    />
                ))}
            </div>
        </div>
    );
}