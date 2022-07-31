import React from 'react'
import footer from './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Jharotiya</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer-socials'>
        <a href='https://www.facebook.com/'> <BsFacebook/> </a>
        <a href='https://www.instagram.com/'><BsInstagram/></a>
        <a href='https://www.twitter.com/'> <BsTwitter/> </a>
      </div>

      <div className='footer-copyright'>
        <small>&copy;jharotiya. all rights are reserved </small>
      </div>

   </footer>
  )
}

export default Footer