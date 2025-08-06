import React from 'react';

const Project = () => {
    return (
        <div className="w-full  min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border shadow-red-200">
                        <h3 className="text-xl font-semibold mb-2  text-red-900">Student Data Management System</h3>
                        <p className="text-gray-700 text-sm">
                            A full-stack web application to manage student records. Built with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. Integrated with custom <strong>RESTful APIs</strong> to handle CRUD operations from frontend to backend.
                        </p>
                        <a href="https://github.com/Shaiksohel305/Student-Data-Dashboard" className='font-semibold underline text-gray-600'>View Code</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg border shadow-md shadow-green-200">
                        <h3 className="text-xl font-semibold mb-2  text-green-900">E-Commerce Website</h3>
                        <p className="text-gray-700 text-sm">
                            A responsive e-commerce platform using <strong>React</strong> and <strong>CSS</strong> for UI, with FakeStoreAPI integration for products,addcart, product details, buynow product-listing design clean UI.
                        </p>
                        <a href="https://github.com/Shaiksohel305/E-Mart" className='font-semibold underline text-gray-600'>View Code</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg  border shadow-md shadow-yellow-200">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-900">CountDown-Timer</h3>
                        <p className="text-gray-700 text-sm">
                            A countdown timer built using <strong>HTML</strong>CSS<strong>JavaScript</strong> for UI, JavaScript that dunamcally updates the time remaining untile reaches zero
                        </p>
                        <a href="https://github.com/Shaiksohel305/CountDown-Timer" className='font-semibold underline text-gray-600'>View Code</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg  border shadow-md shadow-blue-200">
                        <h3 className="text-xl font-semibold mb-2  text-blue-900">Personal Portfolio</h3>
                        <p className="text-gray-700 text-sm">
                            A fully responsive portfolio website <strong>React.js</strong> <strong>Tailwind CSS</strong>.this site follows a clean UI design and mobile-first approach,with smooth navigation and sctions
                        </p>
                        <a href="https://github.com/Shaiksohel305/-Portfolio" className='font-semibold underline text-gray-600'>View Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;