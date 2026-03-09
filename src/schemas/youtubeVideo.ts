import { defineType, defineField } from 'sanity';

export const youtubeVideo = defineType({
  name: 'youtubeVideo',
  title: 'YouTube Videos',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Video Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'youtubeId', title: 'YouTube Video ID', type: 'string', description: 'The part after ?v= in the YouTube URL' }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({
      name: 'description', title: 'Full Description', type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'youtubeId' },
    prepare({ title, subtitle }: any) {
      return {
        title,
        subtitle: subtitle ? `youtube.com/watch?v=${subtitle}` : '',
        media: subtitle ? { _type: 'image', asset: { url: `https://img.youtube.com/vi/${subtitle}/default.jpg` } } : undefined,
      };
    },
  },
});
