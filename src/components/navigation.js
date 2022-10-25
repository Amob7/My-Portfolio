import React from 'react';

//Nav function to handle funcionality between cycling through pages and attatching links to them and exports
function Navagation({ currentPage, pageChange }) {
    return (
        <ul className='navbar-nav flex-row fs-4'>
            {/* Handles the AboutMe tab */}
            <li className='nav-item p-2'>
                <a
                    href= '#AboutMe'
                    onClick= {() => pageChange('AboutMe')}
                    
                    className= {currentPage === 'AboutMe'
                    ? 'text-decoration-none fw-bold text-info'
                    : 'text-decoration-none text-info'}
                >
                About Me
                </a>
            </li>

            {/* Handles the Portfolio tab */}
            <li className='nav-item p-2'>
                <a
                    href= '#Portfolio'
                    onClick= {() => pageChange('Portfolio')}
                    
                    className= {currentPage === 'Portfolio'
                    ? 'text-decoration-none fw-bold text-info'
                    : 'text-decoration-none text-info'}
                >
                Portfolio
                </a>
            </li>

            {/* Handles the Contact tab */}
            <li className='nav-item p-2'>
                <a
                    href= '#Contact'
                    onClick= {() => pageChange('Contact')}
                    
                    className= {currentPage === 'Contact'
                    ? 'text-decoration-none fw-bold text-info'
                    : 'text-decoration-none text-info'}
                >
                Contact
                </a>
            </li>

            {/* Handles the Resume tab */}
            <li className='nav-item p-2'>
                <a
                    href= '#Resume'
                    onClick= {() => pageChange('Resume')}
                    
                    className= {currentPage === 'Resume'
                    ? 'text-decoration-none fw-bold text-info'
                    : 'text-decoration-none text-info'}
                >
                Resume
                </a>
            </li>
        </ul>
    )
}

export default Navagation;