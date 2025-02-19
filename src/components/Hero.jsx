import React from 'react'
import hero4 from "../assets/hero4.jpg"
import Resume from '../assets/Sri-Krishna-Revanth-Kona-Frontend-Developer-Resume.pdf'

const Hero = () => {
  return (
    <section className='hero__container' id='about'>
      <div className='hero__content'>
        <h1 className='hero__title'>Hi I'm</h1>
        <h2 className='hero__title1'>Sri Krishna Revanth Kona</h2>
        <p className='hero__description'>
          I’m a passionate <strong>Frontend Developer</strong> focused on creating responsive, user-friendly, and scalable web applications. reach out to know more!</p>
        <div className="hero__btn">
          <a href='#contact' className='hero__contactBtn'>Contact Me</a>
          <a href={Resume} download className='hero__contactBtn'>Resume</a>
        </div>
      </div>
      <img src={hero4} className='hero__img' alt='' />    </section>
  )
}

export default Hero
