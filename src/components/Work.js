import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import port1 from '../assets/port1.png'
import port2 from '../assets/port2.png'
import {BiCodeAlt} from 'react-icons/bi'
import {CiStreamOn} from 'react-icons/ci'
import port3 from '../assets/port3.png'
const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once:false, amount:0.3}}>
          <div className=''>
            <h2 className='h2 leading-tight text-accent'>My latest <br/>
            work.</h2>
            <p className='max-w-sm mb-16'>
              you can write something that you want to wirte<br/>...........<br/>...........
            </p>
             <a href='https://github.com/snakeBenz/' target='_blank'><button className='btn btn-sm'>View all projects</button></a> 
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={port1} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50's> <span className='text-gradient'>Mazda Australia</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <div className='flex flex-row gap-x-10'>
              <a href='https://github.com/snakeBenz/Mazda-car' target="_blank"><span className='text-3xl text-white'><BiCodeAlt/></span></a> 
              <a href='https://www.mazda.com.au/' target="_blank"><span className='text-3xl text-white'><CiStreamOn/></span></a> 
              </div>
            </div>
            
          </div>
          
        </motion.div>
        <div className='flex-1 flex flex-col gap-y-10'>
          
        <motion.div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0.3}}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={port2} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50's> <span className='text-gradient'>Crisp Salad</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <div className='flex flex-row gap-x-10'>
              <a href='https://github.com/snakeBenz/crisp-salad-work/' target="_blank"><span className='text-3xl text-white'><BiCodeAlt/></span></a> 
              <a href='https://crisp.co.jp/' target="_blank"><span className='text-3xl text-white'><CiStreamOn/></span></a> 
              </div>
            </div>

            
          </motion.div>
          
          <motion.div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                          variants={fadeIn('left',0.5)}
                          initial='hidden'
                          whileInView='show'
                          viewport={{once:false, amount:0.3}}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={port3} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50's> <span className='text-gradient'>Booking System</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <div className='flex flex-row gap-x-10'>
              <a href='https://github.com/snakeBenz/Booking-system-hospit' target="_blank"><span className='text-3xl text-white'><BiCodeAlt/></span></a> 
              <a href='https://www.hopitude.com/' target="_blank"><span className='text-3xl text-white'><CiStreamOn/></span></a> 
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
