export interface Service {
  id: number;
  title: string;
  description: string;
  subItems: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Brand Identity & Digital Ad Design',
    description: 'Crafting distinctive visual identities that resonate with your audience and stand the test of time.',
    subItems: ['Logo Design', 'Fonts & Typography', 'Tailored Visual Concepts'],
    icon: '◎',
  },
  {
    id: 2,
    title: 'Campaign Marketing',
    description: 'Strategic content planning and cross-platform execution that drives meaningful engagement.',
    subItems: ['Content Planning', 'Content Scheduling', 'Cross-Platform Promotion'],
    icon: '◈',
  },
  {
    id: 3,
    title: 'Video Content Creation',
    description: 'Producing dynamic video content that captures attention and tells your brand story.',
    subItems: ['YouTube Videos', 'Shorts & Reels', 'Reviews & Vlogs'],
    icon: '▶',
  },
  {
    id: 4,
    title: 'Print Design',
    description: 'Elegant print materials that carry your brand\'s sophistication into the physical world.',
    subItems: ['Flyers & Brochures', 'Posters & Catalogs', 'Invitations & Event Materials'],
    icon: '◻',
  },
  {
    id: 5,
    title: 'Custom Graphic Design',
    description: 'Bespoke design solutions tailored to your unique brand needs and visual language.',
    subItems: ['Branded Templates', 'Infographics'],
    icon: '✦',
  },
  {
    id: 6,
    title: 'Digital Content & SEO',
    description: 'Audience-first content creation combined with smart keyword integration for maximum visibility.',
    subItems: ['Social Media Graphics', 'SEO & Keyword Integration', 'Audience Engagement'],
    icon: '⟐',
  },
];
