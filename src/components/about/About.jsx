import React from 'react'
import about from './about.css'
import me1 from '../../assets/pp1.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineUser} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
          <img src={me1} alt='Meimg'></img>
          </div>
        </div>

        <div className='about-content'>
        <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon'></FaAward>
              <h5>Experience</h5>
              <small>2+ year working</small>
            </article>
          

          {/* <div className='about-cards'> */}
            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>projects</h5>
              <small>10+</small>
            </article>
          {/* </div> */}

          {/* <div className='about-cards'> */}
            <article className='about-card'>
              <AiOutlineUser className='about-icon'></AiOutlineUser>
              <h5>Clients</h5>
              <small>30+</small>
            </article>
           
            </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto aliquam commodi, nostrum facere sed suscipit illum alias nulla blanditiis sint pariatur sit quod, eaque modi! Quam molestiae aspernatur iusto.\</p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>

      </div>

  </section>
  )
}

export default About