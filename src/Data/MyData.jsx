import webImg from '../Asset/web-design.png'
import responsiveImg from '../Asset/responsive.png'
import dataImg from '../Asset/web-design.png'

import { MdDateRange, MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGit } from "react-icons/bi";
import { HiCommandLine } from "react-icons/hi2";
import { TbBrandVscode } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import MaterialUI from '../Asset/material ui.png'

export const WhatCanIDoItem = [
    {
        id: 1,
        img: webImg,
        titleCard: "Web Development",
        textContent: "Building and maintaining functional and aesthetic websites."
    },
    {
        id: 2,
        img: responsiveImg,
        titleCard: "Responsive Design",
        textContent: "Provide a better user experience and to make it easier to navigate across all devices."
    },
    {
        id: 3,
        img: dataImg,
        titleCard: "Data Scraping",
        textContent: "Gathering data from a websites and make into an API to reuse the scraped data."
    }
]


export const myInformation = [
    {
        id: 1,
        icon: <MdDateRange className='social-icon'/> ,
        iconInfo: "22nd October 2000"
    },
    {
        id: 2,
        icon: <BiSolidPhoneCall className='social-icon'/>,
        iconInfo: "0950-468-8872"
    },
    {
        id: 3,
        icon: <MdEmail className='social-icon'/> ,
        iconInfo: "eleomarfaafajutnao@gmail.com"
    },
    {
        id: 4,
        icon: <AiFillHome className='social-icon'/> ,
        iconInfo: "Tumana, Marikina City, Philippines"
    },
]


export const MyTechSkills = [
    {
        id: 1,
        techIcon: <AiFillHtml5 className='skills-icon html'/>, 
        nameIcon: "HTML"
    },
    {
        id: 2,
        techIcon: <BiLogoCss3 className='skills-icon css'/>, 
        nameIcon: "CSS"
    },
    {
        id: 3,
        techIcon: <BiLogoJavascript className='skills-icon javaScript'/>, 
        nameIcon: "JavaScript"
    },
    {
        id: 4,
        techIcon: <BiLogoReact className='skills-icon react'/>, 
        nameIcon: "React"
    },
    {
        id: 5,
        techIcon: <BiLogoGit className='skills-icon git'/>, 
        nameIcon: "Git"
    },
    {
        id: 6,
        techIcon: <AiFillGithub className='skills-icon github'/>, 
        nameIcon: "Github"
    },
    {
        id: 7,
        techIcon: <HiCommandLine className='skills-icon commandline'/>, 
        nameIcon: "Commandline"
    },
    {
        id: 8,
        techIcon: <TbBrandVscode className='skills-icon VSCode'/>, 
        nameIcon: "VS Code"
    },
    {
        id: 9,
        techIcon: <FaBootstrap className='skills-icon bootstrap'/>, 
        nameIcon: "Bootstrap" 
    },
    {
        id: 10,
        techIcon: <img src={MaterialUI} alt='Material UI' className='materialUi'/>, 
        nameIcon: "Material UI" 
    }
]