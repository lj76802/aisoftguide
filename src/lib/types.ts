export interface AiTool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  pricing: 'free' | 'freemium' | 'paid';
  pricingDetail: string;
  website: string;
  logo: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  isNew: boolean;
  pros: string[];
  cons: string[];
  useCases: string[];
  tutorialCount: number;
  updatedAt: string;
}

export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  toolName: string;
  toolSlug: string;
  excerpt: string;
  content: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
}

export interface Comparison {
  id: string;
  title: string;
  slug: string;
  tool1: string;
  tool2: string;
  excerpt: string;
}

export const CATEGORIES = [
  { id: 'writing', name: 'Writing & Content', icon: '✍️', count: 0 },
  { id: 'image', name: 'Image Generation', icon: '🎨', count: 0 },
  { id: 'coding', name: 'Coding & Dev', icon: '💻', count: 0 },
  { id: 'video', name: 'Video & Audio', icon: '🎬', count: 0 },
  { id: 'productivity', name: 'Productivity', icon: '⚡', count: 0 },
  { id: 'research', name: 'Research & Analysis', icon: '🔍', count: 0 },
  { id: 'chatbot', name: 'Chatbots & Assistants', icon: '🤖', count: 0 },
  { id: 'seo', name: 'SEO & Marketing', icon: '📈', count: 0 },
] as const;
