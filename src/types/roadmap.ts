export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type Domain = 'Data Engineering' | 'Cloud & DevOps' | 'Software Development' | 'Cybersecurity' | 'Data Science' | 'Modern Workplace';
export type ResourceCategory = 'Learning' | 'Practice' | 'Applying';
export type ResourceType = 'Official Docs' | 'Video Course' | 'Practice Course' | 'Community Learning' | 'Bootcamp' | 'Hands-on Lab' | 'Project' | 'Mock Test' | 'Interview Prep' | 'Job Platform' | 'Portfolio Guide';

export interface Cost {
  region: string;
  currency: string;
  examCost: number;
  learningCost: string; // e.g. "Free" or "$10/mo"
  practiceCost: string;
  usdEquivalent: number;
}

export interface Resource {
  id: string;
  title: string;
  provider: string;
  type: ResourceType;
  url: string;
  isFree: boolean;
  category: ResourceCategory;
  description?: string;
  lastVerified?: string;
  alternativeUrls?: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  level: Level;
  code?: string;
  description: string;
  isHighDemand?: boolean;
  minExperienceYears: number; // 0 for fundamentals, 1-2 for associate, 3-5+ for advanced
  costs: Cost[];
  resources: Resource[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  level: Level;
  order: number;
  concepts?: string[];
  outcomes?: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  realWorldUseCase: string;
  technicalStack: string[];
  difficulty: Level;
}

export interface Technology {
  id: string;
  name: string;
  category: Domain;
  description: string;
  icon: string; // Lucide icon name
  roles: string[];
  certifications: Certification[];
  roadmap: RoadmapStep[];
  jobPrep?: Resource[];
  portfolioProjects?: PortfolioProject[];
}
