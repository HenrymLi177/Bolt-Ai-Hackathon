export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  rating: number;
  studentsEnrolled: number;
  instructor: string;
  image: string;
  skills: string[];
  curriculum: string[];
  prerequisites: string[];
}

export interface CourseCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}