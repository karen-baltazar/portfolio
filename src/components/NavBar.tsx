import { useState } from "react";
import Logo from "../assets/logo.png";
import NavButton from "./NavButton";
import MenuButton from "./MenuButton";
import SideBar from "./SideBar";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 w-full bg-gray-900 bg-opacity-90 text-white">
                <div className="flex justify-between items-center px-12 py-6">
                    {/* LOGO */}
                    <div className="logo">
                        <img alt="Logo" className="w-8" src={Logo}></img>
                    </div>

                    {/* NAVIGATION */}
                    <div className="hidden md:flex space-x-12">
                        <NavButton section="#home" label="Home" index="01" />
                        <NavButton section="#about" label="About" index="02" />
                        <NavButton section="#projects" label="Projects" index="03" />
                        <NavButton section="#contact" label="Contact" index="04" />
                    </div>
                    <div className="md:hidden">
                        <MenuButton onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
                {/* SIDEBAR */}
                <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </nav>
        </>
    );
}

export default NavBar;
