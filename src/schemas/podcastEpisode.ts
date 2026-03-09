import { defineType, defineField } from 'sanity';

export const podcastEpisode = defineType({
  name: 'podcastEpisode',
  title: 'Podcast Episodes',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Episode Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'episodeNumber', title: 'Episode Number', type: 'number' }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'embedUrl', title: 'Embed URL', type: 'url', description: 'Spotify, Apple Podcasts, or other embed URL' }),
    defineField({
      name: 'coverImage', title: 'Cover Image', type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({
      name: 'description', title: 'Full Description', type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'episodeNumber', media: 'coverImage' },
    prepare({ title, subtitle, media }: any) {
      return { title, subtitle: `Episode ${subtitle}`, media };
    },
  },
});
