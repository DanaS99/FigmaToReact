import React from 'react';
import Navbar from '../Navbar/Navbar';

function FirstHeader() {
  return (
    <header className="bg-[url('/src/assets/HeaderImage1.png')] bg-cover bg-center h-screen " id='about'>
      <div className='relative h-full max-w-screen-lg mx-auto'>
        <Navbar /> 
        <div className='absolute bottom-0 right-0 max-w-md bg-headerbgbox border-t-4 border-r-4 border-b-0 border-l-4 border-white border-solid backdrop-blur-xl rounded-t-3xl pt-12 pb-12 pl-6 pr-6 z-[300] md:w-96  md:pl-10 md:pr-10 sm:mr-11 xs:mr-11 xxs:mr-9 ml-9'>
          <p className='text-sm font-extrabold text-white sm:text-base'>
            Sound Design Master Class
          </p>
          <span className='block w-12 h-1 my-1 bg-buttonColor'></span>
          <h2 className='pt-2 pb-5 text-xl font-bold leading-snug text-white sm:text-2xl md:text-4xl font-alegreya'>
            Learn the Art of Sound Design
          </h2>
          <button
            className='p-2 text-sm text-white bg-buttonColor sm:text-base rounded-xl'
          >
            Demo Lesson
          </button>
        </div>
      </div>
    </header>
  );
}

export default FirstHeader;


