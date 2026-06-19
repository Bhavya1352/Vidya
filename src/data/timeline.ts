export interface TimelineEntry {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  responsibilities: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 1,
    type: 'work',
    title: 'Digital Marketing Executive',
    organization: 'Placeme Consultants',
    location: 'New Zealand',
    period: 'Feb 2024 – Present',
    description: 'Education and Immigration Consultancy',
    responsibilities: [
      'Plan, design and schedule engaging posts',
      'Manage content across aligned platforms',
      'Collaborate with the CEO on strategies',
      'Monitor audience engagement',
      'Analyze competitors for improvements',
      'Create engaging, brand-aligned content for blogs and newsletters',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Digital Marketing Coordinator',
    organization: 'Antarang Productions',
    location: 'India',
    period: 'Sep 2022 – May 2023',
    description: 'Film production and design house',
    responsibilities: [
      'Designed engaging social media content',
      'Collaborated with teams for timely asset delivery',
      'Monitored trends for up-to-date content',
      'Produced dynamic video edits for captivating reels',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: 'Marketing Executive & Digital Ad Designer',
    organization: 'Nanu Group',
    location: 'India',
    period: 'Aug 2015 – June 2023',
    description: 'Luxury hospitality — hotels, resorts & spas; real estate development',
    responsibilities: [
      'Collaborated with the sales team on projects',
      'Assisted in aligned marketing initiatives',
      'Created promotions and managed print vendors',
      'Oversaw project execution at branches',
      'Created graphics and stayed updated on trends',
      'Ensured data protection and compliance',
    ],
  },
  {
    id: 4,
    type: 'education',
    title: 'Master of Digital Business',
    organization: 'The University of Waikato',
    location: 'Hamilton, New Zealand',
    period: 'July 2023 – June 2024',
    responsibilities: [],
  },
  {
    id: 5,
    type: 'education',
    title: 'MBA (Marketing)',
    organization: 'Sikkim Manipal University',
    location: 'Margao, India',
    period: '2005 – 2007',
    responsibilities: [],
  },
  {
    id: 6,
    type: 'education',
    title: 'Bachelor in Computer Application',
    organization: 'Shree Damodar College of Commerce & Economics',
    location: 'India',
    period: 'June 2002 – March 2005',
    responsibilities: [],
  },
];
