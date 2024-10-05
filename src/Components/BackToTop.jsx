import React, { useEffect, useState } from 'react'
import './BackToTopStyle.css'
import { BiSolidUpArrow } from "react-icons/bi";
import { SubwayUp2 } from './Icons';

export const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      {backToTop && (
        <div className='backToTop' onClick={scrollUp}>
          <SubwayUp2 className="backToTop-icon"/>
        </div>
      )}
    </>
  )
}
