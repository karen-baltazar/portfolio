type MenuButtonProps = {
    onClick: () => void;
  };

function MenuButton({ onClick }: MenuButtonProps) {
    return (
        <button className="text-purple-900 hover:text-white transition duration-300 focus:outline-none"
            onClick={onClick}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    )
}

export default MenuButton;