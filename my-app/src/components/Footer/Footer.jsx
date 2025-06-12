import React from 'react';
import { fb, insta, twitter } from '../../assets';

function Footer() {
  return (
    <footer className='px-5 py-20 text-white bg-black sm:px-10 md:px-20 lg:px-28 '>
    <div className='container flex flex-col items-center justify-between px-4 mx-auto space-y-6 lg:flex-row lg:items-start lg:px-20 xl:px-32 lg:space-y-0'>
      {/* Left Section */}
      <div className='flex flex-col items-center space-y-4 lg:items-start'>
        <h2 className='font-bold text-red-600'>SoundDZign</h2>
        <div className='flex space-x-4'>
          <button>
            <img src={fb} alt='Facebook'></img>
          </button>
          <button>
            <img src={twitter} alt='Twitter'></img>
          </button>
          <button>
            <img src={insta} alt='Instagram'></img>
          </button>
        </div>
      </div>
  
      {/* Center Section */}
      <div className='flex flex-col items-center space-y-4'>
        <h2 className='text-lg font-bold text-buttonColor font-alegreya non-italic'>
          Quick Links
        </h2>
        <ul>
          <li>
            <a
              href='#'
              className='pb-0 mb-0 text-base font-bold font-alegreya non-italic hover:underline'
            >
              Join Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='pt-0 mt-0 text-base font-bold font-alegreya non-italic hover:underline'
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
  
      {/* Right Section */}
      <div className='flex flex-col items-center space-y-4 lg:items-end'>
        <h2 className='text-lg font-bold text-buttonColor font-alegreya non-italic'>
          Contact Us
        </h2>
        <ul>
          <li>
            <a
              href='#'
              className='mt-2 text-base font-bold font-alegreya non-italic hover:underline'
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
<div className='container flex items-center justify-between mx-auto '>
  <div className='flex pt-20 pb-20 pr-60 pl-60 '>
    <a className='text-lg font-semibold text-white' href='#'>
      Sound<span className='font-extrabold text-buttonColor'>DZign</span>
    </a>

    <div className='flex mt-6 space-x-4'>
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
          <h3 className='text-lg font-bold text-buttonColor font-alegreya non-italic'>Quick Links</h3>
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
    <h3 className='text-lg font-bold text-buttonColor font-alegreya non-italic'>Contact Us</h3>
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
