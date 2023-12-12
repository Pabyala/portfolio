import React, { useRef, useState } from 'react'
import '../Pages/ContactStyle.css'
import emailjs from '@emailjs/browser';
import { ContactAnimation } from './AnimateComponent';

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
            console.log('message sent')

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
        <form className='contact-form col-6 p-4'  ref={form} onSubmit={sendEmail}>
            <ContactAnimation>
                <h2 className='text-center fs-3'>Get in touch</h2>
            </ContactAnimation>
            <div className="mb-2">
                <ContactAnimation>
                    <input type="text" 
                        placeholder='Name'
                        className="contact-input px-2 py-2 fs-6 col-12" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='from_name'
                    />
                </ContactAnimation>
                <div className="form-text">
                    {errorMessage && name <= 0 ? (
                    <span className='error-message'>Name can't be empty</span>)
                    : ""}
                </div>
            </div>
            <div className="mb-2">
                <ContactAnimation>
                    <input type="email" 
                        placeholder='Email'
                        className="contact-input px-2 py-2 fs-6 col-12" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='from_name_email'
                    />
                </ContactAnimation>
                <div className="form-text">
                    {errorMessage && email <= 0 ? (
                    <span className='error-message'>Email can't be empty</span>)
                    : ""}
                </div>
            
            </div>
            <div className="mb-2">
                <ContactAnimation>
                    <input type="text" 
                        placeholder='Subject'
                        className="contact-input px-2 py-2 fs-6 col-12" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        name='subject'
                    />
                </ContactAnimation>
                
                <div className="form-text">
                    {errorMessage && subject <= 0 ? (
                    <span className='error-message'>Subject can't be empty</span>)
                    : ""}
                </div>
                
            </div>
            <div className="mb-2">
                <ContactAnimation>
                    <textarea className="textarea d-block w-100 h-100 px-2 py-2 fs-6" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        placeholder='Enter Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name='message'
                    />
                </ContactAnimation>
                
                <div className="form-text">
                    {errorMessage && message <= 0 ? (
                    <span className='error-message'>Message can't be empty</span>)
                    : ""}
                </div>
                
            </div>
            <ContactAnimation>
                <button type="submit" className="btn-form btn px-4 py-2">Submit</button>
            </ContactAnimation>            
        </form>    
  )
}
