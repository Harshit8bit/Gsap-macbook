
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ href, label, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label={label}
    >
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
           

            <hr className="border-t border-gray-700" />

          
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-5 gap-8">
                
               
                <div className="personal-credit text-gray-400 text-sm text-center md:text-left">
                    <p className="font-semibold text-white mb-1">
                        A clone by HARSHIT-AGARWAL
                    </p>
                    <p className="text-gray-500">
                        Built with React, Three.js, GSAP, and Tailwind CSS.
                    </p>
                </div>

                
                <div className="social-links flex items-center gap-6">
                    <SocialLink 
                        href="https://github.com/Harshit8bit"
                        label="Harshit Agarwal's GitHub Profile"
                    >
                        <FaGithub className="w-6 h-6" />
                    </SocialLink>
                    
                    <SocialLink 
                        href="https://www.linkedin.com/in/harshit-agarwal8bit/" 
                        label="Harshit Agarwal's LinkedIn Profile"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </SocialLink>
                </div>

               
            </div>
        </footer>
    );
}

export default Footer;