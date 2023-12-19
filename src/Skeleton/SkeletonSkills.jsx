import React from 'react'
import './SkeletonStyle.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shimmer from './Shimmer';
import { MyTechSkills } from '../Data/MyData';

export const SkillsSkeleton = () => {
    return (
        <Row className='skeleton-skills-row'>
            {MyTechSkills.map((tech) => (
                <Col key={tech.id} xs={6} md={4} lg={3} xl={3} className="skeleton-skills-myGap">
                    <div className="skeleton-skills-icon"></div>
                    <div className="skeleton-skills-iconName"></div>
                </Col>
            ))}
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