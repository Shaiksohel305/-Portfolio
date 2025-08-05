import React from 'react';

export const Footer = () => {
    return (
        <footer className="w-full bg-black  py-2 text-center text-white ">
            <p className="mb-1">
                &copy; {new Date().getFullYear()} Shaik Sohel. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/Shaiksohel8305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/shaik-sohel1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:sohel.shaik.it@gmail.com"
                    className="hover:text-gray-400 transition duration-300"
                >
                    Email
                </a>
            </div>
        </footer>
    );
};