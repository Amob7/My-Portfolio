import React from 'react';

export default function Resume() {
    return(
        <div className='pt-5'>
            <h2 className='pb-4 text-center fw-bold'>Resume</h2>
            <p className='pt-3 text-center fs-3'>Download my <a href='https://docs.google.com/document/d/11QVgJuPqgFzXQmv1GXt2N2oEa_GHwx_J/edit?usp=sharing&ouid=100059760773623918639&rtpof=true&sd=true'>Resume</a></p>
            <p className='text-center fs-4 pt-5'>Skill Overview: </p>
            <div className='py-5 d-flex justify-content-around'>
                <ul>
                    <p className='text-decoration-underline fs-2'>Front End: </p>
                    <li className='fs-5'>HTML</li>
                    <li className='fs-5'>CSS</li>
                    <li className='fs-5'>JavaScript</li>
                    <li className='fs-5'>jQuery</li>
                    <li className='fs-5'>React</li>
                    <li className='fs-5'>MERN</li>
                </ul>

                <ul>
                    <p className='text-decoration-underline fs-2'>Back End: </p>
                    <li className='fs-5'>APIs</li>
                    <li className='fs-5'>Node.js</li>
                    <li className='fs-5'>Express.js</li>
                    <li className='fs-5'>mySQL, Sequalize</li>
                    <li className='fs-5'>MongoDB, Mongoose</li>
                    <li className='fs-5'>GraphQL</li>
                </ul>
            </div>
            <ul>
                <p className='text-center fs-4'> I also know how to build Full Stack MERN Applications</p>
            </ul>
        </div>
    );
}