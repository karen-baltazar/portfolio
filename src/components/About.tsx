import { motion } from "framer-motion";
import aboutImage from "../assets/about-profile.png";
import dbIcon from "../assets/db-icon.png";
import StackIcon from "tech-stack-icons";
import Tooltip from "./Tooltip";

const About = () => {
    return (
        <motion.section id="about"
            className="flex flex-col sm:flex-row px-12 py-12 text-white font-mono font-thin"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} 
            viewport={{ 
                once: true,
                amount: 0.6
            }}
        >
            {/* PROFILE IMAGE  */}
            <div className="flex sm:w-1/2 items-center justify-center">
                <img src={aboutImage} alt="about" className="w-4/5 h-auto" />
            </div>
            {/* CONTENT */}
            <div className="text-left sm:pt-8 sm:w-1/2">
                <h2 className="font-barlow text-gray-300 font-bold text-base md:text-lg">About me</h2>
                <h1 className="text-3xl md:text-5xl font-bold font-barlow">
                    Hi, I'm <span className="text-purple-800">Karen</span>
                </h1>
                <p className="text-sm md:text-base text-gray-50 text-thin pt-4 font-mono">
                    A <span className="font-bold text-purple-600">software engineer</span> with a <span className="italic text-purple-800">deep commitment to creating efficient, user-centered solutions.</span>
                </p>
                <p className="text-sm md:text-base text-gray-50 text-thin pt-4 font-mono">
                    I have a strong background in <span className="font-bold text-purple-800">full-stack development</span>, with experience in building web applications using modern technologies.
                </p>
                <p className="text-sm md:text-base text-gray-50 text-thin pt-4 font-mono">
                    I'm <span className="underline text-purple-800">passionate about learning</span> new technologies and frameworks, and I'm always looking for opportunities to grow and improve my skills.
                </p>

                {/* TOOLS */}
                <div className="flex flex-row pt-8 space-x-2 items-center">
                    <h3 className="font-bold font-barlow text-purple-200">DEV TOOLS |</h3>
                    <Tooltip message="Typescript"><StackIcon name="typescript" className="w-6 md:w-7 h-auto" aria-label="Typescript" /></Tooltip>
                    <Tooltip message="ReactJS"><StackIcon name="reactjs" className="w-6 md:w-7 h-auto" aria-label="ReactJS" /></Tooltip>
                    <Tooltip message="Node.js"><StackIcon name="nodejs" className="w-6 md:w-7 h-auto" aria-label="Node.js" /></Tooltip>
                    <Tooltip message="Tailwind CSS"><StackIcon name="tailwindcss" className="w-6 md:w-7 h-auto" aria-label="Tailwind CSS" /></Tooltip>
                    <Tooltip message="HTML5"><StackIcon name="html5" className="w-6 md:w-7 h-auto" aria-label="HTML5" /></Tooltip>
                    <Tooltip message="CSS3"><StackIcon name="css3" className="w-6 md:w-7 h-auto" aria-label="CSS3" /></Tooltip>
                    <Tooltip message="Database [SQL]"><img src={dbIcon} alt="database" className="w-6 md:w-7 h-auto" aria-label="Database [SQL]" /></Tooltip>
                </div>
            </div>
        </motion.section>
    )
}

export default About;