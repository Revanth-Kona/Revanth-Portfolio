import React from 'react';
import aboutIcon2 from "../assets/aboutIcon2.jpg";
import educationIcon from "../assets/educationIcon.png"; // Replace with an appropriate icon for education

const Education = () => {
  return (
    <section className='about__container' id='education'>
      <h2 className='about__title'>Education</h2>
      <div className='about__content'>
        <img src={aboutIcon2} className='about__img' alt='About Icon' />
        <ul className='about__items'>
          <li className='about__item'>
            <img src={educationIcon} alt='Education Icon' />
            <div style={{marginLeft:"20px"}}>
              <p>B.Tech (Computer Science and Engineering)</p>
              <h3>Koneru Lakshmaiah Education Foundation(KLU),  Vijayawada</h3>
              <p> 2020 - 2024</p>
              <p> 7.79/10</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
