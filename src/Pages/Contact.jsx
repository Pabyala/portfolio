import React, { useEffect, useState } from 'react'
import './ContactStyle.css'
import ContactImg from '../Asset/Hands - Phone.png'
import { ContactSkeleton, ContactSkeletonTitles } from '../Skeleton/SkeletonContact';
import { ContactForm } from '../Components/ContactForm';

export const Contact = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutLoading)
    // eslint-disable-next-line
  }, []);

  return (
    <section className='contact w-100' id='contact'>
      {loading ? (<ContactSkeletonTitles/>) 
      : (
        <h1 className='contact-title position-relative'>Contacts</h1>
      )}

      {loading ? (<ContactSkeleton/>)
      : (
        <div className='contact-row'>
          <div className="contact-body d-flex align-items-center justify-content-center">
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