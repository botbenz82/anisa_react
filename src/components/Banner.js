import React from 'react';
import Image from '../assets/frontphoto.jpg'
import { FaGithub,FaYoutube,FaDribbble,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import { fadeIn} from '../variants'
import { firstName, lastName, githutURL ,resumeURL ,expYears} from '../config/config.js'
const Banner = () => {
  return <section className="" id='home'>
    <div className='container mx-auto'>
      <div className='flex items-center flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '>{firstName} <span>{lastName}</span></motion.h1>
          <motion.div 
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            {/* <span className='mr-4'>I am a</span> */}
            <TypeAnimation sequence={[
              'Marketing expert',
              1000,
               'Midtrans expert',
               1000,
              // 'AI Developer',
              // 1000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7}}
          className='mb-2  mx-auto lg:mx-0'>
            I am Anisa Probowo and from Indonesia.<br />
          I am working as marketing expert on Face-Message.com
          </motion.p>
            {/* <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <motion.button 
                      variants={fadeIn('up',0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7}}
            className='btn btn-lg'>Download my CV</motion.button>
            </div> */}
            <a href={resumeURL} target="_blank" ><button className='btn btn-sm mt-6 mr-3'>My resume</button></a> 
            <a href={githutURL} target="_blank"><button className='btn btn-sm'>See my work</button></a> 
            {/* <motion.div 
                      variants={fadeIn('up',0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                  <a href='#'>
                    <FaGithub/>
                  </a>
              <a href='#'>
                <FaTwitter/>
              </a>
              <a href='#'>
                <FaLinkedin/>
              </a>
            </motion.div> */}

        </div>
        <motion.div
                  variants={fadeIn('down',0.5)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7}}
        >
            <img className='h-[400px] rounded-full' src={Image} alt=''/>
          </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
