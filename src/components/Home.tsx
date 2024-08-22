import homeImage from '../assets/home-alt.png';
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8,
    },
  },
};

function Home() {
    return (
        <motion.section id="home" 
            className="px-12 py-12 font-mono text-base font-thin text-white flex flex-col sm:flex-row sm:items-center items-start"
            initial="hidden"
            animate="visible"
            variants={animationVariants}  
        >
            {/* CONTENT */}
            <div className="flex-1 text-white text-left bg-gray-900 bg-opacity-70">
                <h1 className="text-3xl md:text-5xl font-bold font-barlow text-purple-900">KAREN BALTAZAR</h1>
                <p className="text-sm md:text-base text-gray-300 italic">SOFTWARE ENGINEER</p>

                <h2 className="mt-8 sm:mt-12 text-lg md:text-xl font-bold font-barlow">Coding with purpose:</h2>
                <p className="mb-12 text-xs md:text-sm text-gray-50">
                    growing through every challenge,<br /> learning at every step,<br /> and helping others achieve their goals.
                </p>
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center items-center">
                <img src={homeImage} alt="Dark-themed workspace with a computer" className="w-full h-4/5 object-cover" />
            </div>
        </motion.section>
    )
}

export default Home;