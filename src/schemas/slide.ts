import { defineType, defineField } from 'sanity';

export const slide = defineType({
  name: 'slide',
  title: 'Slides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used only in the studio to identify this slide',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slideType',
      title: 'Slide Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hero (logo + tagline + CTAs)', value: 'hero' },
          { title: 'Video Background + Text', value: 'video-text' },
          { title: 'Services Grid', value: 'services' },
          { title: 'Portfolio Grid', value: 'portfolio' },
          { title: 'Team Grid', value: 'team' },
          { title: 'Contact Form', value: 'contact' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading / Lede',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'video',
      title: 'Background Video',
      type: 'file',
      description: 'MP4 video for background (video-text and hero slides)',
      options: { accept: 'video/mp4' },
    }),
    defineField({
      name: 'videoOverlay',
      title: 'Video Overlay Style',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
        ],
      },
      initialValue: 'dark',
    }),
    defineField({
      name: 'textTheme',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          { title: 'Light (white)', value: 'light' },
          { title: 'Dark (black)', value: 'dark' },
        ],
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'ctas',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
      description: 'Used for nav links (e.g. "services", "contact-us"). No # needed.',
    }),
  ],
  orderings: [
    {
      title: 'Slide Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'slideType', order: 'order' },
    prepare({ title, subtitle, order }: any) {
      return { title: `${order}. ${title}`, subtitle };
    },
  },
});
