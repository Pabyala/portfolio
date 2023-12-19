import React, { useEffect, useState } from 'react'
import './ProjectStyle.css'
import { ProjectSkeletonBtn, ProjectSkeletonTitles } from '../Skeleton/SkeletonProject';
import MyProjectContent from '../Components/MyProjectContent';

export const Project = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutLoading = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeoutLoading)
      // eslint-disable-next-line
    }, []);

    return (
        <section className='project' id='project w-100'>
            {loading ? (<ProjectSkeletonTitles/>)
            :(
                <>
                    <h1 className='prject-header-title position-relative'>My Projects</h1>
                    <p className='project-text'>Here are some of my personal projects.</p>
                </>
            )}

            <MyProjectContent/>
            
            <div className='more-wrap d-flex align-items-center justify-content-center'>
                {loading ? (<ProjectSkeletonBtn/>)
                : (
                    <a 
                        className='btn-show-more outline-none bg-black text-white'
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Pabyala"
                    >
                        Show more...
                    </a>
                )}
            </div>
        </section>
    )
}
