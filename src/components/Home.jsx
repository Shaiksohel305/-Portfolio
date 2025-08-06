import React from 'react';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

const Home = () => {
    return (
        <div className="w-full min-h-screen px-6 py-12 bg-gray-50">
            <div className='flex justify-center items-center'>
                <div className=" flex flex-col items-center justify-center p-4 ">
                    <p className="text-sm text-gray-500">WEB DESIGN & DEVELOPMENT & BUILD BRANDS</p>
                    <h1 className="text-2xl sm:text-2xl font-bold mt-2">
                        Hi, I'm <span className="text-GRAY-600 text-xl">Shaik Sohel</span><br />
                        I build responsive & modern websites.
                    </h1>
                    <div className='space-x-2 flex justify-center'>
                        <Link to="/project" className='px-4 py-1  border mt-4 text-gray-700 rounded hover:bg-gray-200 shadow-md shadow-blue-200'>View Projects</Link>
                        <a href="/MERN.pdf" className='px-4 py-1  border mt-4 text-gray-700 rounded hover:bg-gray-200 shadow-md shadow-green-200'>Downlord CV</a>
                    </div>
                </div>
                <img src="sohel.png" className="h-55 w-55 rounded-full shadow-md shadow-blue-900" alt="" />
            </div>
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </div>

    );
};

export default Home;
