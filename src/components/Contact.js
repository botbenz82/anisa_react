import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7pmg2ar', 'template_fel215g', form.current, 'Pzrjx_7IkOUIW-bT9')
      .then((result) => {
          console.log(result.text);
          alert('email sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return <section className='py-16 lg:section'id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div className='flex-1'
                                variants={fadeIn('left',0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once:false, amount:0.3}}>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
          <h2 className='leading-none text-[40px] lg:text-[40px] mb-12'>If you want to work with me, be sure to send me a message.<br />
                                                                        I'll be sure to look at it and get back to you.</h2>
        </motion.div>
        <motion.div className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                                variants={fadeIn('right',0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once:false, amount:0.3}}>
          <form ref={form} onSubmit={sendEmail}>
            <input 
            className='border-b outline-none bg-transparent py-3 placeholder:text-white w-full focus:border-accent transition-all'
            name="user_name"
            placeholder='Your name'
            type='text'/>
            <input 
            className='border-b outline-none bg-transparent py-3 placeholder:text-white w-full focus:border-accent transition-all'
            name="user_email"
            placeholder='Your email'
            type='email'/> 
            <input 
            className='border-b outline-none bg-transparent py-3 placeholder:text-white w-full focus:border-accent transition-all'
            name="subject"
            placeholder='subject'
            type='text'/>            
            <textarea
                        className='border-b outline-none bg-transparent py-12 placeholder:text-white w-full focus:border-accent transition-all resize-none mb-12'
                        name="message" 
                        placeholder='Your message'
                        type='text'>
            </textarea>     
            <button type='submit' value="Send" className='btn btn-lg'>send message</button>                
          </form>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Contact;
