import React, { useEffect, useState } from 'react'
import './SkillsStyle.css'
import { SkillsSkeleton, SkillsSkeletonTitles } from '../Skeleton/SkeletonSkills';
import { TechSkill } from '../Components/TechSkill';

export const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutLoading)
    // eslint-disable-next-line
  }, []);

  return (
    <section className='skills w-100' id='skills'>
        {loading ? (<SkillsSkeletonTitles/>)
        :( 
          <>
            <h1 className='skill-title position-relative'>Skills & Tools</h1>
            <h2 className='skill-subtitle mb-0'>My toolbox</h2>
            <p className='skill-text'>
              The skills, tools and technologies I use to develop the website
            </p>
          </> 
        )}

        {loading ? ( <SkillsSkeleton/> ) 
        :( <TechSkill/> )}
    </section>
  )
}