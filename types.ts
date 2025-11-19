import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Backend' | 'Frontend' | 'Cloud' | 'Tools';
}

export interface JobPosition {
  id: string;
  role: string;
  company: string; // Generic name
  period: string;
  description: string[];
  techStack: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}