import React, { useRef } from 'react'
import '../Pages/AboutStyle.css'
import { Row, Col } from 'react-bootstrap';
import { WhatCanIDoItem } from '../Data/MyData';
import { useAnimation, useInView } from 'framer-motion';
import { AboutAnimationWCID } from './AnimateComponent';

export const WhatCanIDo = () => {
    const mainControls = useAnimation();
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
  
    if (isInview) {
        mainControls.start("visible");
    }

    return (
        <Row className='position-relative w-full overflow-hidden py-1'>
            {WhatCanIDoItem.map((item, index) => {
                const delayIncrement = 0.3;
                const individualDelay = index * delayIncrement;
                return(
                    <Col key={index} sm={4} className='col px-3'>
                        <AboutAnimationWCID
                            customStyle="col-card px-5 py-4 d-flex flex-column align-items-center justify-content-center"
                            customTransition={{ 
                                ease: 'easeInOut', 
                                duration: 2, 
                                delay: 1 + individualDelay
                            }}
                        >
                            {/* <div className='col-card px-5 py-4 d-flex flex-column align-items-center justify-content-center'> */}
                                <img className='svg mb-2' src={item.img} alt=""/>
                                <h5 className='title-card text-center fs-5'>{item.titleCard}</h5>
                                <p className='sub-card text-center mb-0 fs-6'>{item.textContent}</p>
                            {/* </div> */}
                        </AboutAnimationWCID>
                    </Col>
                )
            })}
        </Row>
    )
}
