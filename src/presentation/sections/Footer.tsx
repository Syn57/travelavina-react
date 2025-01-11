import ic_logo_travel from "../../assets/images/logo_travelavina.png"
import bgFooter from "../../assets/images/bg_footer.svg"

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-8 mt-8 relative">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4 lg:px-16 z-10 relative">
                {/* Logo Section */}
                <div className="flex items-center mb-6 lg:mb-0">
                    <img 
                        src={ic_logo_travel} 
                        alt="Travel Avina Logo" 
                        className="w-[250px] h-[70px] mr-4" 
                    />
                </div>
                {/* Links Section */}
                <div className="flex flex-wrap justify-between w-full lg:w-auto lg:space-y-0 lg:space-x-20 lg:mt-0 mt-10">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl mb-4 font-alfaslab">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/home" className="hover:underline font-alice">Home</a></li>
                            <li><a href="/about" className="hover:underline font-alice">About Us</a></li>
                            <li><a href="/contact" className="hover:underline font-alice">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Other Pages */}
                    <div>
                        <h3 className="text-2xl mb-4 font-alfaslab">Other Pages</h3>
                        <ul className="space-y-2">
                            <li><a href="/privacy" className="hover:underline font-alice">Privacy & Policy</a></li>
                            <li><a href="/terms" className="hover:underline font-alice">Terms Of Use</a></li>
                            <li><a href="/disclaimer" className="hover:underline font-alice">Disclaimer</a></li>
                            <li><a href="/faq" className="hover:underline font-alice">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <img
                src={bgFooter}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </footer>
    );
};

export default Footer;