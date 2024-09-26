import React, { useState } from 'react'
import '../Pages/ProjectStyle.css'
import Project from './Project'

export const MyProjects = ({ id, img, title, details, techUse, linkLive, linkCode }) => {
    const [open, setOpen] = useState(false)

    const techSplit = techUse.split(" ").slice(0, 4).join(" ");

    return (
        <>
        <div key={id} className="col-body h-100 d-flex flex-column justify-content-between">
            <div className="img-body overflow-hidden">
                <img className='project-img w-100 object-fit-cover ' src={img} alt="" />
            </div>  
            <div>
                <p className='project-title'>{title}</p>
                <p className="project-sub-title">
                    {`${details.slice(0, 70)}...`}
                    <span onClick={() => setOpen(true)} className='cursor-pointer fw-bold text-decoration-none text-primary' style={{ cursor: 'pointer' }}>see more</span>
                </p>
                <Project
                    show={open}
                    onHide={() => setOpen(false)}

                    id={id}
                    title={title}
                    details={details}
                    techUse={techUse}
                    linkLive={linkLive}
                    linkCode={linkCode}
                    img={img}
                />
            </div>
            <p className='tech-use'>{`${techSplit.slice(0, 30)}...`}</p>
            <div className="a-body">
                <a className='a-live-demo d-inline-block outline-none py-2 bg-black text-white outline-none'
                target="_blank"
                rel="noreferrer"
                href={linkLive}
                >
                    Live demo
                </a>
                <a className='a-code d-inline-block ml-1 outline-none py-2 bg-black text-white'
                target="_blank"
                rel="noreferrer"
                href={linkCode}
                >
                    Code
                </a>
            </div>
        </div>
        
        </>
  )
}
