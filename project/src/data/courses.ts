import { Course, CourseCategory } from '../types/Course';

export const categories: CourseCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code',
    description: 'Master programming languages and development'
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: 'Globe',
    description: 'Build modern web applications'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    icon: 'BarChart3',
    description: 'Analyze data and build ML models'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: 'Shield',
    description: 'Protect systems and networks'
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    icon: 'Smartphone',
    description: 'Create native and cross-platform apps'
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    icon: 'Cloud',
    description: 'Deploy and scale applications'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: 'Brain',
    description: 'Build intelligent systems'
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    description: 'Design and manage data systems'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete JavaScript Mastery',
    description: 'Master JavaScript from fundamentals to advanced concepts including ES6+, async programming, and modern development practices.',
    category: 'programming',
    level: 'Intermediate',
    duration: '12 weeks',
    price: 299,
    rating: 4.8,
    studentsEnrolled: 15420,
    instructor: 'Dr. Sarah Johnson',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['JavaScript', 'ES6+', 'Async Programming', 'DOM Manipulation', 'API Integration'],
    curriculum: [
      'JavaScript Fundamentals',
      'Functions and Scope',
      'Objects and Arrays',
      'ES6+ Features',
      'Asynchronous JavaScript',
      'DOM Manipulation',
      'API Integration',
      'Error Handling',
      'Testing with Jest',
      'Modern JavaScript Tools'
    ],
    prerequisites: ['Basic HTML', 'CSS Knowledge', 'Programming Basics']
  },
  {
    id: '2',
    title: 'Full-Stack React Development',
    description: 'Build modern web applications with React, Node.js, and MongoDB. Learn the complete MERN stack development process.',
    category: 'web-dev',
    level: 'Advanced',
    duration: '16 weeks',
    price: 449,
    rating: 4.9,
    studentsEnrolled: 8900,
    instructor: 'Michael Chen',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Authentication'],
    curriculum: [
      'React Fundamentals',
      'Component Architecture',
      'State Management with Redux',
      'React Router',
      'Node.js & Express',
      'MongoDB & Mongoose',
      'Authentication & Authorization',
      'RESTful API Design',
      'Testing & Deployment',
      'Performance Optimization'
    ],
    prerequisites: ['JavaScript Proficiency', 'HTML/CSS', 'Basic React Knowledge']
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis, visualization, and machine learning. Master pandas, NumPy, and scikit-learn.',
    category: 'data-science',
    level: 'Intermediate',
    duration: '14 weeks',
    price: 399,
    rating: 4.7,
    studentsEnrolled: 12300,
    instructor: 'Dr. Emily Rodriguez',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter'],
    curriculum: [
      'Python Programming Basics',
      'Data Structures & Algorithms',
      'NumPy for Numerical Computing',
      'Pandas for Data Manipulation',
      'Data Visualization with Matplotlib',
      'Statistical Analysis',
      'Machine Learning Fundamentals',
      'Scikit-learn Library',
      'Data Cleaning & Preprocessing',
      'Real-world Projects'
    ],
    prerequisites: ['Basic Programming', 'Mathematics Foundation', 'Statistics Basics']
  },
  {
    id: '4',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn cybersecurity fundamentals, ethical hacking techniques, and penetration testing methodologies to secure systems.',
    category: 'cybersecurity',
    level: 'Advanced',
    duration: '18 weeks',
    price: 599,
    rating: 4.8,
    studentsEnrolled: 6750,
    instructor: 'James Wilson',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Kali Linux', 'Social Engineering'],
    curriculum: [
      'Cybersecurity Fundamentals',
      'Network Security Basics',
      'Linux for Security Professionals',
      'Reconnaissance & Information Gathering',
      'Vulnerability Assessment',
      'Exploitation Techniques',
      'Web Application Security',
      'Wireless Security',
      'Social Engineering',
      'Report Writing & Documentation'
    ],
    prerequisites: ['Networking Basics', 'Linux Command Line', 'Security Fundamentals']
  },
  {
    id: '5',
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile applications using React Native. Learn iOS and Android app development with a single codebase.',
    category: 'mobile-dev',
    level: 'Intermediate',
    duration: '12 weeks',
    price: 379,
    rating: 4.6,
    studentsEnrolled: 9200,
    instructor: 'Alex Thompson',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['React Native', 'Mobile UI/UX', 'Navigation', 'State Management', 'Native Modules'],
    curriculum: [
      'React Native Fundamentals',
      'Mobile UI Components',
      'Navigation & Routing',
      'State Management',
      'Working with APIs',
      'Device Features Integration',
      'Performance Optimization',
      'Testing Mobile Apps',
      'Publishing to App Stores',
      'Advanced Patterns'
    ],
    prerequisites: ['React Knowledge', 'JavaScript Proficiency', 'Mobile Development Basics']
  },
  {
    id: '6',
    title: 'AWS Cloud Architecture',
    description: 'Master Amazon Web Services and learn to design, deploy, and manage scalable cloud infrastructure and applications.',
    category: 'cloud',
    level: 'Advanced',
    duration: '20 weeks',
    price: 649,
    rating: 4.9,
    studentsEnrolled: 7890,
    instructor: 'Dr. Robert Kim',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['AWS Services', 'Cloud Architecture', 'DevOps', 'Containerization', 'Serverless'],
    curriculum: [
      'Cloud Computing Fundamentals',
      'AWS Core Services',
      'EC2 & Auto Scaling',
      'Load Balancing & Networking',
      'Storage Solutions (S3, EBS)',
      'Database Services (RDS, DynamoDB)',
      'Serverless Architecture',
      'Containerization with Docker',
      'CI/CD Pipelines',
      'Monitoring & Security'
    ],
    prerequisites: ['System Administration', 'Networking Knowledge', 'Command Line Proficiency']
  },
  {
    id: '7',
    title: 'Machine Learning with TensorFlow',
    description: 'Build and deploy machine learning models using TensorFlow. Learn deep learning, neural networks, and AI fundamentals.',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '16 weeks',
    price: 549,
    rating: 4.8,
    studentsEnrolled: 5640,
    instructor: 'Dr. Maria Santos',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    curriculum: [
      'Machine Learning Fundamentals',
      'TensorFlow & Keras',
      'Neural Network Architecture',
      'Convolutional Neural Networks',
      'Recurrent Neural Networks',
      'Computer Vision Projects',
      'Natural Language Processing',
      'Transfer Learning',
      'Model Deployment',
      'MLOps & Production'
    ],
    prerequisites: ['Python Proficiency', 'Mathematics & Statistics', 'Machine Learning Basics']
  },
  {
    id: '8',
    title: 'PostgreSQL Database Design',
    description: 'Master advanced database design, optimization, and administration with PostgreSQL. Learn complex queries and performance tuning.',
    category: 'databases',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 329,
    rating: 4.7,
    studentsEnrolled: 4320,
    instructor: 'David Park',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1600',
    skills: ['PostgreSQL', 'Database Design', 'Query Optimization', 'Performance Tuning', 'Backup & Recovery'],
    curriculum: [
      'Database Fundamentals',
      'PostgreSQL Installation & Setup',
      'Advanced SQL Queries',
      'Database Design Principles',
      'Indexing & Performance',
      'Stored Procedures & Functions',
      'Triggers & Constraints',
      'Backup & Recovery',
      'Replication & High Availability',
      'Monitoring & Maintenance'
    ],
    prerequisites: ['SQL Basics', 'Database Concepts', 'Command Line Knowledge']
  }
];