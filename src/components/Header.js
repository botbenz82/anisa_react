import React from 'react';
import logo2 from '../assets/logo2.png'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <a href='#'>
                <img className='h-[50px] rounded-full' src={logo2} alt=''/>
            </a>
            {/* <button className='btn btn-sm'>work with me</button> */}
        </div>
    </div>
  </header>;
};

export default Header;

