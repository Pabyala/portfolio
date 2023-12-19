import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Skills } from './Skills'
import { Contact } from './Contact'
import { Project } from './Project';
import './PagesStyle.css'

export const Pages = () => {
  return (
    <div className='pages container w-100' style={{ overflow: 'hidden' }}>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}
