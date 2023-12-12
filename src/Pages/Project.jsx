import React, { useEffect, useState } from 'react'
import './ProjectStyle.css'
import { ProjectSkeletonBtn, ProjectSkeletonTitles } from '../Skeleton/SkeletonProject';
import { ProjectAnimation } from '../Components/AnimateComponent';
import MyProjectContent from '../Components/MyProjectContent';

export const Project = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return (
        <section className='project' id='project'>
            {loading ? (<ProjectSkeletonTitles/>)
            :(
                <>
                    <ProjectAnimation>
                        <h1 className='prject-header-title fs-2 mb-3 position-relative'>My Projects</h1>
                    </ProjectAnimation>
                    <ProjectAnimation
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 1, 
                            delay: 0.4
                        }}
                    >
                        <p className='project-text mb-0 fs-6'>Here are some of my personal projects.</p>
                    </ProjectAnimation>
                </>
            )}

            <MyProjectContent/>
            
            <div className='d-flex align-items-center justify-content-center mt-4'>
                {loading ? (<ProjectSkeletonBtn/>)
                : (
                    <ProjectAnimation>
                    <a className='btn-show-more outline-none border-0 py-2 px-3 bg-black text-white fs-6 outline-none'
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Pabyala"
                    >
                        Show more...
                    </a>
                    </ProjectAnimation>
                )}
            </div>
        </section>
    )
}
