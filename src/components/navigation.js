import React from 'react';

//Nav function to handle funcionality between cycling through pages and attatching links to them and exports
export default function Navagation({ currentPage, handlePage }) {
    return (
        <ul>
            {/* Handles the AboutMe tab */}
            <li>
                <a
                    href= '#aboutMe'
                    onClick= {() => handlePage('AboutMe')}
                    
                    className= {currentPage === 'AboutMe'}
                >
                About Me
                </a>
            </li>

            {/* Handles the Portfolio tab */}
            <li>
                <a
                    href= '#portfolio'
                    onClick= {() => handlePage('Portfolio')}
                    
                    className= {currentPage === 'Portfolio'}
                >
                Portfolio
                </a>
            </li>

            {/* Handles the Contact tab */}
            <li>
                <a
                    href= '#contact'
                    onClick= {() => handlePage('Contact')}
                    
                    className= {currentPage === 'Contact'}
                >
                Contact
                </a>
            </li>

            {/* Handles the Resume tab */}
            <li>
                <a
                    href= '#resume'
                    onClick= {() => handlePage('Resume')}
                    
                    className= {currentPage === 'Resume'}
                >
                Resume
                </a>
            </li>
        </ul>
    )
}
