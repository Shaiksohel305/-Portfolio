

import React from 'react';

const Skills = () => {
    return (
        <div className="w-full  min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Frontend */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-red-700 transition duration-300">
                        <h3 className="text-xl font-semibold text-red-900 mb-4">Frontend</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>HTML5</li>
                            <li>CSS3 / Tailwind CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-700 transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Backend</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>RESTful API Integration</li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-green-700 transition duration-300">
                        <h3 className="text-xl font-semibold text-green-900 mb-4">Tools & Platforms</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Git & GitHub</li>
                            <li>Postman</li>
                            <li>VS Code</li>
                            <li>Vite</li>
                            <li>Netlify / Vercel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
