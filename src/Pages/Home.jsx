import React, { useEffect, useRef, useState } from 'react'
import './HomeStyle.css'
import { AiFillGithub } from "react-icons/ai";
import { HomeSkeletonImg, HomeSkeletonInfo } from '../Skeleton/SkeletonHome';
import { useAnimation, useInView } from 'framer-motion'
import { HomeAnimationGitHubLink, HomeAnimationInfo, HomeAnimationName, 
  HomeAnimationPositon, HomeAnimationProfile, HomeAnimationTitle 
} from '../Components/AnimateComponent';

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const isInview = useInView(ref, {once: true});
  const mainControls = useAnimation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false) 
    }, 2000)
  })


  useEffect(() => {
      if(isInview){
          mainControls.start("visible")
      }
  }, [isInview, mainControls])



  return (
    <section id='home' className="home-content d-flex justify-content-between align-items-center mx-auto">
      
      <div className="bg-dot"></div>

      {loading ? (<HomeSkeletonInfo/> ) :
      (<div className="home-info d-flex flex-column justify-content-end w-50"> 
        <HomeAnimationTitle>
          <h5 ref={ref} className="home-subtitle position-relative fs-4 span-subtitle">Hi, I am</h5>
        </HomeAnimationTitle>

        <HomeAnimationName>
          <h1 className='home-name my-1'>Eleomar Fajutnao</h1>
        </HomeAnimationName>

        <HomeAnimationPositon>
          <h2 className='home-title mb-1'>Junior Front End Developer</h2>
        </HomeAnimationPositon>

        <HomeAnimationInfo>
          <p className='home-sub-info fs-6 fst-italic'>I love exploring and building things for the web.</p>
        </HomeAnimationInfo>

        <HomeAnimationGitHubLink>
          <a className='home-github text-decoration-none py-2 d-flex justify-content-center align-items-center' 
            href="https://github.com/Pabyala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github 
            <AiFillGithub className='githubIcon'/>
          </a>
        </HomeAnimationGitHubLink>
      </div>)}
      
      {loading ? (<HomeSkeletonImg/> ) :
      (<div className="profile-img-body d-flex justify-content-center align-items-center">
        <HomeAnimationProfile>
          <div className="profile-img"></div>
        </HomeAnimationProfile>
      </div>)}
    </section>
  )
}
