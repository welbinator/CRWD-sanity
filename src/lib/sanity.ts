import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ── QUERIES ──────────────────────────────────────────────────────

export async function getSlides() {
  return sanityClient.fetch(`*[_type == "slide"] | order(order asc){
    _id, title, order, slideType, heading, subheading,
    video{ asset->{ url } },
    videoOverlay, textTheme, ctas, anchorId
  }`);
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getAllPosts() {
  return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id, title, slug, publishedAt, excerpt, author, mainImage
  }`);
}

export async function getPost(slug: string) {
  return sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, publishedAt, excerpt, author, mainImage, body
  }`, { slug });
}

export async function getAllEpisodes() {
  return sanityClient.fetch(`*[_type == "podcastEpisode"] | order(episodeNumber desc){
    _id, title, slug, episodeNumber, publishedAt, excerpt, embedUrl, coverImage
  }`);
}

export async function getEpisode(slug: string) {
  return sanityClient.fetch(`*[_type == "podcastEpisode" && slug.current == $slug][0]{
    _id, title, slug, episodeNumber, publishedAt, excerpt, embedUrl, coverImage, description
  }`, { slug });
}

export async function getAllVideos() {
  return sanityClient.fetch(`*[_type == "youtubeVideo"] | order(publishedAt desc){
    _id, title, slug, youtubeId, publishedAt, excerpt
  }`);
}

export async function getVideo(slug: string) {
  return sanityClient.fetch(`*[_type == "youtubeVideo" && slug.current == $slug][0]{
    _id, title, slug, youtubeId, publishedAt, excerpt, description
  }`, { slug });
}
