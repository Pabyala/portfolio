import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import '../Pages/ProjectStyle.css'


/* HOME SECTION ANIMATION */
/* HomeAnimationTitle  */
export const HomeAnimationTitle = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 70},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.2 
            }}
        >
            {children}
        </motion.div>
  )
}
/* HomeAnimationName  */
export const HomeAnimationName = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 70},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.5 
            }}
        >
            {children}
        </motion.div>
  )
}
/* HomeAnimationPositon  */
export const HomeAnimationPositon = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 70},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.8 
            }}
        >
            {children}
        </motion.div>
  )
}
/* HomeAnimationInfo  */
export const HomeAnimationInfo = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 70},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 1 
            }}
        >
            {children}
        </motion.div>
  )
}
/* HomeAnimationGitHubLink  */
export const HomeAnimationGitHubLink = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 30},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 0.7, 
                delay: 1.2 
            }}
        >
            {children}
        </motion.div>
  )
}
/* HomeAnimationProfile  */
export const HomeAnimationProfile = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 70},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 0.7, 
                delay: 1.2 
            }}
        >
            {children}
        </motion.div>
  )
}


/* ABOUT SECTION ANIMATION */
/* HomeAnimationTitle  */
export const AboutAnimationTitle = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.2 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationProfile  */
export const AboutAnimationProfile = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.5 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationGreet  */
export const AboutAnimationGreet = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.5 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationName  */
export const AboutAnimationName = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.7 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationPosition  */
export const AboutAnimationPosition = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.9 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationParagraph  */
export const AboutAnimationParagraph = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 1.1 
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationList  */
export const AboutAnimationList = ({children, customTransition}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 1.1
            }}
        >
            {children}
        </motion.div>
  )
}
/* WHATCANIDO SECTION ANIMATION */
/* AboutAnimation2ndTitle  */
export const AboutAnimation2ndTitle = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 80},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: .5
            }}
        >
            {children}
        </motion.div>
  )
}
/* AboutAnimationWCID  */
export const AboutAnimationWCID = ({children, customTransition, customStyle}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        // <div ref={ref} style={{position: "relative", width: "100%", overflow: "hidden"}}>
        <motion.div ref={ref}
            className={customStyle || ""}
            variants={{
              hidden: {opacity: 0, x: 100},
              visible: {opacity: 1, x: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 1
            }}
        >
            {children}
        </motion.div>
        // </div>
  )
}

/* SKILL SECTION ANIMATION */
/* SkillsAnimationTitle  */
export const SkillsAnimationTitle = ({children, customTransition}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 80},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.3
            }}
        >
            {children}
        </motion.div>
  )
}
/* SkillsAnimatTeachSkill  */
export const SkillsAnimatTeachSkill = ({children, customTransition, customStyle}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref} className={customStyle || ""}
            variants={{
              hidden: {opacity: 0, y: 80},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.6
            }}
        >
            {children}
        </motion.div>
  )
}


/* PROJECT SECTION ANIMATION */
/* ProjectAnimationTitle  */
export const ProjectAnimation = ({children, customTransition, customStyle}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref} className={customStyle || ''}
            variants={{
              hidden: {opacity: 0, y: 80},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.3
            }}
        >
            {children}
        </motion.div>
  )
}
/* AnimateComponent  */
export const AnimateComponent = ({children, customVariants, customInitial, customAnimate, customTransition}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        // console.log(isInview)
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    const defaultVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} style={{position: "relative", width: "100%", overflow: "hidden"}}>
            <motion.div
                variants={customVariants || defaultVariants}
                initial={customInitial || "hidden"}
                animate={customAnimate || mainControls}
                transition={customTransition  || {
                    ease: 'easeInOut',
                    duration: 1, 
                    delay: 0.3 
                }}
            >
                {children}
            </motion.div>
        </div>
  )
}

/* CONTACT SECTION ANIMATION */
/* ContactAnimation  */
export const ContactAnimation = ({children, customTransition, customStyle}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref} className={customStyle || ''}
            variants={{
              hidden: {opacity: 0, y: 80},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={customTransition || {
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.3
            }}
        >
            {children}
        </motion.div>
  )
}



export const AnimateComponent1 = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        // console.log(isInview)
        if(isInview){
            mainControls.start("visible")
        }
    }, [isInview, mainControls])

    return (
        <motion.div ref={ref}
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                ease: 'easeInOut',
                duration: 1, 
                delay: 0.3 
            }}
        >
            {children}
        </motion.div>
  )
}




// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.1
//     },
//   },
// }

// const letterAnimation = {
//   initial: {
//     y: 400
//   },
//   anime: {
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, -0.05, 0.95],
//       duration: 1,
//     }
//   }
// }