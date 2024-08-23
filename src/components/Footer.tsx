function Footer() {
    return (
        <footer className="px-6 pt-4 pb-8 font-mono font-bold text-purple-500 text-sm">
            <div className="container mx-auto text-center">
                <p className="text-sm">Designed and developed by Karen. Every bit counts. &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;