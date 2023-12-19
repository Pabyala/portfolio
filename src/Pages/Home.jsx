import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import { AiFillGithub } from "react-icons/ai";
import { HomeSkeletonImg, HomeSkeletonInfo } from '../Skeleton/SkeletonHome';

export const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutLoading)
    // eslint-disable-next-line
  }, []);

  return (
    <section id='home' className="home-content w-100">
      <div className="bg-dot"></div>

      {loading ? (<HomeSkeletonInfo/> ) :
      (<div className="home-info"> 
          <h5 className="home-subtitle position-relative span-subtitle">Hi, I am</h5>
          <h1 className='home-name my-1'>Eleomar Fajutnao</h1>
          <h2 className='home-title mb-1'>Junior Front End Developer</h2>
          <p className='home-sub-info fst-italic'>I love exploring and building things for the web.</p>
          <a className='home-github text-decoration-none d-flex justify-content-center align-items-center' 
            href="https://github.com/Pabyala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github 
            <AiFillGithub className='githubIcon'/>
          </a>
      </div>)}
      
      {loading ? (<HomeSkeletonImg/> ) :
      (<div className="profile-img-body d-flex justify-content-center align-items-center">
          <div className="profile-img"></div>
      </div>)}

    </section>
  )
}
