import React, { useRef } from 'react'
import contact from './contact.css'
import { CgMail } from 'react-icons/cg'
import {BsMessenger} from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from 'emailjs-com';



const Contact =()=> {
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kki5ee9', 'template_mazscki', form.current, 'loDOUTi0AVt1GeBNL')

  e.target.reset();
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
        <article className='contact-option'>
            <CgMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>jharotiyaharshit@gmail.com</h5>
            <a href='mailto:jharotiyaharshit@gmail.com'>send a message</a>
          </article>

          <article className='contact-option'>
            <BsMessenger className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>HarshitJharotiya</h5>
            <a href='https://www.facebook.com/profile.php?id=100007078689344 ' target='blank' >send a message</a>
          </article>

          <article className='contact-option'>
            <AiOutlineWhatsApp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917529966715</h5>
            <a href='https://api.whatsapp.com/send?phone+917529966715' target='_blank' >send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Enter Your FullName' ></input>
          <input type='email' name='email' placeholder='Enter Your Email' ></input>
          <textarea name='message' rows='7' placeholder='Enter your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact