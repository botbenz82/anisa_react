import React from 'react';

import { BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import {expYears} from '../config/config';
const Services = () => {
  const services = [
    {
      name:'Title',
      description:'I can do ....................',
      link:'Learn more',
    },
    {
      name:'Title',
      description:'I can do ....................',
      link:'Learn more',
    },
    {
      name:'Title',
      description:'I can do ....................',
      link:'Learn more',
    },
  ]
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <diV className="flex flex-col lg:flex-row">
        <motion.div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
                variants={fadeIn('right',0.5)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0.3}}
        >
          <h2 className='text-accent h2 mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I am a marketing expert with 2years of experience<br/>...........<br/>...........</h3>
            <a href='https://github.com/snakeBenz/' target='_black' ><button className='btn btn-sm'>See my work</button></a> 
        </motion.div>
        <motion.div 
                variants={fadeIn('left',0.5)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0.3}}
        className='flex-1'
        >
          
          <div>
            {services.map((service,index)=>{
              const {name,description,link} = service
              return <div key={index} className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a href='#'className='text-gradient text-sm'>
                    {link}
                  </a>
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </diV>
    </div>
  </section>;
};

export default Services;
