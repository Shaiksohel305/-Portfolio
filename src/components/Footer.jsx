import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full h-16 bg-black  py-2 text-center text-white ">
            <p className="mb-1">
                &copy; {new Date().getFullYear()} Shaik Sohel. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-2 flex-row">
                <a
                    href="https://github.com/Shaiksohel305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/shaiksohel1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:sohelshaik.it@gmail.com"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};