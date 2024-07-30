import React from 'react';
import { fb, insta, twitter } from '../../assets';

function Footer() {
  return (
    <footer className='bg-black text-white py-20 px-5 sm:px-10 md:px-20 lg:px-28 '>
    <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 lg:px-20 xl:px-32 space-y-6 lg:space-y-0'>
      {/* Left Section */}
      <div className='flex flex-col items-center lg:items-start space-y-4'>
        <h2 className='text-red-600 font-bold'>SoundDZign</h2>
        <div className='flex space-x-4'>
          <a href=''>
            <img src={fb} alt='Facebook'></img>
          </a>
          <a href=''>
            <img src={twitter} alt='Twitter'></img>
          </a>
          <a href=''>
            <img src={insta} alt='Instagram'></img>
          </a>
        </div>
      </div>
  
      {/* Center Section */}
      <div className='flex flex-col items-center space-y-4'>
        <h2 className='text-buttonColor font-alegreya non-italic font-bold text-lg'>
          Quick Links
        </h2>
        <ul>
          <li>
            <a
              href='#'
              className='font-alegreya non-italic font-bold text-base mb-0 pb-0 hover:underline'
            >
              Join Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-alegreya non-italic font-bold text-base mt-0 pt-0 hover:underline'
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
  
      {/* Right Section */}
      <div className='flex flex-col items-center lg:items-end space-y-4'>
        <h2 className='text-buttonColor font-alegreya non-italic font-bold text-lg'>
          Contact Us
        </h2>
        <ul>
          <li>
            <a
              href='#'
              className='font-alegreya non-italic font-bold text-base mt-2 hover:underline'
            >
              0000000
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  

  );
}

export default Footer;
{
  /* <footer className='bg-black'>
<div className='container mx-auto flex justify-between items-center '>
  <div className='pt-20 pb-20 pr-60 pl-60 flex  '>
    <a className='text-lg font-semibold text-white' href='#'>
      Sound<span className='text-buttonColor font-extrabold'>DZign</span>
    </a>

    <div className='flex space-x-4 mt-6'>
        <a href=''>
          <img src={fb}></img>
        </a>
        <a href=''>
          <img src={twitter}></img>
        </a>
        <a href=''>
          <img src={insta}></img>
        </a>
    </div>

    <div className='flex flex-col'>
          <h3 className='text-buttonColor font-alegreya non-italic font-bold text-lg'>Quick Links</h3>
          <ul className='text-white '>
            <li className='hover:underline'>
              <a href=''>Blog</a>
            </li>
            <li className='hover:underline'>
              <a href=''>Pravacy Policy</a>
            </li>
          </ul>
    </div>
    <div className=''>
    <h3 className='text-buttonColor font-alegreya non-italic font-bold text-lg'>Contact Us</h3>
          <ul className='text-white'>
            <li className='hover:underline'>
              <a href=''>00000000</a>
            </li>
            <li className='hover:underline'>
              <a href=''>gmail@gmail.com</a>
            </li>
          </ul>
    </div>
  </div>
</div>
</footer> */
}
