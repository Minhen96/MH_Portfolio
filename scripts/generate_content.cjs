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
        linkedin: "https://www.linkedin.com/in/yap-min-hen-366b3a218", 
        instagram: "https://www.instagram.com/minhen_96", 
        whatsapp: "https://wa.me/60102322096",
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
        logo: '/timeline/gs_square_transparent.png', // Assuming existing
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
        logo: '/timeline/tarumt_square_transparent.png', // Assuming existing
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
        logo: '/timeline/tarumt_square_transparent.png', // Recycle or explicit
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
        logo: '/timeline/chkl_square_transparent.png', // Assuming existing
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
        id: 'iota-hackathon',
        title: 'IOTA Hackathon Malaysia',
        subtitle: 'First Hackathon',
        date: '2025',
        location: 'Kuala Lumpur',
        description: [
            'Build blockchain solution using iota api',
            'Built a platform for issuing, holding, and verifying academic credentials with transparent credential and quick verification'
        ],
        techStack: ['IOTA', 'Blockchain', 'Sui', 'TypeScript'],
        link: 'https://blog.iota.org/iota-hackathon-malaysia-2025/',
        image: '/hackathon/IOTA-hackathon.jpeg',
        order: 1
    },
    {
        id: 'aws-ai-hackathon',
        title: 'AWS Great AI Hackathon',
        subtitle: 'Use AWS services build AI solution',
        date: '2025',
        location: 'Kuala Lumpur',
        description: [
            'Built AI legal assistant with law knowledge, help people to analyze and understand document risks and clauses identification.',
            'Used AWS amplify, lambda, bedrock, s3, opensearch.'
        ],
        techStack: ['AWS Amplify', 'Lambda', 'Bedrock', 'S3', 'OpenSearch'],
        link: 'https://www.apu.edu.my/news/apu-leads-asean-record-great-malaysia-ai-hackathon-2025',
        image: '/hackathon/aws-greatai-hackathon.jpeg',
        order: 2
    },
    {
        id: 'techtrove-hackathon',
        title: 'TechTrove Unearth Innovation',
        subtitle: 'Build solution with specific topics',
        date: '2025',
        location: 'Kuala Lumpur',
        description: [
            'Done project “RE:ME”, a personal self-growth record web app that tracks moods, hobbies, reflections, and visualizes your strengths for self-awareness.',
            'Used Nextjs and Supabase as tech stack, Vercel to deploy.'
        ],
        techStack: ['Next.js', 'Supabase', 'Vercel', 'Tailwind CSS'],
        link: 'https://luma.com/1k4xqcrs',
        image: '/hackathon/TechTrove-Unearth-Innovation.jpeg',
        order: 3
    },
    {
        id: 'cursor-anthropic-hackathon',
        title: 'Cursor x Anthropic Hackathon Malaysia',
        subtitle: 'Use AI tools to build project',
        date: '2025',
        location: 'Kuala Lumpur',
        description: [
            'Done project “JustSnap”, a snipping tool can do drawing, ocr, translation, snip ui and convert to ui code, copy, pin, save to local features.',
            'Use React and Rust as tech stack, Github action to build release.'
        ],
        techStack: ['React', 'Rust', 'Tauri', 'AI APIs'],
        link: 'https://luma.com/cursor-hack-my',
        image: '/hackathon/Cursor-Anthropic-Hackathon.png',
        order: 4
    }
];

const skillsData = [
    {
        id: 'software-engineering',
        title: 'Software Engineering',
        items: [
            { name: 'OOP 🧱', icon: 'codeforces' },
            { name: 'Agile 🏃', icon: 'asana' },
            { name: 'Software Architecture 🏛️', icon: 'lucid' },
            { name: 'Software Testing 🧪', icon: 'jest' },
            { name: 'HCI 👥', icon: 'accessibility' }
        ],
        icon: 'Code2',
        order: 1
    },
    {
        id: 'frontend',
        title: 'Frontend & Web Frameworks',
        items: [
            { name: 'React (TypeScript) ⚛️', icon: 'react' },
            { name: 'Next.js 🚀', icon: 'nextdotjs' },
            { name: 'Astro 👨‍🚀', icon: 'astro' },
            { name: 'Tailwind CSS 🎨', icon: 'tailwindcss' }
        ],
        icon: 'Layout',
        order: 2
    },
    {
        id: 'backend',
        title: 'Backend',
        items: [
            { name: 'Spring Boot (Java) ☕', icon: 'springboot' },
            { name: '.NET Core (ASP.NET) ⚡', icon: 'dotnet' },
            { name: 'REST APIs 🔌', icon: 'postman' },
            { name: 'Solidity ⛓️', icon: 'solidity' }
        ],
        icon: 'Server',
        order: 3
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        items: [
            { name: 'Redis 🔴', icon: 'redis' },
            { name: 'Authentication 🔑', icon: 'auth0' }
        ], 
        icon: 'Cloud',
        order: 4
    },
    {
        id: 'devops',
        title: 'DevOps & Deployment',
        items: [
            { name: 'Docker 🐳', icon: 'docker' },
            { name: 'AWS (basic) ☁️', icon: 'amazonaws' },
            { name: 'GitHub Actions 🤖', icon: 'githubactions' },
            { name: 'Vercel 📐', icon: 'vercel' },
            { name: 'Railway 🚂', icon: 'railway' }
        ],
        icon: 'Container',
        order: 5
    },
    {
        id: 'databases',
        title: 'Databases & Storage',
        items: [
            { name: 'Postgres 🐘', icon: 'postgresql' },
            { name: 'MSSQL 🛢️', icon: 'microsoftsqlserver' },
            { name: 'Supabase ⚡', icon: 'supabase' },
            { name: 'Firebase 🔥', icon: 'firebase' }
        ],
        icon: 'Database',
        order: 6
    },
    {
        id: 'tools',
        title: 'Other Tools',
        items: [
            { name: 'Git & GitHub 🐙', icon: 'github' },
            { name: 'Postman 🚀', icon: 'postman' },
            { name: 'Figma 🎨', icon: 'figma' },
            { name: 'Canva 🖌️', icon: 'canva' }
        ],
        icon: 'PenTool',
        order: 7
    }
];

const projectsData = [
    {
        id: 'mini-tng',
        title: 'Mini Tng',
        description: 'E-wallet application but using email to transfer money. Practice purpose.',
        techStack: ['React', 'Spring Boot', 'Postgres', 'Kafka', 'Redis', 'Prometheus', 'Grafana'],
        link: 'https://github.com/Minhen96/Mini_tng_Springboot', 
        order: 1
    },
    {
        id: 'justsnap',
        title: 'JustSnap',
        description: 'Snipping tool with OCR, translation, and UI-to-code conversion features.',
        techStack: ['React', 'Rust', 'Tauri', 'AI API'],
        link: 'https://github.com/Minhen96/JustSnap',
        order: 2
    },
    {
        id: 'partysnap',
        title: 'PartySnap',
        description: 'Create event, participants join event to upload images. Find related images by scanning face.',
        techStack: ['React', 'Supabase', 'Cloudflare R2', 'Vercel', 'OAuth', 'face-api.js'],
        link: 'https://github.com/Minhen96/PartySnap',
        order: 3
    },
    {
        id: 'reme',
        title: 'RE:ME',
        description: 'Self-growth app tracking moods, hobbies, and reflections, visualize your growth and find your personality.',
        techStack: ['Next.js', 'Supabase', 'Vercel', 'OAuth'],
        link: 'https://github.com/Minhen96/RE-ME',
        order: 4
    },
    {
        id: 'ai-whatsapp',
        title: 'AI WhatsApp Assistant',
        description: 'AI-powered chatbot system that integrates WhatsApp messaging, can save knowledge and chat.',
        techStack: ['React', 'Twilio', 'SpringBoot', 'Web Socket'],
        link: 'https://github.com/Minhen96/ai-whatsapp-assistant',
        order: 5
    },
    {
        id: 'hr-app',
        title: 'HR App & Portal',
        description: 'Comprehensive HR management solution with mobile app and admin web portal.',
        techStack: ['Flutter', 'React', '.NET core', 'MSSQL'],
        link: 'https://github.com/Minhen96/hr_user_app_with_admin_web_portal',
        order: 6
    },
    {
        id: 'pet-ecommerce',
        title: 'Pet Ecommerce Platform',
        description: 'Final Year Project. Platform for pet products and services, can be merchant or buyer.',
        techStack: ['Kotlin', 'Firebase'],
        link: 'https://github.com/Minhen96/FYP-pet-ecommerce-platform-mobile-app',
        order: 7
    },
    {
        id: 'ai-legal',
        title: 'AI Legal Assistant',
        description: 'AI-powered assistant tp analyse legal document analysis and clause identification, and ai chatbot to answer legal question.',
        techStack: ['AWS Amplify', 'Lambda', 'Bedrock', 'S3', 'Opensearch'],
        link: 'https://github.com/Minhen96/ai-legal-assistant',
        order: 8
    },
    {
        id: '3d-particle',
        title: '3D Particle Motion',
        description: 'Interactive 3D particle motion visualization with holographic interface.',
        techStack: ['Three.js', 'JavaScript', 'HTML/CSS'],
        link: 'https://github.com/Minhen96/Jarvis-Holographic-interface',
        order: 9
    },
    {
        id: 'self-portfolio',
        title: 'Self Portfolio',
        description: 'Modern and fast personal portfolio website built with Astro.',
        techStack: ['Astro', 'Tailwind CSS', 'Preact'],
        link: 'https://github.com/Minhen96/MH_Portfolio',
        image: '/projects/default.png',
        order: 10
    }
];

// About Features
const aboutFeaturesData = [
    {
        id: 'explore',
        title: 'Explore',
        description: 'Constantly exploring new technologies and staying ahead of the curve with a deep willingness to learn.',
        icon: 'Rocket',
        color: 'navy',
        order: 1
    },
    {
        id: 'maintainable',
        title: 'Maintainable Code',
        description: 'Writing clean, scalable, and well-documented code that is easy to maintain.',
        icon: 'Code2',
        color: 'royal-blue',
        order: 2
    },
    {
        id: 'ux',
        title: 'User-Centric UX',
        description: 'Placing the user at the heart of the design process to create intuitive experiences.',
        icon: 'Palette',
        color: 'indigo',
        order: 3
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

        // Dynamic Image Discovery for Projects
        if (name === 'projects') {
            const projectImageDir = path.join(__dirname, '../public/projects', item.id);
            let projectImages = [];
            
            if (fs.existsSync(projectImageDir)) {
                projectImages = fs.readdirSync(projectImageDir)
                    .filter(file => file.toLowerCase().endsWith('.png'))
                    .sort()
                    .map(file => `/projects/${item.id}/${file}`);
            }

            // Fallback for missing images or missing folders
            if (projectImages.length === 0) {
                // If a single image was already provided (like self-portfolio), use it
                if (item.image) {
                    projectImages = [item.image];
                } else {
                    projectImages = ['/projects/default.png'];
                }
            }
            
            content.images = projectImages;
            delete content.image; // Cleanup old field
        }
        
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        console.log(`Generated ${filePath}`);
    });
}
console.log('Content generated successfully!');
