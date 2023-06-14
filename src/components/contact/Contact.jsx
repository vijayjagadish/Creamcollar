import React, { useRef } from 'react'

import emailjs from '@emailjs/browser';

import './contact.css';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2lj68oq', 'template_ox7b7ya', form.current, 'ojS0CkbYhXCWw7nMt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div className='creamcollar__contact'>
      <h1>Contact Us</h1>
      <div className='creamcollar__contact-box'>
        <div className='creamcollar__contact-box-container'>
          <h2>How can we help?</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Enim ut porttitor leo felis egestas ut purus Lorem ipsum dolor sit amet consectetur.</p>
          <form method="post" action='#' ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="number" name="phone number" placeholder="Phone Number" required/>
            <textarea  name="message" placeholder="Add your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className='creamcollar__contact-box-container-links'>
          <h2>Reach Us</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.722719071252!2d80.24602337350444!3d12.989578514487043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d4dbfbfae67%3A0xce1befd875c5d535!2sTidal%20park!5e0!3m2!1sen!2sin!4v1686394650978!5m2!1sen!2sin" 
          width='100%' 
          height='100%'
          style={{border:0}}
          allowfullscreen="" 
          loading="lazy" 
          title="map"
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>

  )
}

export default Contact