import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'phoneUrl', title: 'Phone URL', type: 'string', description: 'e.g. tel:3193605541' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
  ],
});
