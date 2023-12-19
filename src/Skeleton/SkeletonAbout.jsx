import React from 'react'
import './SkeletonStyle.css'
import Shimmer from './Shimmer'
import { Row, Col } from 'react-bootstrap';

export const AboutSkeletonImg = () => {
    return (
        <div className="skeleton-about-img">
            <div className="skeleton-about-profileImg"></div>
            <Shimmer/>
        </div>
    )
}

export const AboutSkeletonInfo = () => {
    return (
        <div className="skeleton-about-info">
            <div className="skeleton-about-p1 skeleton-about"></div>
            <div className="skeleton-about-name skeleton-about"></div>
            <div className="skeleton-about-position skeleton-about"></div>
            <div className="skeleton-about-p2 skeleton-about p1"></div>
            <div className="skeleton-about-p2 skeleton-about p2"></div>
            <div className="skeleton-about-p2 skeleton-about p3"></div>
            <div className="skeleton-about-p2 skeleton-about p4"></div>
            <div className="skeleton-about-p2 skeleton-about p5 d-none"></div>

            <div className="skeleton-about-iconInfo">
                <div className="skeleton-about-icon"></div>
                <div className="skeleton-about-data"></div>
            </div>
            <div className="skeleton-about-iconInfo">
                <div className="skeleton-about-icon"></div>
                <div className="skeleton-about-data"></div>
            </div>
            <div className="skeleton-about-iconInfo">
                <div className="skeleton-about-icon"></div>
                <div className="skeleton-about-data"></div>
            </div>
            <div className="skeleton-about-iconInfo last">
                <div className="skeleton-about-icon"></div>
                <div className="skeleton-about-data"></div>
            </div>
            <Shimmer/>
        </div>
    )
}

export const AboutSkeletonSubTitle = () => {
    return (
        <div className='skeleton-wcid-title'></div>
    )
}

export const AboutSkeletonTitle = () => {
    return (
        <div className='skeleton-about-title'></div>
    )
}

export const WhatCanIDoSkeleton = () => {
    return (
        <Row className='skeleton-wcid-row'>
            <Col xs={12} md={4} lg={4} xl={4}  className='skeleton-wcid-col'>
                <div className='skeleton-wcid-card'>
                    <div className='skeleton-wcid-div img'></div>
                    <div className='skeleton-wcid-div title'></div>
                    <div className='skeleton-wcid ske-paragraph'>
                        <div className='wcid-paragraph wcidp1'></div>
                        <div className='wcid-paragraph wcidp2'></div>
                        <div className='wcid-paragraph wcidp3'></div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4}  className='skeleton-wcid-col'>
                <div className='skeleton-wcid-card'>
                    <div className='skeleton-wcid-div img'></div>
                    <div className='skeleton-wcid-div title'></div>
                    <div className='skeleton-wcid ske-paragraph'>
                        <div className='wcid-paragraph wcidp1'></div>
                        <div className='wcid-paragraph wcidp2'></div>
                        <div className='wcid-paragraph wcidp3'></div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4} lg={4} xl={4}  className='skeleton-wcid-col'>
                <div className='skeleton-wcid-card'>
                    <div className='skeleton-wcid-div img'></div>
                    <div className='skeleton-wcid-div title'></div>
                    <div className='skeleton-wcid ske-paragraph'>
                        <div className='wcid-paragraph wcidp1'></div>
                        <div className='wcid-paragraph wcidp2'></div>
                        <div className='wcid-paragraph wcidp3'></div>
                    </div>
                </div>
            </Col>
            <Shimmer/>
        </Row>
    )
}