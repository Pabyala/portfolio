import React, { useEffect, useState } from 'react'
import './AboutStyle.css'
import '../Skeleton/SkeletonStyle.css'
import { WhatCanIDo } from '../Components/WhatCanIDo'
import { myInformation } from '../Data/MyData';
import { AboutSkeletonImg, AboutSkeletonInfo, AboutSkeletonSubTitle,
         AboutSkeletonTitle, WhatCanIDoSkeleton 
      } from '../Skeleton/SkeletonAbout';
import { AboutAnimationGreet, AboutAnimationPosition, AboutAnimationList, 
         AboutAnimationName, AboutAnimationParagraph, AboutAnimationProfile, 
         AboutAnimationTitle, AboutAnimation2ndTitle 
        } from '../Components/AnimateComponent';

export const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className='about-me' id='about'>

      {loading ? (<AboutSkeletonTitle/>) 
      :( 
        <AboutAnimationTitle>
          <h1 className='about-title mb-3 fs-2 position-relative'>About Me</h1> 
        </AboutAnimationTitle>
      )}

      <div className="about-me-body d-flex justify-content-between align-items-center mb-5">
        {loading ? ( <AboutSkeletonImg/> ) 
        : (
          <div className="about-me-img d-flex justify-content-center align-items-center">
            <AboutAnimationProfile>
              <div className="img-me"></div>
            </AboutAnimationProfile>
          </div>
        )}

        {loading ? ( <AboutSkeletonInfo/> )
        : (
          <div className="about-me-text">
            <AboutAnimationGreet>
              <p className='paragraph-sub fs-5 m-0'>Hi there, I am</p>
            </AboutAnimationGreet>

            <AboutAnimationName>
              <h2 className='about-name fs-1 m-0'>Eleomar Fajutnao</h2>
            </AboutAnimationName>

            <AboutAnimationPosition>
              <h5 className='about-position fs-3 mb-2'>Junior Front End Developer</h5>
            </AboutAnimationPosition>

            <AboutAnimationParagraph>
              <p className='about-paragrap fs-6'>
                I am frontend web developer doing all things creative to make the web a 
                more unique and awesome place. In this portfolio, you will find a 
                collection of my personal projects that demonstrate my abilities in 
                creating websites and responsive web design that are displayed on all 
                devices, such as desktops, laptops, tablets, and smartphones.
              </p>
            </AboutAnimationParagraph>
            <ul className="about-socials no-list-style p-0 m-0">
              {myInformation.map((info, index) => {
                const delayIncrement = 0.2;
                const individualDelay = index * delayIncrement;

                return(
                  <AboutAnimationList key={index}
                    customTransition={{ 
                      ease: 'easeInOut', 
                      duration: 2, 
                      delay: 1.3 + individualDelay
                    }}
                  >
                    <li key={index} className='about-li fs-5 d-flex align-items-center'>
                      {info.icon}
                      {info.iconInfo}
                    </li>
                  </AboutAnimationList>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="about-cando-con">

        {loading ? (<AboutSkeletonSubTitle/>)
        :(
          <AboutAnimation2ndTitle>
            <h2 className='about-cando-title fs-3 text-center mb-5'>What can I do?</h2>
          </AboutAnimation2ndTitle>
        )}

        {loading ? ( <WhatCanIDoSkeleton/> ) : (<WhatCanIDo/>)}
      </div>
    </section>
  )
}
