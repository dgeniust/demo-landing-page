export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  featured: boolean;
  color: string;
}