import React from 'react'
import Shimmer from './Shimmer'
import './SkeletonStyle.css'

export const ContactSkeleton = () => {
    return (
        <div className='skeleton-contact-row'>
            <div className="skeleton-contact-body">
                <div className="skeleton-contact-img">
                </div>
            </div>
            <form className='skeleton-contact-form'>
                <div className='skeleton-contact-subTitle'></div>
                <div className="skeleton-contac-input contac-input"></div>
                <div className="skeleton-contac-input contac-input"></div>
                <div className="skeleton-contac-input contac-input"></div>
                <div className="skeleton-contac-input contac-textarea"></div>
                <div className="skeleton-contact-btn"></div>
            </form>    
            <Shimmer/>
        </div>
    )
}

export const ContactSkeletonTitles = () => {
    return (
        <div className='skeleton-project'></div>
    )
}
