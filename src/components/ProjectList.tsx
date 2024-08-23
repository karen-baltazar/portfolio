import ProjectItem from './ProjectItem';

const projects = [
    {
        title: 'Delta',
        description: 'Led the creation of a software department, managing projects that improved workflow optimization and tracking.',
        image: 'delta.png',
        reverse: true,
        githubLink: 'https://github.com/softwaredelta',
        partners: [
            {path: 'michelin.png', alt: 'Michelin'},
            {path: 'ram.png', alt: 'Grupo Asesores RAM'},
        ],
        technologies: [
            { name: 'typescript', message: 'Typescript', ariaLabel: 'Typescript' },
            { name: 'reactjs', message: 'ReactJS', ariaLabel: 'ReactJS' },
            { name: 'nodejs', message: 'Node.js', ariaLabel: 'Node.js' },
            { name: 'tailwindcss', message: 'Tailwind CSS', ariaLabel: 'Tailwind CSS' },
            { name: 'html5', message: 'HTML5', ariaLabel: 'HTML5' },
            { name: 'css3', message: 'CSS3', ariaLabel: 'CSS3' },
        ],
    },
    {
        title: 'Cultura QRO',
        description: 'Built a system to manage support requests for cultural events, enhancing transparency and simplifying the approval process.',
        image: 'cultura-qro.png',
        reverse: false,
        githubLink: 'https://github.com/iangg29/tc2007b',
        partners: [
            {path: 'gob-qro.png', alt: 'Secrectaría de Cultura'},
        ],
        technologies: [
            { name: 'typescript', message: 'Typescript', ariaLabel: 'Typescript' },
            { name: 'reactjs', message: 'ReactJS', ariaLabel: 'ReactJS' },
            { name: 'nodejs', message: 'Node.js', ariaLabel: 'Node.js' },
            { name: 'tailwindcss', message: 'Tailwind CSS', ariaLabel: 'Tailwind CSS' },
            { name: 'graphql', message: 'GraphQL', ariaLabel: 'GraphQL' },
            { name: 'html5', message: 'HTML5', ariaLabel: 'HTML5' },
            { name: 'css3', message: 'CSS3', ariaLabel: 'CSS3' },
        ],
    },
    {
        title: 'Dynamic Tech',
        description: 'Developed a feedback tool that enhanced the efficiency of feedback collection and review, enabling faster and more organized responses.',
        image: 'dynamic-tech.png',
        reverse: true,
        githubLink: 'https://github.com/DenisseDB/Dynamic_Tech',
        partners: [
            {path: 'zebrands.png', alt: 'Zebrands'},
        ],
        technologies: [
            { name: 'js', message: 'Javascript', ariaLabel: 'Javascript' },
            { name: 'bootstrap5', message: 'Bootstrap', ariaLabel: 'Bootstrap' },
            { name: 'nodejs', message: 'Node.js', ariaLabel: 'Node.js' },
            { name: 'html5', message: 'HTML5', ariaLabel: 'HTML5' },
            { name: 'css3', message: 'CSS3', ariaLabel: 'CSS3' },
        ],
    },
    {
        title: 'Epic Echo',
        description: 'Working on a platform to share story recommendations, helping people easily discover impactful narratives that resonate with them.',
        image: 'epic-echo.png',
        reverse: false,
        note: '(In Progress)',
    },
];

function ProjectList() {
    return (
        <div className="space-y-16 pt-12">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
        </div>
    );
}

export default ProjectList;