import React, { useEffect, useRef } from 'react'
import '../Pages/ProjectStyle.css'
import { useAnimation, useInView } from 'framer-motion'

export const MyProjects = ({projectImg, projectTitle, projectDescrip, projectTech, projectLiveDemo, projectCode}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    
    return (
    // <div className='h-100'>
        <div ref={ref} className="col-body p-3 h-100 d-flex flex-column justify-content-between"
        >
            
                <div className="img-body overflow-hidden mb-2">
                    <img className='project-img w-100 object-fit-cover ' src={projectImg} alt="" />
                </div>  
                <div>
                    <p className='project-title fs-5 mb-1'>{projectTitle}</p>
                    <p className="project-sub-title fs-6">{projectDescrip}</p>
                </div>
                <p className='tech-use fs-5'>{projectTech}</p>
                <div className="a-body">
                    <a className='a-live-demo d-inline-block me-3 outline-none border-0 py-2 px-3 bg-black text-white fs-6 outline-none'
                    target="_blank"
                    rel="noreferrer"
                    href={projectLiveDemo}
                    >
                        Live demo
                    </a>
                    <a className='a-code d-inline-block ml-1 outline-none border-0 py-2 px-3 bg-black text-white fs-6'
                    target="_blank"
                    rel="noreferrer"
                    href={projectCode}
                    >
                        Code
                    </a>
                </div>
            
        </div>
    // </div>
  )
}
