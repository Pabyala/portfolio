import React, { useState } from "react";
import "../Pages/ProjectStyle.css";
import Project from "./Project";
import TechUse from "./TechUse";

export const MyProjects = ({ id, img, title, details, techUse, linkLive, linkCode, }) => {
    const [open, setOpen] = useState(false);
    const techSlice = techUse.slice(0, 6);

    return (
        <div
            key={id}
            className="col-body h-100 d-flex flex-column justify-content-between"
        >
            <div className="img-body overflow-hidden">
                <img
                    className="project-img w-100 object-fit-cover "
                    src={img}
                    alt={title}
                />
            </div>
            <div>
                <p className="project-title">{title}</p>
                <p className="project-sub-title">
                {details.length > 130 ? (
                    <>
                        {`${details.slice(0, 130)}...`}
                        <span
                        onClick={() => setOpen(true)}
                        className="cursor-pointer fw-bold text-decoration-none text-primary"
                        style={{ cursor: "pointer" }}
                        >
                        see more
                        </span>
                    </>
                ) : details}
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
            <div className="d-block d-md-none">
                <TechUse
                    techArray={techUse}
                    showMoreIcon={true}
                    show={() => setOpen(true)}
                />
            </div>
            <div className="d-none d-md-flex">
                <TechUse
                    techArray={techSlice}
                    showMoreIcon={false}
                    show={() => setOpen(true)}
                />
            </div>
            <div className="a-body">
                    <a className='a-live-demo d-inline-block py-2 bg-black text-white'
                        target="_blank"
                        rel="noreferrer"
                        href={linkLive}>
                            Live demo
                    </a>
                    <a className='a-code d-inline-block ml-1 outline-none py-2 bg-black text-white'
                        target="_blank"
                        rel="noreferrer"
                        href={linkCode}>
                        Code
                    </a>
            </div>
        </div>
    );
};
