import React from 'react'
import '../Pages/ProjectStyle.css'

export const MyProjects = ({ id, img, title, details, techUse, linkLive, linkCode }) => {

    return (
        <div key={id} className="col-body h-100 d-flex flex-column justify-content-between">
            <div className="img-body overflow-hidden">
                <img className='project-img w-100 object-fit-cover ' src={img} alt="" />
            </div>  
            <div>
                <p className='project-title'>{title}</p>
                <p className="project-sub-title">{details}</p>
            </div>
            <p className='tech-use'>{techUse}</p>
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
  )
}
