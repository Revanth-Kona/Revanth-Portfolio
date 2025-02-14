import React from 'react'
import {skills} from '../data/index'

const Skills = () => {
  return (
    <secion className="experience__container" id="skills">
      <h2 className='experience__title'>Skills</h2>
      <div className="ecperience__content">
        <div className='experience__skills'>
            {skills.map((skill,id)=>{
                return(
                    <div className='experience__skill' key={id}>
                        <div className='experience__skillImageContainer'>
                            <img src={skill.imageSrc} alt='' />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </secion>
  )
}

export default Skills
