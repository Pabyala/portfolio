import React, { useRef, useState } from 'react'
import '../Pages/ContactStyle.css'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if(name.length === 0 || email.length === 0 || 
        subject.length === 0 || message.length === 0){
            setErrorMessage(true)
            return;
        }

        emailjs.sendForm(
        'service_0mk108b', 
        'template_0s0u8he', 
        form.current,
        'JrjPbP7quGvqny4g6'
        )
        .then((result) => {
            console.log(result.text);

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrorMessage(false);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <h2 className='contact-form-sub'>Get in touch</h2>
            <div className="mb-2">
                <input type="text" 
                    placeholder='Name'
                    className="contact-input" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name='from_name'
                />
                <div className="form-text">
                    {errorMessage && name <= 0 ? (
                    <span className='error-message'>Name can't be empty</span>)
                    : ""}
                </div>
            </div>
            <div className="mb-2">
                <input type="email" 
                    placeholder='Email'
                    className="contact-input" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='from_name_email'
                />
                <div className="form-text">
                    {errorMessage && email <= 0 ? (
                    <span className='error-message'>Email can't be empty</span>)
                    : ""}
                </div>
            </div>
            <div className="mb-2">
                <input type="text" 
                    placeholder='Subject'
                    className="contact-input" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name='subject'
                />
                <div className="form-text">
                    {errorMessage && subject <= 0 ? (
                    <span className='error-message'>Subject can't be empty</span>)
                    : ""}
                </div>
            </div>
            <div className="mb-2">
                <textarea className="textarea d-block" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder='Enter Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name='message'
                />
                <div className="form-text">
                    {errorMessage && message <= 0 ? (
                    <span className='error-message'>Message can't be empty</span>)
                    : ""}
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <button type="submit" className="btn-form btn px-4 py-2">Submit</button>
            </div>
        </form>    
  )
}
