const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Mohamed Sabry. All rights reserved.
                    </p>
                </div>
                <div className="socials">
                </div>
            </div>
        </footer>
    )
}
export default Footer
