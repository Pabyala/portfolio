import React from 'react'
import { LogosCss3, LogosHtml5, SkillIconsReactDark, MdiResponsive, LogosBootstrap, LogosMaterialUi, VscodeIconsFileTypeTypescriptOfficial, DeviconTailwindcss, SkillIconsNodejsDark, SkillIconsExpressjsLight, SkillIconsMongodb, SkillIconsRedux, LogosReact } from './Icons'

export default function GetTechIcon(techUse) {
    const techIcons = {
        'HTML': <LogosHtml5/>,
        'CSS': <LogosCss3/>,
        'ReactJs': <SkillIconsReactDark/>,
        'Responsive Design': <MdiResponsive/>,
        'Bootstrap': <LogosBootstrap/>,
        'Material UI': <LogosMaterialUi/>,
        'ReactTs': <VscodeIconsFileTypeTypescriptOfficial/>,
        'Tailwind': <DeviconTailwindcss/>,
        'NodeJS': <SkillIconsNodejsDark/>,
        'ExpressJS': <SkillIconsExpressjsLight/>,
        'Redux': <SkillIconsRedux/>,
        'MongoDB': <SkillIconsMongodb/>,
        'Context API': <LogosReact/>,
    }

    return techIcons[techUse] || null;
}
