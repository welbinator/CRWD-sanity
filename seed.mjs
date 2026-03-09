// Seed script — pushes default content into Sanity
// Run with: node seed.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'v08nicyw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ── SITE SETTINGS ────────────────────────────────────────────────
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Cedar Rapids Web Design',
  phone: '319.360.5541',
  phoneUrl: 'tel:3193605541',
  email: 'james@cedarrapidswebdesign.com',
  address: 'Cedar Rapids, Iowa',
};

// ── SLIDES ───────────────────────────────────────────────────────
const slides = [
  {
    _id: 'slide-hero',
    _type: 'slide',
    title: 'Hero',
    order: 1,
    slideType: 'hero',
    heading: 'Cedar Rapids Web Design',
    subheading: 'Beautiful websites for local businesses',
    anchorId: 'hero',
    videoOverlay: 'none',
    textTheme: 'light',
    ctas: [
      { _key: 'cta1', label: 'Our Services', url: '#services' },
      { _key: 'cta2', label: 'Get a Free Quote', url: '#contact-us' },
    ],
  },
  {
    _id: 'slide-consultation',
    _type: 'slide',
    title: 'Free Consultation',
    order: 2,
    slideType: 'video-text',
    heading: 'Free Consultation',
    subheading: "Whether face to face, phone or video call we'd love to talk about your project and give you a free estimate.",
    anchorId: 'consultation',
    videoOverlay: 'dark',
    textTheme: 'light',
    ctas: [
      { _key: 'cta1', label: 'Contact Us', url: '#contact-us' },
      { _key: 'cta2', label: '319.360.5541', url: 'tel:3193605541' },
    ],
  },
  {
    _id: 'slide-mobile',
    _type: 'slide',
    title: 'Mobile Friendly',
    order: 3,
    slideType: 'video-text',
    heading: 'Mobile Friendly',
    subheading: "Every website is built with a purpose: to give every visitor a positive experience, regardless of what device they're using.",
    anchorId: 'mobile-friendly',
    videoOverlay: 'dark',
    textTheme: 'light',
    ctas: [],
  },
  {
    _id: 'slide-seo',
    _type: 'slide',
    title: 'SEO',
    order: 4,
    slideType: 'video-text',
    heading: 'Search Engine Optimized',
    subheading: "There's no point in having a beautiful website, if nobody ever sees it.",
    anchorId: 'seo',
    videoOverlay: 'light',
    textTheme: 'dark',
    ctas: [],
  },
  {
    _id: 'slide-services',
    _type: 'slide',
    title: 'Services',
    order: 5,
    slideType: 'services',
    heading: 'Services',
    subheading: 'What we can do for you',
    anchorId: 'services',
    textTheme: 'light',
    ctas: [],
  },
  {
    _id: 'slide-portfolio',
    _type: 'slide',
    title: 'Portfolio',
    order: 6,
    slideType: 'portfolio',
    heading: 'Portfolio',
    anchorId: 'portfolio',
    textTheme: 'light',
    ctas: [],
  },
  {
    _id: 'slide-team',
    _type: 'slide',
    title: 'Team',
    order: 7,
    slideType: 'team',
    heading: 'Our Team',
    anchorId: 'team',
    textTheme: 'light',
    ctas: [],
  },
  {
    _id: 'slide-contact',
    _type: 'slide',
    title: 'Contact',
    order: 8,
    slideType: 'contact',
    heading: 'Contact Us',
    subheading: "Hello! Thanks for your interest in contacting Cedar Rapids Web Design. Fill out our secure contact form to request a free estimate.",
    anchorId: 'contact-us',
    textTheme: 'light',
    ctas: [],
  },
];

// ── RUN ──────────────────────────────────────────────────────────
try {
  const settingsResult = await client.createOrReplace(siteSettings);
  console.log('✅ Site settings seeded:', settingsResult._id);
} catch (err) {
  console.error('❌ Site settings error:', err.message);
}

for (const slide of slides) {
  try {
    const result = await client.createOrReplace(slide);
    console.log(`✅ Slide seeded: ${result._id}`);
  } catch (err) {
    console.error(`❌ Slide error (${slide._id}):`, err.message);
  }
}

console.log('\nDone! Remember to publish all documents in the studio.');
