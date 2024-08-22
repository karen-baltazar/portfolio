import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type NavButtonProps = {
  label: string;
  index: string;
  section: string;
}

function NavButton({ label, index, section }: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnchorLink 
      href={section} 
      offset='100'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className="flex items-center space-x-2 text-sm"
    >
      <span className={`text-${isHovered ? "purple-900" : "gray-300"} transition duration-300 text-sm`}>{index}</span>
      <span className={`text-${isHovered ? "white" : "gray-300"} transition duration-300`}>{label}</span>
    </AnchorLink>
  )
}

export default NavButton;