export type SkillCategory = {
    title: string;
    skills: string[];
    lightColor: string; // HSL color for light mode
    darkColor: string; // HSL color for dark mode
};

export const skillCategoriesData: SkillCategory[] = [
    {
        title: 'Frontend Development',
        skills: [
            'TypeScript',
            'React',
            'Next.js',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'Vite',
        ],
        lightColor: '210 100% 30%',
        darkColor: '210 100% 60%',
    },
    {
        title: 'Backend & Data',
        skills: [
            'Python',
            'pandas',
            'SQL',
            'PostgreSQL',
            'MongoDB',
            'REST APIs',
            'JSON',
            'AWS',
            'Google Cloud (GCP)',
            'Kafka',
            'Microservice Architecture',
            'Event-Driven Architecture',
        ],
        lightColor: '34 100% 30%',
        darkColor: '34 100% 60%',
    },
    {
        title: 'QA & Test Automation',
        skills: [
            'PyTest',
            'Postman',
            'JUnit',
            'Robot Framework',
            'Networking Protocols',
            'CI/CD',
        ],
        lightColor: '340 82% 40%',
        darkColor: '340 82% 60%',
    },
    {
        title: 'DevOps & Workflow',
        skills: [
            'Git',
            'Docker',
            'GitHub Actions',
            'GitLab',
            'Agile/Scrum',
            'Jira',
            'Vercel',
        ],
        lightColor: '118 100% 30%',
        darkColor: '118 100% 60%',
    },
];
