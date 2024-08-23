import { motion, AnimatePresence } from "framer-motion";
import NavButton from "./NavButton";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

function SideBar({ isOpen, onClose }: SidebarProps) {
    const variants = {
        open: {
            x: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.3 },
        },
        closed: {
            x: "+100%",
            opacity: 0,
            transition: { type: "tween", duration: 0.3 },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-80 backdrop-blur-sm flex flex-col items-start p-8 space-y-6 z-50"
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <button
                        className="absolute top-6 right-12 text-purple-900 hover:text-white transition duration-300"
                        onClick={onClose}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <NavButton section="#home" label="Home" index="01" />
                    <NavButton section="#about" label="About" index="02" />
                    <NavButton section="#projects" label="Projects" index="03" />
                    <NavButton section="#contact" label="Contact" index="04" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SideBar;