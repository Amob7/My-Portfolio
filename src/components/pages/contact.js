import React, { useEffect, useState } from 'react';
import {validateEmail} from '../../utils/helper'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [valEmail, setValEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if(!validateEmail(email)) {
            setValEmail('Email is invalid');
        }
        else {
            setValEmail('');
        }
    }, [email])
    
    useEffect(() => {
        if(!message) {
            setErrorMsg('You must enter a message')
        }
        else {
            setErrorMsg('')
        }
    }, [message])

    //updates the input field with whatever the user is typing
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType == 'email') {
            setEmail(inputValue)
        }
        else if(inputType == 'name') {
            setName(inputValue)
        }
        else {
            setMessage(inputValue)
        }
    }

    //updates on submite and clears fields once submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!message) {
            setErrorMsg('You must enter a message');
            return;
        }

        setName('');
        setMessage('');
        setEmail('');
    }

    //return statement
    return(
        <div>
            <h1 className='text-center fw-bold'>Contact</h1>
            <form>
                {/* field for Name */}
                <div>
                    <p> Name</p>
                    <input
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Name'
                    />
                </div>
                {/* field for Email */}
                <div>
                    <p> Email</p>
                    <input
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                    />
                    {valEmail && email && (
                        <div>
                            <p>{valEmail}</p>
                        </div>
                    )}
                </div>
                {/* field for Message */}
                <div>
                    <p> Message </p>
                    <input
                        rows={5}
                        cols={40}
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        type='message'
                        placeholder='Message'
                    />
                    {errorMsg && (
                        <div>
                            <p>{errorMsg}</p>
                        </div>
                    )}
                </div>

                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;