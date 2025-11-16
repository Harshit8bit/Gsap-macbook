import React from 'react';
import useMacbookStore from '../store';
import { FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProjectModal = () => {
    
    const { isModalOpen, toggleModal } = useMacbookStore();

    
    if (!isModalOpen) {
        return null;
    }

    
    return (
       
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop (semi-transparent black, click to close) */}
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={toggleModal}
            />

            {/* Modal Content Box */}
            <div className="relative w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-xl border border-gray-700">
                
                {/* Close Button (top-right corner) */}
                <button 
                    onClick={toggleModal}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                {/* ---  Project Info --- */}
                <h3 className="text-xl font-semibold text-white mb-3">
                    About This Project
                </h3>
                <p className="text-gray-300 mb-4">
                    This website is a clone of Apple's MacBook page, built to showcase skills in 3D web development and advanced animations.
                </p>

                <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                    <li>React</li>
                    <li>Three.js (React Three Fiber & Drei)</li>
                    <li>GSAP (GreenSock)</li>
                    <li>Zustand</li>
                    <li>Tailwind CSS</li>
                </ul>

                <h4 className="font-semibold text-white mb-2">Developer:</h4>
                <p className="text-gray-300 mb-4">Harshit Agarwal</p>

               
                <div className="flex items-center gap-6">
                    <a 
                        href="https://github.com/Harshit8bit/Apple-build" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                        <FaGithub className="w-5 h-5" />
                        View Code
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/harshit-agarwal8bit/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                        <FaLinkedin className="w-5 h-5" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;