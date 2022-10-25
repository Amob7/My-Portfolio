import React, { useState } from 'react';
import Navagation from './navigation'
import Header from './header';
import Portfolio from './pages/portfolio'
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Resume from './pages/resume';

function portFolder() {
    const [currentPage, setPage] = useState('AboutMe');

    const renderPage = () => {
        // when you clicked about me, it set in navagation current page to about me; does this for all routes
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        else if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        else if (currentPage === 'Contact') {
            return <Contact />;
        }
        else{
            return <Resume />;
        }
    }

    const pageChange = (page) => setPage(page);

    return (
        <div className='h-100 vw-100 px-5 text-info bg-dark'>
            <div className='navbar pt-5 pb-5'>
                <Header />
                <Navagation currentPage={currentPage} pageChange={pageChange} />
            </div>
            <div className='bg-gray-400 vh-100'>
                {renderPage()}
            </div>
        </div>
    )
};

export default portFolder;