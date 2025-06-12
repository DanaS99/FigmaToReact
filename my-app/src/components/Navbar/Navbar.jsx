import React, { useState } from 'react';
import { menu, close } from '../../assets';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <nav className={`h-16 p-5 text-lg fixed text-center flex justify-between bg-headerbgbox backdrop-blur-xl rounded-t-none rounded-b-xl w-full top-0 text-white ${isActive ? 'hidden' : 'flex'} lg:w-2/3 xxs:top-6 xs:w-5/6 md:left-20 sm:left-20 xs:left-11 xxs:w-5/6 xxs:left-7 lg:left-60 lg:right-auto z-50`}>
        <a className='text-lg font-semibold' href='#'>
          Sound<span className='text-buttonColor font-extrabold'>DZign</span>
        </a>
        <ul id='menu' className='hidden text-lg flex-col lg:flex-row lg:flex p-0 gap-4 sm:gap-12 font-semibold lg:items-center'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#topics'>Course Details</a>
          </li>
          <li>
            <a href='#info'>Blog</a>
          </li>
          <li>
            <a href='#students'>Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className='lg:hidden flex items-center'>
          <img src={menu} alt='menu' className='h-6 w-6' /> 
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed left-0 right-0 z-[600] bg-headerbgbox text-white overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'h-screen py-16 px-8' : 'h-0'}`}>
        {/* Close Icon - Only Visible When Menu is Active */}
        {isActive && (
          <div onClick={() => setIsActive(false)} className='block fixed top-8 right-8'>
            <img src={close} alt='close' className='h-6 w-6' /> 
          </div>
        )}
        <ul id='menu' className={`flex flex-col gap-4 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <li>
            <a className='text-base font-extrabold py-5 px-0 inline-block' href='#about'>About</a>
          </li>
          <li>
            <a className='text-base font-extrabold py-5 px-0 inline-block' href='#topics'>Course Details</a>
          </li>
          <li>
            <a className='text-base font-extrabold py-5 px-0 inline-block' href='#info'>Blog</a>
          </li>
          <li>
            <a className='text-base font-extrabold py-5 px-0 inline-block' href='#students'>Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



