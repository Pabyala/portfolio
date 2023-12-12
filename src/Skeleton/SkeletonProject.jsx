import React from 'react'
import Shimmer from './Shimmer'
import './SkeletonStyle.css'

export const ProjectSkeleton = () => {
    return (
        <div className="skeleton-project-con col-4 mt-4">
            <div className="skeleton-project-body">
                <div className="skeleton-project-img"></div>
                <div className="skeleton-project-title"></div>
                <div className="skeleton-project-pragraph">
                    <div className='project-paragraph text1'></div>
                    <div className='project-paragraph text2'></div>
                    <div className='project-paragraph text3'></div>
                    <div className='project-paragraph text4'></div>
                </div>
                <div className="skeleton-project-techUse"></div>
                <div className="skeleton-project-btns">
                    <div className="project-btn one"></div>
                    <div className="project-btn two"></div>
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}

export const ProjectSkeletonBtn = () => {
    return (
        <div className='skeleton-project-btnMore'></div>
    )
}

export const ProjectSkeletonTitles = () => {
    return (
        <>
            <div className='skeleton-project-headTitle'></div>
            <div className='skeleton-project-headText'></div>
        </>
    )
}

