import { motion } from 'framer-motion';
import projectsImage from '../assets/projects-image.png';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <section 
        id="projects"
        className="px-12 py-12 font-mono text-base font-thin text-white flex-1 flex-row sm:flex-row sm:items-center items-start"
    >
        <motion.div
            className="flex flex-col sm:flex-row text-white font-mono font-thin"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{
                once: true,
                amount: 0.6
            }}
        >
            {/* INTRO */}
            <div className="text-left sm:w-2/5 sm:pt-8 pb-8">
                <h2 className="font-barlow text-gray-300 font-bold text-base md:text-lg">Projects</h2>
                <h1 className="text-3xl md:text-5xl font-bold font-barlow">
                    What <span className="text-purple-800">I've Built</span>
                </h1>
                <p className="text-sm md:text-base text-gray-50 text-thin pt-4 font-mono">
                Discover how I've used my skills to create impactful solutions and address real-world challenges.
                </p>
            </div>
            {/* IMAGE  */}
            <div className="flex sm:w-3/5 items-center justify-center">
                <img src={projectsImage} alt="contact" className="w-full h-auto" />
            </div>
        </motion.div>
        {/* PROJECTS */}
        <ProjectList />
    </section>
  )
}

export default Projects;