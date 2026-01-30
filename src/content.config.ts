import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        techStack: z.array(z.string()),
        image: z.string(),
        link: z.string(),
        order: z.number().default(0),
    }),
});

const skills = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
    schema: z.object({
        title: z.string(),
        items: z.array(z.string()),
        icon: z.string(),
        order: z.number().default(0),
    }),
});

const timeline = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/timeline" }),
    schema: z.object({
        type: z.enum(['work', 'education']),
        title: z.string(), // Position or Degree
        subtitle: z.string(), // Company or Institution
        duration: z.string(),
        startDate: z.string(),
        endDate: z.string().nullable().optional(),
        location: z.string(),
        items: z.array(z.string()), // Description or Achievements
        link: z.string().optional(),
        logo: z.string().optional(),
    }),
});

const aboutFeatures = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/about_features" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(), // Icon name to lookup
        color: z.string(),
        order: z.number().default(0),
    }),
});

const siteConfig = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/site_config" }),
    schema: z.union([
        z.object({
            id: z.literal('intro'),
            greeting: z.string(),
            introduction: z.array(z.string()),
            tagline: z.string(),
            skipText: z.string(),
            enableSkip: z.boolean(),
        }),
        z.object({
            id: z.literal('personal'),
            name: z.string(),
            title: z.string(),
            email: z.string(),
            phone: z.string(),
            location: z.string(),
            bio: z.string(),
            interests: z.string().optional(),
            resumeUrl: z.string().optional(),
        }),
        z.object({
            id: z.literal('socials'),
            github: z.string(),
            linkedin: z.string(),
            instagram: z.string(),
        })
    ])
});

const hackathons = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/hackathons" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(), // Project name
        date: z.string(),
        location: z.string(),
        description: z.array(z.string()),
        techStack: z.array(z.string()),
        link: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = {
    projects,
    skills,
    timeline,
    aboutFeatures,
    siteConfig,
    hackathons
};
