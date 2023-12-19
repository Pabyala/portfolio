import React from 'react'
import '../Pages/AboutStyle.css'
import { Row, Col } from 'react-bootstrap';
import { WhatCanIDoItem } from '../Data/MyData';

export const WhatCanIDo = () => {
    return (
        <Row className='wcid-row position-relative w-full overflow-hidden'>
            {WhatCanIDoItem.map((item, index) => {
                return(
                    <Col key={index}  md={4} lg={4} className='wcid col'>
                        <div className='wcid-wrap-card'>
                            <img className='svg' src={item.img} alt=""/>
                            <h5 className='title-card'>{item.titleCard}</h5>
                            <p className='sub-card'>{item.textContent}</p>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}
