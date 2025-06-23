import { LearningPath, Instructor, CommunityPost } from '../types/LearningPath';

export const learningPaths: LearningPath[] = [
  {
    id: 'fullstack-web-dev',
    title: 'Full-Stack Web Developer',
    description: 'Master both frontend and backend development with modern technologies. Build complete web applications from scratch.',
    duration: '6 months',
    difficulty: 'Intermediate',
    courses: ['1', '2', '8'], // JavaScript, React, PostgreSQL
    skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'API Development', 'Authentication'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 899,
    studentsEnrolled: 12500,
    rating: 4.9,
    instructor: 'Dr. Sarah Johnson',
    prerequisites: ['Basic HTML/CSS', 'Programming fundamentals'],
    outcomes: [
      'Build full-stack web applications',
      'Master modern JavaScript frameworks',
      'Design and implement RESTful APIs',
      'Deploy applications to production',
      'Implement user authentication systems'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Science & AI Specialist',
    description: 'Transform data into insights with Python, machine learning, and AI. Master the complete data science pipeline.',
    duration: '8 months',
    difficulty: 'Advanced',
    courses: ['3', '7'], // Python Data Science, TensorFlow ML
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow', 'Statistics', 'AI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 1299,
    studentsEnrolled: 8900,
    rating: 4.8,
    instructor: 'Dr. Emily Rodriguez',
    prerequisites: ['Mathematics & Statistics', 'Basic Python knowledge'],
    outcomes: [
      'Build machine learning models',
      'Perform advanced data analysis',
      'Create AI-powered applications',
      'Master data visualization',
      'Deploy ML models to production'
    ]
  },
  {
    id: 'cybersecurity-expert',
    title: 'Cybersecurity Expert',
    description: 'Protect organizations from cyber threats. Learn ethical hacking, penetration testing, and security architecture.',
    duration: '10 months',
    difficulty: 'Advanced',
    courses: ['4'], // Ethical Hacking
    skills: ['Penetration Testing', 'Network Security', 'Incident Response', 'Risk Assessment', 'Compliance'],
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 1599,
    studentsEnrolled: 5600,
    rating: 4.9,
    instructor: 'James Wilson',
    prerequisites: ['Networking fundamentals', 'Linux basics', 'Security awareness'],
    outcomes: [
      'Conduct professional penetration tests',
      'Design secure network architectures',
      'Respond to security incidents',
      'Implement compliance frameworks',
      'Lead cybersecurity initiatives'
    ]
  },
  {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer',
    description: 'Create stunning mobile applications for iOS and Android. Master cross-platform development with React Native.',
    duration: '5 months',
    difficulty: 'Intermediate',
    courses: ['5'], // React Native
    skills: ['React Native', 'Mobile UI/UX', 'App Store Deployment', 'Push Notifications', 'Mobile APIs'],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 799,
    studentsEnrolled: 9800,
    rating: 4.7,
    instructor: 'Alex Thompson',
    prerequisites: ['JavaScript proficiency', 'React basics'],
    outcomes: [
      'Build cross-platform mobile apps',
      'Publish apps to app stores',
      'Implement mobile-specific features',
      'Optimize app performance',
      'Monetize mobile applications'
    ]
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    description: 'Design and implement scalable cloud infrastructure. Master AWS, DevOps, and modern deployment strategies.',
    duration: '7 months',
    difficulty: 'Advanced',
    courses: ['6'], // AWS Cloud Architecture
    skills: ['AWS', 'DevOps', 'Kubernetes', 'Terraform', 'CI/CD', 'Microservices'],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 1199,
    studentsEnrolled: 7200,
    rating: 4.8,
    instructor: 'Dr. Robert Kim',
    prerequisites: ['System administration', 'Networking knowledge', 'Command line proficiency'],
    outcomes: [
      'Design scalable cloud architectures',
      'Implement DevOps best practices',
      'Manage containerized applications',
      'Optimize cloud costs and performance',
      'Lead digital transformation initiatives'
    ]
  }
];

export const instructors: Instructor[] = [
  {
    id: 'sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Senior Full-Stack Developer & Tech Lead',
    bio: 'Dr. Sarah Johnson is a seasoned full-stack developer with over 12 years of experience building scalable web applications. She has led development teams at major tech companies and holds a Ph.D. in Computer Science from MIT. Sarah is passionate about teaching modern web development practices and has mentored over 500 developers worldwide.',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'System Design'],
    experience: '12+ years',
    rating: 4.9,
    studentsCount: 15420,
    coursesCount: 8,
    achievements: [
      'MIT Ph.D. in Computer Science',
      'Former Tech Lead at Google',
      'Published 25+ research papers',
      'Speaker at 50+ tech conferences',
      'Mentor of the Year Award 2023'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahcodes',
      github: 'https://github.com/sarahjohnson',
      website: 'https://sarahjohnson.dev'
    }
  },
  {
    id: 'emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    title: 'AI Research Scientist & Data Science Expert',
    bio: 'Dr. Emily Rodriguez is a leading AI researcher and data scientist with expertise in machine learning, deep learning, and statistical analysis. She has published extensively in top-tier journals and has worked on cutting-edge AI projects at major tech companies. Emily is dedicated to making AI and data science accessible to everyone.',
    avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Statistics', 'Data Visualization'],
    experience: '10+ years',
    rating: 4.8,
    studentsCount: 12300,
    coursesCount: 6,
    achievements: [
      'Ph.D. in Machine Learning from Stanford',
      'Former Senior Scientist at OpenAI',
      'Author of "Practical Machine Learning"',
      '40+ peer-reviewed publications',
      'Kaggle Grandmaster'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyai',
      github: 'https://github.com/emilyrodriguez'
    }
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    title: 'Cybersecurity Expert & Ethical Hacker',
    bio: 'James Wilson is a certified cybersecurity expert with over 15 years of experience in penetration testing, incident response, and security architecture. He has helped numerous organizations strengthen their security posture and has trained thousands of security professionals worldwide.',
    avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Penetration Testing', 'Network Security', 'Incident Response', 'Risk Assessment', 'Compliance'],
    experience: '15+ years',
    rating: 4.9,
    studentsCount: 6750,
    coursesCount: 5,
    achievements: [
      'CISSP, CEH, OSCP Certified',
      'Former Security Consultant at Deloitte',
      'Discovered 100+ security vulnerabilities',
      'Author of "Ethical Hacking Handbook"',
      'Cybersecurity Educator of the Year 2022'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/jameshacks',
      website: 'https://jameswilson.security'
    }
  },
  {
    id: 'alex-thompson',
    name: 'Alex Thompson',
    title: 'Mobile Development Specialist',
    bio: 'Alex Thompson is a mobile development expert specializing in React Native and cross-platform app development. With over 8 years of experience, Alex has built and launched dozens of successful mobile applications and has helped startups scale their mobile presence.',
    avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['React Native', 'iOS Development', 'Android Development', 'Mobile UI/UX', 'App Store Optimization'],
    experience: '8+ years',
    rating: 4.7,
    studentsCount: 9200,
    coursesCount: 4,
    achievements: [
      'Built 50+ mobile applications',
      'Former Mobile Lead at Uber',
      'React Native core contributor',
      'Mobile App of the Year Award 2021',
      'Google Developer Expert'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexthompson',
      twitter: 'https://twitter.com/alexmobile',
      github: 'https://github.com/alexthompson'
    }
  },
  {
    id: 'robert-kim',
    name: 'Dr. Robert Kim',
    title: 'Cloud Solutions Architect',
    bio: 'Dr. Robert Kim is a cloud computing expert with extensive experience in designing and implementing large-scale cloud infrastructures. He has helped numerous enterprises migrate to the cloud and optimize their cloud operations for performance and cost-effectiveness.',
    avatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['AWS', 'Azure', 'DevOps', 'Kubernetes', 'Terraform', 'Microservices'],
    experience: '14+ years',
    rating: 4.8,
    studentsCount: 7890,
    coursesCount: 7,
    achievements: [
      'AWS Solutions Architect Professional',
      'Former Principal Architect at Netflix',
      'Kubernetes Certified Administrator',
      'Cloud Migration Expert',
      'DevOps Transformation Leader'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/robertkim',
      twitter: 'https://twitter.com/robertcloud',
      github: 'https://github.com/robertkim'
    }
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    title: 'Just completed the Full-Stack Web Development path! 🎉',
    content: 'After 6 months of intensive learning, I finally completed the full-stack path. The projects were challenging but incredibly rewarding. Special thanks to Dr. Sarah Johnson for the amazing courses!',
    author: {
      name: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced'
    },
    category: 'Showcase',
    tags: ['Full-Stack', 'React', 'Node.js', 'Success Story'],
    likes: 127,
    replies: 23,
    createdAt: '2024-01-15T10:30:00Z',
    isLiked: false
  },
  {
    id: '2',
    title: 'Need help with TensorFlow model optimization',
    content: 'I\'m working on a computer vision project and my model is taking too long to train. Has anyone dealt with similar issues? Any tips for optimization?',
    author: {
      name: 'David Chen',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate'
    },
    category: 'Help',
    tags: ['TensorFlow', 'Machine Learning', 'Optimization', 'Computer Vision'],
    likes: 45,
    replies: 12,
    createdAt: '2024-01-14T15:45:00Z',
    isLiked: true
  },
  {
    id: '3',
    title: 'New React 18 features discussion',
    content: 'What are your thoughts on the new concurrent features in React 18? How are you implementing them in your projects?',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced'
    },
    category: 'Discussion',
    tags: ['React', 'JavaScript', 'Frontend', 'React 18'],
    likes: 89,
    replies: 34,
    createdAt: '2024-01-13T09:20:00Z',
    isLiked: false
  },
  {
    id: '4',
    title: 'TechEdu announces new AI Ethics course!',
    content: 'We\'re excited to announce our new course on AI Ethics and Responsible AI Development. This course will cover bias detection, fairness in ML, and ethical considerations in AI deployment.',
    author: {
      name: 'TechEdu Team',
      avatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Expert'
    },
    category: 'News',
    tags: ['AI Ethics', 'New Course', 'Announcement', 'Responsible AI'],
    likes: 203,
    replies: 67,
    createdAt: '2024-01-12T14:00:00Z',
    isLiked: true
  },
  {
    id: '5',
    title: 'My cybersecurity lab setup for practice',
    content: 'Here\'s my home lab setup for practicing penetration testing and cybersecurity skills. Includes VirtualBox VMs, Kali Linux, and various vulnerable applications for testing.',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate'
    },
    category: 'Showcase',
    tags: ['Cybersecurity', 'Lab Setup', 'Penetration Testing', 'Kali Linux'],
    likes: 156,
    replies: 28,
    createdAt: '2024-01-11T11:15:00Z',
    isLiked: false
  }
];