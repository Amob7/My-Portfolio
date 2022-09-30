import React, { useState } from 'react';
import Navagation from './navigation'
import Header from './header';
import Portfolio from './pages/portfolio'
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Resume from './pages/resume';

function portFolder() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        // when you clicked about me, it set in navagation current page to about me; does this for all routes
        if (currentPage == 'AboutMe') {
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
        <div>
            <div>
                <Header />
                <Navagation currentPage={currentPage} handlePageChange={handlePage} />
            </div>
            <div>
                {renderPage()}
            </div>
        </div>
    )
};