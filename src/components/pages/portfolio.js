import React from 'react';
import Project from '../project'
import pixBat from '../../images/pixel-battle.PNG'

// projects as objects
const projects = [
    {
        id: 1,
        name: 'Pixel Battle',
        link: 'https://pixel-battle-v.herokuapp.com/',
        image: pixBat
    }
]

// maps project thru projects 
const Portfolio = () => {
    return(
        <div className='pt-5'>
            <h2 className='pb-4 text-center fw-bold'>Portfolio</h2>
            <ul>
                {projects.map((project) =>
                    <Project key = {project.id} name = {project.name} link = {project.link} image = {project.image}/>
                )}
            </ul>
        </div>
    );
}

export default Portfolio;