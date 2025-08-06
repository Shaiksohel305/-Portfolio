import React from 'react';
import { FaEnvelope, FaFileAlt, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className="w-full  min-h-screen px-6 py-12">
            <div className="max-w-3xl mx-auto text-center shadow-2xl">
                <h2 className="text-3xl font-bold text-black-700 mb-4">Contact Me</h2>
                <p className="text-gray-600 mb-10">
                    I'd love to connect! Whether you're reaching out for a job opportunity, a collaboration, or just to say hello — feel free to contact me through any of the methods below.
                </p>

                <div className="text-left space-y-6 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <p className="text-sm text-gray-500"><FaEnvelope />Email</p>
                        <a href="mailto:sohelshaik.it@gmail.com" className="text-lg text-indigo-600 hover:underline">
                            sohelshaik.it@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500"><FaLinkedin />LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/shaik-sohel1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-blue-600 hover:underline"
                        >
                            linkedin.com/shaik-sohel
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500"><FaGithub />GitHub</p>
                        <a
                            href="https://github.com/Shaiksohel305"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-800 hover:underline"
                        >
                            github.com/shaiksohel
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500"><FaFileAlt />Resume</p>
                        <a
                            href="/MERN.pdf"
                            target="_blank"
                            className="text-lg text-green-600 hover:underline"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
