import React, { useEffect, useState } from 'react'
import '../Pages/ProjectStyle.css'
import { ProjectSkeleton } from '../Skeleton/SkeletonProject';
import { MyProjects } from './MyProjects';
import { ProjectData } from '../Data/ProjectData'

const MyProjectContent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutLoading = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timeoutLoading)
        // eslint-disable-next-line
    }, []);

    return (
        <div className="row row-ga">
            {loading ? (
                <ProjectSkeleton/>
            ) : (
            ProjectData.map((proj) => (
                <div key={proj.id} className='project-col col-12 col-md-6 col-lg-4 col-xl-3'>
                    <MyProjects
                        id={proj.id}
                        img={proj.img}
                        title={proj.projectTitle}
                        details={proj.projectDetails}
                        techUse={proj.projectTechUse}
                        linkLive={proj.projectLinkLive}
                        linkCode={proj.projectLinkCode}
                    />
                </div>
            ))
        )}
            </div>
  )
}

export default MyProjectContent;