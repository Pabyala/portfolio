import React from 'react'
import { Modal } from 'react-bootstrap'
import TechUse from './TechUse'

export default function Project({ show, onHide, id, title, details, techUse, linkLive, linkCode, img }) {
    const htmlProjectDetails = details.replace(/\n/g, '<br>');
    return (
        <Modal 
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div key={id} className="col-body h-100 d-flex flex-column justify-content-between">
                <div className="img-body overflow-hidden">
                    <img className='project-img w-100 object-fit-cover ' src={img} alt="" />
                </div>  
                <div>
                    <p className='project-title'>{title}</p>
                    <p className="project-sub-title" dangerouslySetInnerHTML={{ __html: htmlProjectDetails }} />
                </div>
                <TechUse techArray={techUse} showMoreIcon={true} />
                <div className="a-body">
                    {id === 7 ? (
                            <span className='a-live-demo d-inline-block py-2 bg-black text-white cursor-not-allowed '>
                                Live demo (disabled)
                            </span>
                        ) : (
                            <a className='a-live-demo d-inline-block py-2 bg-black text-white'
                            target="_blank"
                            rel="noreferrer"
                            href={linkLive}>
                                Live demo
                            </a>
                    )}
                    <a className='a-code d-inline-block ml-1 outline-none py-2 bg-black text-white'
                        target="_blank"
                        rel="noreferrer"
                        href={linkCode}>
                        Code
                    </a>
                </div>
            </div>
        </Modal>
    )
}