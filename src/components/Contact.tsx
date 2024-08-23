import { motion } from "framer-motion";
import contactImage from "../assets/contact-image.png";
import contactPhrase from "../assets/contact-alt.png";

const Contact = () => {
    return (
        <motion.section id="contact"
            className="flex flex-col sm:flex-row px-12 py-12 text-white font-mono font-thin"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{
                once: true,
                amount: 0.6
            }}
        >
            {/* CONTENT */}
            <div className="text-left sm:w-1/2 sm:pt-8 sm:pr-6 pb-8">
                <h2 className="font-barlow text-gray-300 font-bold text-base md:text-lg">Contact</h2>
                <h1 className="text-3xl md:text-5xl font-bold font-barlow">
                    Reach Out <span className="text-purple-800">Anytime</span>
                </h1>
                <p className="text-sm md:text-base text-gray-50 text-thin pt-4 font-mono">
                    Let’s work together! Reach out if you have an opportunity or just want to say hello.
                </p>

                {/* CONTACT INFO */}
                <div className="flex flex-col pt-4 space-y-2 font-bold text-base md:text-lg text-gray-300">
                    <div className="group relative w-fit">
                        <a href="mailto:anloba150@gmail.com" className="text-purple-900 group-hover:text-white transition-colors duration-300">anloba150@gmail.com</a>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-900 scale-0 group-hover:scale-100 origin-left transition-transform duration-300 ease-out"></span>
                    </div>
                    <div className="group relative w-fit">
                        <a href="https://www.linkedin.com/in/karen-lb/" target="_blank" className="group-hover:text-white transition-colors duration-300">LinkedIn</a>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-900 scale-0 group-hover:scale-100 origin-left transition-transform duration-300 ease-out"></span>
                    </div>
                    <div className="group relative w-fit">
                        <a href="https://github.com/karen-baltazar" target="_blank" className="group-hover:text-white transition-colors duration-300">GitHub</a>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-900 scale-0 group-hover:scale-100 origin-left transition-transform duration-300 ease-out"></span>
                    </div>
                </div>

                {/* PHRASE */}
                <div className="flex flex-row pt-6 gap-6 items-center">
                    <img src={contactPhrase} alt="contact-phrase" className="w-20 md:w-28 h-auto" />
                    <p className="w-4/5 italic text-sm md:text-base text-gray-100 hover:text-purple-600 transition duration-300">
                        I’m always eager to grow and learn—if there’s something I don’t know, I’m ready to dive in and master it.
                    </p>
                </div>
            </div>
            {/* IMAGE  */}
            <div className="flex sm:w-1/2 items-center justify-center">
                <img src={contactImage} alt="contact" className="w-4/5 h-auto" />
            </div>
        </motion.section>
    )
}

export default Contact;