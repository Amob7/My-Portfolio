import React from 'react';
import PortPic from '../../images/PortPic.jpg'

export default function AboutMe() {
    return(
        <div className = 'pt-5'>
            <h2 className = 'pb-5 text-center fw-bold'>About Me</h2>
            <div className='d-flex justify-content-center'>
                <img
                    className = 'rounded img-thumbnail mt-5 me-5'
                    width = "300"
                    src = { PortPic }
                    alt = 'Picture of Eric Courter'/>
                <p className='align-self-center pt-5 ms-5'>My name is Eric Courter and I am a Full-Stack Web Developer. I am ready and eager to learn more about coding applications. I am in the process of creating as many projects as I can so I can further increase my knowledge and understanding of Computer Science.</p>
            </div>
        </div>
    );
}