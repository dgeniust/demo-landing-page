// src/types/job.ts
export interface Company {
  name: string;
  logo: string;
  size: string;
  industry: string;
  location: string;
}

export interface Job {
  id: string;
  title: string;
  salary: string;
  location: string;
  experience: string;
  deadline: string;
  company: Company;
  tags: string[];
  description: string[];
  requirements: string[];
  income: string[];
  benefits: string[];
  additionalBenefits: { icon: React.ReactNode; text: string }[];
  workLocation: string;
  workHours: string[];
  applicationMethod: string;
  generalInfo: { icon: React.ReactNode; label: string; value: string }[];
  requiredSkills: string[];
  relatedCategories: string[];
  suggestedJobs: {
    id: string;
    logo: string;
    title: string;
    company: string;
    salary: string;
    location: string;
  }[];
}