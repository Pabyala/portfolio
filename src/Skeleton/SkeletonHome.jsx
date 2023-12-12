import React from 'react'
import './SkeletonStyle.css'
import Shimmer from './Shimmer'

export const HomeSkeletonImg = () => {
    return (
        <div className="skeleton-home-img">
            <div className="skeleton-profile-img about-profile-img"></div>
            <Shimmer/>
        </div>
    )
}

export const HomeSkeletonInfo = () => {
    return (
        <div className='skeleton-home-info'>
            <div className='skeleton-home-subTitle'></div>
            <div className='skeleton-home-name'></div>
            <div className='skeleton-home-position'></div>
            <div className='skeleton-home-text'></div>
            <div className='skeleton-home-btn'></div>
            <Shimmer/>
        </div>
    )
}

  
