import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
import '../../../src/App.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const setErrorMessage = useState('');
    const setBlurNameMessage = useState('');
    const setBlurEmailMessage = useState('');
    const setBlurMessage = useState('');
  
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleBlurName= (e) => {
        e.preventDefault();
        setBlurNameMessage(`A name is required!`)
        
    };

    const handleBlurEmail= (e) => {
        e.preventDefault();
        setBlurEmailMessage(`An email is required!`)
        
    };

    const handleBlurMessage= (e) => {
        e.preventDefault();
        setBlurMessage(`A message is required!`)
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Your email is invalid!');
            return;
        };
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
  
        <div className="container-form">
          <h1 className="contact-head">Contact Me </h1>
            <form className='contact-form'>
                <p className="label">Name: </p>
                <input className="input"
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleBlurName}
                type="name"
                placeholder="name"/>
       
                <p className="label">Email:</p>
                <input className="input"
                value={email}
                name="email"
                onBlur={handleBlurEmail}
                onChange={handleInputChange}
                type="email"
                placeholder="email"/>

                <p className="label">Your message!</p>
                <textarea className="textarea"
                value={message}
                name="message"
                onBlur={handleBlurMessage}
                onChange={handleInputChange}
                type="message"
                placeholder="message"/> 
            <button className="btn" type="button" onClick={handleSubmit}>
                Submit
            </button>
            </form>
        </div>
    );
};

export default Contact;