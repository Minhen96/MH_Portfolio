const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../src/content');
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });


// --- Data Source from Resume ---

const siteConfig = {
    personal: {
        id: 'personal',
        name: 'Yap Min Hen',
        title: 'Software Engineer',
        email: 'evanyap96@gmail.com',
        phone: '+60 10-232 2096',
        location: 'Kuala Lumpur, Malaysia',
        bio: 'Passionate developer with experience in building modern solutions.',
        interests: 'Movie, Gym, Basketball'
    },
    intro: {
        id: 'intro',
        greeting: "Hi there, I'm",
        tagline: "Software Engineer",
        introduction: [
            "I build things for the web.",
            "I'm a software engineer based in Kuala Lumpur, specializing in building (and occasionally designing) exceptional digital experiences."
        ],
        // parameters: { particleColor: '#3B82F6', particleCount: 80 },
        enableSkip: true,
        skipText: "Press any key to skip intro"
    },
    socials: {
        id: 'socials',
        github: "https://github.com/Minhen96", 
        linkedin: "https://www.linkedin.com/in/minhen96", 
        instagram: "https://www.instagram.com/minhen_96", 
        email: "mailto:evanyap96@gmail.com"
    }
};

const timelineData = [
    {
        id: 'ant-group',
        type: 'work',
        title: 'Java Engineer Fresh Grad',
        subtitle: 'Ant Group | Kuala Lumpur',
        duration: 'MAY 2025 - JAN 2026',
        startDate: '2025-05',
        endDate: '2026-01',
        location: 'Kuala Lumpur',
        logo: '/timeline/ant_square_transparent.png',
        link: 'https://www.ant-intl.com/en/',
        description: [
            "Learn business logic and payment processing.",
            "Maintain backend services using Spring Boot.",
            "Deal with offline table and billing config.",
            "Support Double 11 promotion event stress testing and monitoring."
        ],
        items: [
            "Learn business logic and payment processing.",
            "Maintain backend services using Spring Boot.",
            "Deal with offline table and billing config.",
            "Support Double 11 promotion event stress testing and monitoring."
        ]
    },
    {
        id: 'greenstem',
        type: 'work',
        title: 'Mobile and Web Developer',
        subtitle: 'Greenstem Business Software Sdn Bhd',
        duration: 'NOV 2024 - MAY 2025',
        startDate: '2024-11',
        endDate: '2025-05',
        location: 'Kuala Lumpur',
        logo: '/timeline/greenstem_logo.png', // Assuming existing
        link: 'https://greenstem.com.my/',
        description: [
            "Flutter to develop workshop and company internal mobile app.",
            "React and .NET Core (C#) to develop internal web application."
        ],
        items: [
            "Flutter to develop workshop and company internal mobile app.",
            "React and .NET Core (C#) to develop internal web application."
        ]
    },
    {
        id: 'degree',
        type: 'education',
        title: 'Bachelor of Software Engineering (Honours)',
        subtitle: 'Tunku Abdul Rahman University of Management and Technology',
        duration: '2022 - 2025',
        startDate: '2022-01',
        endDate: '2025-12',
        location: 'Kuala Lumpur',
        logo: '/timeline/tarumt_logo.png', // Assuming existing
        link: 'https://www.tarc.edu.my/',
        description: [
            "CGPA 3.8",
            "Final Year Project in e-commerce system (kotlin + firebase)"
        ],
        items: [
             "CGPA 3.8",
             "Final Year Project in e-commerce system (kotlin + firebase)"
        ]
    },
    {
        id: 'foundation',
        type: 'education',
        title: 'Foundation in Engineering',
        subtitle: 'Tunku Abdul Rahman University of Management and Technology',
        duration: '2020 - 2021',
        startDate: '2020-01',
        endDate: '2021-12',
        location: 'Kuala Lumpur',
        logo: '/timeline/tarumt_logo.png', // Recycle or explicit
        link: 'https://www.tarc.edu.my/',
        description: [
            "Graduated with CGPA 3.9"
        ],
        items: [
            "Graduated with CGPA 3.9"
        ]
    },
    {
        id: 'secondary',
        type: 'education',
        title: 'Secondary School in Science Stream',
        subtitle: 'Chong Hwa Independent High School',
        duration: '2016 - 2020',
        startDate: '2016-01',
        endDate: '2020-12',
        location: 'Kuala Lumpur',
        logo: '/timeline/chkl_logo.png', // Assuming existing
        link: 'https://www.chonghwakl.edu.my/',
        description: [
            "SPM 10A"
        ],
        items: [
            "SPM 10A"
        ]
    }
];

const hackathonsData = [
    {
        id: 'cursor-anthropic',
        title: 'Cursor x Anthropic Hackathon Malaysia',
        subtitle: 'JustSnap',
        date: '2024', 
        location: 'Malaysia',
        description: [
            "Project 'JustSnap': a snipping tool can do drawing, ocr, translation, snip ui and convert to ui code, copy, pin, save to local features.",
            "Use React and Rust as tech stack, Github action to build release."
        ],
        techStack: ['React', 'Rust', 'Github Actions'],
        link: '',
        order: 1
    },
    {
        id: 'techtrove',
        title: 'TechTrove Unearth Innovation',
        subtitle: 'RE:ME',
        date: '2024',
        location: 'Malaysia',
        description: [
            "Done project 'RE:ME', a personal self-growth record web app that tracks moods, hobbies, reflections, and visualizes strengths.",
            "Used Nextjs and Supabase as tech stack, Vercel to deploy."
        ],
        techStack: ['Next.js', 'Supabase', 'Vercel'],
        link: '',
        order: 2
    },
    {
        id: 'aws-great-ai',
        title: 'AWS Great AI Hackathon',
        subtitle: 'AI Legal Assistant',
        date: '2024',
        location: 'Malaysia',
        description: [
            "Built AI legal assistant with law knowledge to analyze and identify document risks/clauses.",
            "Used AWS amplify, lambda, bedrock, s3, opensearch."
        ],
        techStack: ['AWS Amplify', 'Lambda', 'Bedrock', 'S3', 'Opensearch'],
        link: '',
        order: 3
    },
    {
        id: 'iota-hackathon',
        title: 'IOTA Hackathon Malaysia',
        subtitle: 'Blockchain Credential Platform',
        date: 'First Hackathon',
        location: 'Malaysia',
        description: [
            "Built a platform for issuing, holding, and verifying academic credentials with transparent credential and quick verification.",
            "Build blockchain solution using iota api."
        ],
        techStack: ['IOTA API', 'Blockchain'],
        link: '',
        order: 4
    }
];

const skillsData = [
    {
        id: 'software-engineering',
        title: 'Software Engineering',
        items: ['OOP', 'Agile', 'Software Architecture', 'Software Testing', 'HCI'],
        icon: 'Code2',
        order: 1
    },
    {
        id: 'frontend',
        title: 'Frontend & Web Frameworks',
        items: ['React (TypeScript)', 'Next.js', 'Astro', 'Tailwind CSS'],
        icon: 'Layout',
        order: 2
    },
    {
        id: 'backend',
        title: 'Backend',
        items: ['Spring Boot (Java)', '.NET Core (ASP.NET)', 'REST APIs', 'Solidity'],
        icon: 'Server',
        order: 3
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        items: ['Redis', 'Authentication'], 
        icon: 'Cloud',
        order: 4
    },
    {
        id: 'devops',
        title: 'DevOps & Deployment',
        items: ['Docker', 'AWS (basic)', 'GitHub Actions', 'Vercel', 'Railway'],
        icon: 'Container',
        order: 5
    },
    {
        id: 'databases',
        title: 'Databases & Storage',
        items: ['Postgres', 'MSSQL', 'Supabase', 'Firebase'],
        icon: 'Database',
        order: 6
    },
    {
        id: 'tools',
        title: 'Other Tools',
        items: ['Git & GitHub', 'Postman', 'Figma', 'Canva'],
        icon: 'PenTool',
        order: 7
    },
    {
        id: 'languages',
        title: 'Languages',
        items: ['English', 'Chinese', 'Malay'],
        icon: 'Languages',
        order: 8
    }
];

const projectsData = [
    {
        id: 'mini-tng',
        title: 'Mini Tng (email)',
        description: 'E-wallet application clone or similar system.',
        techStack: ['React', 'Spring Boot', 'Postgres', 'Kafka', 'Redis', 'Prometheus', 'Grafana'],
        link: '#', 
        image: '/projects/default.png', 
        order: 1
    },
    {
        id: 'just-snap',
        title: 'JustSnap',
        description: 'Snipping tool with OCR, translation, and UI-to-code conversion features.',
        techStack: ['React', 'Rust', 'AI API'],
        link: '#',
        image: '/projects/default.png',
        order: 2
    },
    {
        id: 'party-snap',
        title: 'PartySnap',
        description: 'Event gallery application.',
        techStack: ['React', 'Supabase', 'Cloudflare R2', 'Vercel', 'OAuth', 'face-api.js'],
        link: '#',
        image: '/projects/default.png',
        order: 3
    },
    {
        id: 'hr-app',
        title: 'HR App & Portal',
        description: 'Comprehensive HR management solution.',
        techStack: ['Flutter', 'React', '.NET core', 'MSSQL'],
        link: '#',
        image: '/projects/default.png',
        order: 4
    },
    {
        id: 're-me',
        title: 'RE:ME',
        description: 'Self-growth app tracking moods, hobbies, and reflections.',
        techStack: ['Next.js', 'Supabase', 'OAuth'],
        link: '#',
        image: '/projects/default.png',
        order: 5
    },
    {
        id: 'pet-ecommerce',
        title: 'Pet Ecommerce Platform',
        description: 'Platform for pet products and services.',
        techStack: ['Kotlin', 'Firebase'],
        link: '#',
        image: '/projects/default.png',
        order: 6
    },
    {
        id: 'ai-legal-assistant',
        title: 'AI Legal Assistant',
        description: 'AI-powered assistant for legal document analysis.',
        techStack: ['AWS Amplify', 'Lambda', 'Bedrock', 'S3', 'Opensearch'],
        link: '#',
        image: '/projects/default.png',
        order: 7
    },
    {
        id: 'self-portfolio',
        title: 'Self Portfolio',
        description: 'Personal portfolio website.',
        techStack: ['Astro'],
        link: '#',
        image: '/projects/default.png',
        order: 8
    }
];

// About Features
const aboutFeaturesData = [
    {
        id: 'fast',
        title: 'Fast',
        description: 'Fast load times and lag free interaction, my highest priority.',
        icon: 'Zap',
        color: 'navy',
        order: 1
    },
    {
        id: 'responsive',
        title: 'Responsive',
        description: 'My layouts will work on any device, big or small.',
        icon: 'Smartphone',
        color: 'royal-blue',
        order: 2
    },
    {
        id: 'intuitive',
        title: 'Intuitive',
        description: 'Strong preference for easy to use, intuitive UX/UI.',
        icon: 'Lightbulb',
        color: 'indigo',
        order: 3
    },
    {
        id: 'dynamic',
        title: 'Dynamic',
        description: "Websites don't have to be static, I love making pages come to life.",
        icon: 'Rocket',
        color: 'navy',
        order: 4
    }
];


// --- Generation Logic ---

const collections = {
    'site_config': Object.values(siteConfig),
    'timeline': timelineData,
    'skills': skillsData,
    'projects': projectsData,
    'about_features': aboutFeaturesData,
    'hackathons': hackathonsData
};

for (const [name, items] of Object.entries(collections)) {
    const dir = path.join(__dirname, '../src/content', name);
    
    // Clear directory to avoid stale files from previous schema
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            }
        });
    } else {
        fs.mkdirSync(dir, { recursive: true });
    }

    items.forEach(item => {
        if (!item.id) {
            console.warn(`Item in ${name} missing ID:`, item);
            return;
        }
        
        const filePath = path.join(dir, `${item.id}.json`);
        const content = { ...item };
        
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        console.log(`Generated ${filePath}`);
    });
}
console.log('Content generated successfully!');
