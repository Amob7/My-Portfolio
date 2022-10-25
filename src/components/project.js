import React from 'react';

function Project(props) {
    return (
        <li>
            <a href = {props.link}>
                <figure className = ''>
                    <img className = '' src = {props.image} alt = {props.description}/>
                    <figcaption className = ''> {props.description} </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Project;