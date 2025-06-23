export interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  courses: string[]; // Course IDs
  skills: string[];
  image: string;
  price: number;
  studentsEnrolled: number;
  rating: number;
  instructor: string;
  prerequisites: string[];
  outcomes: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  expertise: string[];
  experience: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  achievements: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    level: string;
  };
  category: 'Discussion' | 'Help' | 'Showcase' | 'News';
  tags: string[];
  likes: number;
  replies: number;
  createdAt: string;
  isLiked?: boolean;
}