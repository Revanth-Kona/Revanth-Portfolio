import React from 'react';
import emailIcon from '../assets/emailIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';
import phoneIcon from '../assets/phoneIcon.png';

const Contact = () => {
  return (
    <footer className='contact__container' id='contact'>
      <div className='contact__text'>
        <h2>Contact</h2>
        {/* <p>Feel free to reach out</p> */}
      </div>
      <ul className='contact__links'>
        <li className='contact__link'>
          <img src={phoneIcon} alt='Phone Icon' style={{ width: '50px', height: '50px' }} />
          <a href='tel:+91 9010872249'>Phone</a>
        </li>
        <li className='contact__link'>
          <img src={emailIcon} alt='Email Icon' />
          <a href='mailto:skrevanth.kona@gmail.com'>Gmail</a>
        </li>
        <li className='contact__link'>
          <img src={linkedinIcon} alt='LinkedIn Icon' />
          <a href='https://www.linkedin.com/in/kona-revanth-72bb50220/' target='_blank' rel='noopener noreferrer'>
            Linkedin
          </a>
        </li>
        <li className='contact__link'>
          <img src={githubIcon} alt='GitHub Icon' />
          <a href='https://github.com/Revanth-Kona' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
