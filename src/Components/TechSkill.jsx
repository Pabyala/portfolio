import React from 'react'
import '../Pages/SkillsStyle.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyTechSkills } from '../Data/MyData';
import { SkillsAnimatTeachSkill } from './AnimateComponent';

export const TechSkill = () => {
    return (
        <Row xs={2} md={4} lg={6} className='skills-row'>
            {MyTechSkills.map((skill, index) => {
                const delayIncrement = 0.2;
                const individualDelay = index * delayIncrement;
                return(
                    <Col key={index} xs={8} md={3} lg={2} className="my-gap mt-3 d-flex flex-column justify-content-center align-items-center mx-auto-custom">
                        <SkillsAnimatTeachSkill
                            customStyle="d-flex align-items-center flex-column"
                            customTransition={{ 
                                ease: 'easeInOut', 
                                duration: 2, 
                                delay: 0.6 + individualDelay
                            }}
                        >
                            {skill.techIcon}
                            <p className='icon-name fs-6 mb-0'>{skill.nameIcon}</p>
                        </SkillsAnimatTeachSkill>
                    </Col>
                )
            })}
        </Row>
    )
}
