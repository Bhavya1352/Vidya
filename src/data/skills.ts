export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const designSkills: SkillGroup = {
  title: 'Design Skills',
  skills: [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 70 },
    { name: 'Adobe Premiere Pro', level: 75 },
    { name: 'Microsoft Office Suite', level: 90 },
    { name: 'Canva', level: 90 },
    { name: 'CorelDraw', level: 80 },
  ],
};

export const professionalSkills: SkillGroup = {
  title: 'Professional Skills',
  skills: [
    { name: 'Branding', level: 80 },
    { name: 'Digital Marketing', level: 75 },
    { name: 'Market Research', level: 60 },
    { name: 'Content Creation', level: 95 },
    { name: 'Campaign Management', level: 90 },
    { name: 'Social Media Management', level: 95 },
  ],
};

export const personalSkills: string[] = [
  'Excellent communication skills (written and verbal)',
  'Ability to learn quickly',
  'Ability to multi-task',
  'Delivers results under pressure and meets deadlines',
  'Strong organizational and time management abilities',
  'Proactive, confident, & capable of taking initiative',
  'Interpersonal & team working skills',
  'Detail-oriented with a strong work ethic',
];

export const clientLogos = [
  { name: 'Gowma', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/GOWMA.png' },
  { name: 'Colour Waves', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/ColourWaves.png' },
  { name: 'Nanu Hotels', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/Nanu-Group.png' },
  { name: 'Truspeq', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/Truspec.png' },
  { name: 'Alma De Chocolate', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/ALMA-2.png' },
  { name: 'Beyond', url: 'https://thesocialvidya.com/wp-content/uploads/2024/10/BEYOND-1.png' },
];
