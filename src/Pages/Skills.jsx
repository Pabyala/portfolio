import React, { useEffect, useState } from 'react'
import './SkillsStyle.css'
import { SkillsSkeleton, SkillsSkeletonTitles } from '../Skeleton/SkeletonSkills';
import { TechSkill } from '../Components/TechSkill';
import { SkillsAnimationTitle } from '../Components/AnimateComponent';

export const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className='skills' id='skills'>
        {loading ? (<SkillsSkeletonTitles/>)
        :( 
          <>
          <SkillsAnimationTitle>
            <h1 className='skill-title fs-2 mb-3 position-relative'>Skills & Tools</h1>
          </SkillsAnimationTitle>

          <SkillsAnimationTitle
            customTransition={{ 
              ease: 'easeInOut', 
              duration: 2, 
              delay: 0.4
            }}
          >
            <h2 className='skill-subtitle fw-bold fs-3 mb-0'>My toolbox</h2>
          </SkillsAnimationTitle>

          <SkillsAnimationTitle
            customTransition={{ 
              ease: 'easeInOut', 
              duration: 2, 
              delay: 0.5
            }}
          >
            <p className='skill-text fs-6'>
              The skills, tools and technologies I use to develop the website
            </p>
          </SkillsAnimationTitle>  
          </> 
        )}

        {loading ? ( <SkillsSkeleton/> ) 
        :( <TechSkill/> )}
    </section>
  )
}
