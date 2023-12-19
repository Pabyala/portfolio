import React from 'react'
import '../Pages/SkillsStyle.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyTechSkills } from '../Data/MyData';

export const TechSkill = () => {
    return (
        <Row className='skills-row'>
            {MyTechSkills.map((skill, index) => {
                return(
                    <Col 
                        key={index} 
                        xs={6} md={4} lg={3} xl={3} 
                        className="my-gap d-flex flex-column justify-content-center align-items-center"
                    >
                            <div className="tech-icon">
                                {skill.techIcon}
                            </div>
                            <p className='icon-name'>{skill.nameIcon}</p>
                    </Col>
                )
            })}
        </Row>
    )
}
