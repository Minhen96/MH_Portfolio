// Portfolio Constants - Update your information here
// This centralized file makes it easy to maintain your portfolio content

// Intro Screen Configuration
export const INTRO_CONFIG = {
  greeting: "Hi there,",
  introduction: [
    "I'm a Full Stack Developer & Creative Technologist.",
    "I build innovative solutions across web and mobile platforms.",
    "Combining technical expertise with creative problem-solving.",
  ],
  tagline: "Where Code Meets Creativity",
  skipText: "Press any key to continue...",
  enableSkip: false, // Set to true to skip intro for returning visitors
};

export const PERSONAL_INFO = {
  name: "Yap Min Hen",
  title: "Full Stack Developer",
  email: "evanyap96@gmail.com",
  phone: "+60 (10) 232-2096",
  location: "Kuala Lumpur, Malaysia",
  bio: "Passionate developer with experience in building modern solutions. I love creating elegant solutions to complex problems.",
  resumeUrl: "/path-to-your-resume.pdf",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Minhen96",
  linkedin: "https://www.linkedin.com/in/min-hen-yap-96b061205/",
  instagram: "https://www.instagram.com/minhen_96?igsh=ODNveW1yZnVka2Y%3D&utm_source=qr",
  // portfolio: "https://yourwebsite.com",
  // Add more social links as needed
};

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frontend: ["React", "Vue.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
  other: ["REST APIs", "GraphQL", "Microservices", "Agile/Scrum"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    image: "/projects/taskapp.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
    image: "/projects/weather.png",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project3",
    featured: false,
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Greenstem Business Software Sdn Bhd",
    position: "Internship",
    duration: "NOV 2024 - MAY 2025",
    startDate: "2024-11",
    endDate: "2025-05",
    location: "Kuala Lumpur, Malaysia",
    link: "https://www.greenstem.com.my/",
    logo: "/timeline/gs_square_transparent.png",
    type: "work",
    description: [
      "Flutter to develop workshop and company internal mobile app.",
      "React and .NET Core (C#) to develop internal web application.",
    ],
  },
  {
    id: 2,
    company: "Ant International",
    position: "Java Engineer Fresh Grad",
    duration: "MAY 2025 - Present",
    startDate: "2025-05",
    endDate: null, // null means current/present
    location: "Kuala Lumpur, Malaysia",
    link: "https://www.ant-intl.com/en/",
    logo: "/timeline/ant_square_transparent.png",
    type: "work",
    description: [
      "Learn business logic and payment processing.",
      "Maintain backend services using Spring Boot.",
      "Deal with offline table and billing config.",
      "Monitor performance and troubleshoot issues.",
      "Support Double 11 promotion event stress testing and monitoring.",
    ],
  },
  // Add more experience as needed
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Chong Hwa Independent High School",
    degree: "Secondary Education",
    duration: "2016 - 2020",
    startDate: "2016-01",
    endDate: "2020-12",
    location: "Kuala Lumpur, Malaysia",
    type: "education",
    link: "https://www.chonghwakl.edu.my/",
    logo: "/timeline/chkl_square_transparent.png",
    achievements: ["SPM: 10A"],
  },
  {
    id: 2,
    institution: "Tunku Abdul Rahman University of Management and Technology",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2022 - 2025",
    startDate: "2022-01",
    endDate: "2025-12",
    location: "Kuala Lumpur, Malaysia",
    type: "education",
    link: "https://www.tarc.edu.my/",
    logo: "/timeline/tarumt_square_transparent.png",
    achievements: ["CGPA: 3.82/4.0", "Dean's List"],
  },
  // Add more education as needed
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/verification/...",
  },
  {
    id: 2,
    name: "React Advanced Certification",
    issuer: "Platform Name",
    date: "2022",
    credentialUrl: "https://example.com/cert/...",
  },
  // Add more certifications as needed
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    position: "CTO at Company",
    content: "An exceptional developer who consistently delivers high-quality work. Great team player!",
    avatar: "/testimonials/person1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    content: "Very professional and detail-oriented. Always meets deadlines and exceeds expectations.",
    avatar: "/testimonials/person2.jpg",
  },
  // Add more testimonials as needed
];
