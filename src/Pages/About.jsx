import React, { useEffect, useState } from 'react'
import './AboutStyle.css'
import '../Skeleton/SkeletonStyle.css'
import { WhatCanIDo } from '../Components/WhatCanIDo'
import { myInformation } from '../Data/MyData';
import { AboutSkeletonImg, AboutSkeletonInfo, AboutSkeletonSubTitle, AboutSkeletonTitle, WhatCanIDoSkeleton } from '../Skeleton/SkeletonAbout';

export const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutLoading)
    // eslint-disable-next-line
  }, []);

  return (
    <section className='about-me w-100'>

      {loading ? (<AboutSkeletonTitle/>) :
      ( <h1 className='about-title position-relative'>About Me</h1> )}

      <div className="about-me-body d-flex flex-column">
        {loading ? ( <AboutSkeletonImg/> ) 
        : (
          <div className="about-me-img d-flex justify-content-center align-items-center">
              <div className="img-me"></div>
          </div>
        )}

        {loading ? ( <AboutSkeletonInfo/> )
        : (
          <div className="about-me-text">
              <p className='paragraph-sub m-0'>Hi there, I am</p>
              <h2 className='about-name m-0'>Eleomar Fajutnao</h2>
              <h5 className='about-position'>Junior Web Developer</h5>
              <p className='about-paragrap'>
                I am web developer doing all things creative to make the web a 
                more unique and awesome place. In this portfolio, you will find a 
                collection of my personal projects that demonstrate my abilities in 
                creating websites and responsive web design that are displayed on all 
                devices, such as desktops, laptops, tablets, and smartphones.
              </p>
              <ul className="about-socials no-list-style p-0 m-0">
                {myInformation.map((info, index) => {
                  return(
                    <li key={index} className='about-li d-flex align-items-center'>
                      {info.icon}
                      {info.iconInfo}
                    </li>
                  )
                })}
              </ul> 
          </div>
        )}
      </div>

      <div className="about-cando-con">
        {loading ? (<AboutSkeletonSubTitle/>) :
        (<h2 className='about-cando-title text-center'>What can I do?</h2>)}

        {loading ? ( <WhatCanIDoSkeleton/> ) : (<WhatCanIDo/>)}
      </div>
    </section>
  )
}
