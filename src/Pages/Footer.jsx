import React from 'react'
import './FooterStyle.css'
import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className='footer text-center text-white pt-4' style={{backgroundColor: '#f1f1f1'}}>
        <div className=''>
          <a href="https://www.facebook.com/profile.php?id=100003268045086"
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-link btn-floating btn-lg text-dark m-1'
          >
            <BiLogoFacebook className='footer-icon'/>
          </a>
          <a href="https://www.instagram.com/mar.fajutnao/"
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-link btn-floating btn-lg text-dark m-1'
          >
            <BiLogoInstagramAlt className='footer-icon'/>
          </a>
          <a href="https://www.linkedin.com/in/eleomar-fajutnao-60a81824b/"
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-link btn-floating btn-lg text-dark m-1'
          >
            <AiFillLinkedin className='footer-icon'/>
          </a>
          <a href="https://github.com/Pabyala"
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-link btn-floating btn-lg text-dark m-1'
          >
            <AiFillGithub className='footer-icon'/>
          </a>
        </div>
      <div className="text-center text-dark px-2">
        <p className='footer-c mb-0'>© 2023 Personal Portfolio |
          <a href="https://www.facebook.com/profile.php?id=100003268045086"
            target="_blank"
            rel="noopener noreferrer"
            className='text-dark name'
          >
            Eleomar Fajutnao
          </a>
        </p>
      </div>
    </footer>
  )
}
