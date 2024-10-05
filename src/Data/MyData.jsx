import webImg from '../Asset/web-design.png'
import responsiveImg from '../Asset/responsive.png'
import dataImg from '../Asset/web-design.png'

import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CibViber, DeviconGit, DeviconGithub, DeviconJavaWordmark, DeviconTailwindcss, FlatColorIconsCommandLine, IconoirNpm, LogosBootstrap, LogosCss3, LogosHtml5, LogosJavascript, LogosMaterialUi, LogosMysql, SkillIconsExpressjsLight, SkillIconsMongodb, SkillIconsNodejsDark, SkillIconsReactDark, SkillIconsVscodeDark, VscodeIconsFileTypeTypescriptOfficial } from '../Components/Icons';

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
        id: 2,
        icon: <CibViber className='social-icon'/>,
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
        techIcon: <LogosHtml5 className='skills-icon html'/>, 
        nameIcon: "HTML"
    },
    {
        id: 2,
        techIcon: <LogosCss3 className='skills-icon css'/>, 
        nameIcon: "CSS"
    },
    {
        id: 3,
        techIcon: <LogosJavascript className='skills-icon javaScript'/>, 
        nameIcon: "JavaScript"
    },
    {
        id: 4,
        techIcon: <SkillIconsReactDark className='skills-icon react'/>, 
        nameIcon: "React"
    },
    {
        id: 5,
        techIcon: <DeviconGit className='skills-icon git'/>, 
        nameIcon: "Git"
    },
    {
        id: 6,
        techIcon: <DeviconGithub className='skills-icon github'/>, 
        nameIcon: "Github"
    },
    {
        id: 7,
        techIcon: <FlatColorIconsCommandLine className='skills-icon commandline'/>, 
        nameIcon: "Commandline"
    },
    {
        id: 8,
        techIcon: <SkillIconsVscodeDark className='skills-icon VSCode'/>, 
        nameIcon: "VS Code"
    },
    {
        id: 9,
        techIcon: <LogosBootstrap className='skills-icon bootstrap'/>, 
        nameIcon: "Bootstrap" 
    },
    {
        id: 10,
        techIcon: <LogosMaterialUi className='materialUi'/>, 
        nameIcon: "Material UI" 
    },
    {
        id: 11,
        techIcon: <VscodeIconsFileTypeTypescriptOfficial className='skills-icon typeScript'/>, 
        nameIcon: "TypeScript" 
    },
    {
        id: 12,
        techIcon: <SkillIconsNodejsDark  className='skills-icon nodeJs'/>, 
        nameIcon: "NodeJs" 
    },
    {
        id: 13,
        techIcon: <SkillIconsExpressjsLight  className='skills-icon expressJs'/>, 
        nameIcon: "ExpressJs" 
    },
    {
        id: 14,
        techIcon: <SkillIconsMongodb className='skills-icon mongoDB'/>, 
        nameIcon: "MongoDB" 
    },
    {
        id: 15,
        techIcon: <LogosMysql className='skills-icon mySQL'/>, 
        nameIcon: "MySQL" 
    },
    {
        id: 16,
        techIcon: <DeviconJavaWordmark className='skills-icon java'/>, 
        nameIcon: "Java" 
    },
    {
        id: 17,
        techIcon: <DeviconTailwindcss className='skills-icon tailwind'/>, 
        nameIcon: "Tailwind" 
    },
    {
        id: 18,
        techIcon: <IconoirNpm className='skills-icon npm'/>, 
        nameIcon: "NPM" 
    },

]