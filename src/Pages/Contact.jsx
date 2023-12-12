import React, { useEffect, useState } from 'react'
import './ContactStyle.css'
import ContactImg from '../Asset/Hands - Phone.png'
import { ContactSkeleton, ContactSkeletonTitles } from '../Skeleton/SkeletonContact';
import { ContactForm } from '../Components/ContactForm';
import { ContactAnimation } from '../Components/AnimateComponent';

export const Contact = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className='contact' id='contact'>
      {loading ? (<ContactSkeletonTitles/>) 
      : (
        <ContactAnimation>
        <h1 className='contact-title fs-2 mb-3 position-relative'>Contacts</h1>
        </ContactAnimation>
      )}
      
      {loading ? (<ContactSkeleton/>)
      : (
        <div className='contact-row row col-12'>
          <div className="contact-body col-6 d-flex align-items-center justify-content-center">
              <div className="img-con">
                  <img className='contact-img' src={ContactImg} alt="" />
              </div>
          </div>
          <ContactForm/>
        </div>
      )}
    </section>
  )
}
