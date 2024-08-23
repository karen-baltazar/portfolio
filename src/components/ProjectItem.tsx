import StackIcon from "tech-stack-icons";
import Tooltip from "./Tooltip";
import dbIcon from "../assets/db-icon.png";
import { motion } from "framer-motion";

type Partner = {
    path: string;
    alt: string;
}

type Technology = {
    name: string;
    message: string;
    ariaLabel: string;
}

type ProjectItemProps = {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
    note?: string;
    githubLink?: string;
    partners?: Partner[];
    technologies?: Technology[];
};

function ProjectItem({ title, description, image, reverse, note, githubLink, partners, technologies }: ProjectItemProps) {
    return (
        <motion.div
            className={`flex flex-col sm:flex-row ${reverse ? 'sm:flex-row-reverse' : ''} items-center sm:items-start pt-4 md:pt-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{
                once: true,
                amount: 0.4
            }}
        >
            {/* SHOWCASE IMAGE */}
            <div className="flex sm:w-1/2 items-center justify-center">
                <img src={image} alt={title} className="w-4/5 h-auto" />
            </div>

            {/* CONTENT */}
            <div className="sm:w-1/2 text-left">
                {/* PROJECT DESCRIPTION */}
                <div className="flex flex-row items-center space-x-4 sm:pt-0 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-barlow text-purple-900 text-center">{title}</h2>
                    {note && <p className="text-base font-barlow font-bold text-gray-300 text-center">{note}</p>}
                </div>

                <p className="text-sm md:text-base font-mono pb-8">{description}</p>

                {/* PARTNERS */}
                {partners && (
                    <div className="flex flex-row space-x-4 items-center pb-8">
                        <h3 className="font-bold font-barlow text-gray-300">Partners:</h3>
                        {partners.map((partner, index) => (
                            <Tooltip key={index} message={partner.alt}>
                                <img key={index} src={partner.path} alt={partner.alt} className="w-24 md:w-28 h-auto" />
                            </Tooltip>
                        ))}
                    </div>
                )}

                {/* TECHNOLOGIES */}
                {technologies && (
                    <div className="flex flex-row space-x-2 items-center pb-4 sm:pb-8">
                        <h3 className="font-bold font-barlow text-gray-300">Technologies:</h3>
                        {technologies.map((technology, index) => (
                            <Tooltip key={index} message={technology.message}>
                                <StackIcon name={technology.name} className="w-6 md:w-7 h-auto" aria-label={technology.ariaLabel} />
                            </Tooltip>
                        ))}
                        <Tooltip message="Database [SQL]">
                            <img src={dbIcon} alt="database" className="w-5 md:w-6 h-auto" aria-label="Database [SQL]" />
                        </Tooltip>
                    </div>
                )}

                {/* GITHUB LINK */}
                {githubLink && (
                    <a href={githubLink} target="_blank"
                        className="font-bold text-sm md:text-base text-purple-600 hover:text-white transition duration-300"
                    >
                        [View in GitHub]
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectItem;
