import React from 'react'
import './SkeletonStyle.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shimmer from './Shimmer';

export const SkillsSkeleton = () => {
    return (
        <Row xs={2} md={4} lg={6} className='skeleton-skills-row'>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col  xs={8} md={3} lg={2}className=" skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Col xs={8} md={3} lg={2} className="skeleton-skills-myGap">
                <div className="skeleton-skills-icon"></div>
                <div className="skeleton-skills-iconName"></div>
            </Col>
            <Shimmer/>
        </Row>
    )
}

export const SkillsSkeletonTitles = () => {
    return (
        <>
            <div className='skeleton-skills-title'></div>
            <div className='skeleton-skills-subTitle'></div>
            <div className='skeleton-skills-text'></div>
        </>
    )
}
  
