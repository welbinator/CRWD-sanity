import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../schemas';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'v08nicyw';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('slide').title('Homepage Slides'),
            S.divider(),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('podcastEpisode').title('Podcast Episodes'),
            S.documentTypeListItem('youtubeVideo').title('YouTube Videos'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
