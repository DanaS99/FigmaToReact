import React from 'react';
import { RedRect, Grad, Music } from '../../assets';

function Info() {
  return (
<section className='bg-darkgrey text-white' id='info'>
  <div className='relative'>
    <div className='pt-10 pb-10 xxs:pt-10 xxs:pb-10 xs:pt-20 xs:pb-20 sm:pt-20 sm:pb-20 lg:pt-20 lg:pb-20 xxs:pr-10 xxs:pl-10 xs:pr-20 xs:pl-20 sm:pr-20 sm:pl-20 lg:pr-60 lg:pl-60 flex flex-col xxs:flex-col xs:flex-col sm:flex-row lg:flex-row text-center w-full justify-center gap-8 xxs:gap-4 xs:gap-8 sm:gap-32 md:gap-52 lg:gap-80'>
      <div className='mt-8 flex flex-col items-center'>
        <img src={Grad} alt='Graduate Icon'></img>
        <div className='font-alegreya text-2xl font-extrabold'>2300+</div>
        <div className='text-xl font-bold'>Students</div>
      </div>
      <div className='mt-8 flex flex-col items-center'>
        <img src={Music} alt='Video Icon'></img>
        <div className='font-alegreya text-2xl font-extrabold'>2300+</div>
        <div className='text-xl font-bold'>Video</div>
      </div>
    </div>
    <img src={RedRect} className='absolute xxs:left-20 xs:left-32 sm:left-32 md:left-44 lg:left-64 top-5 xxs:top-10 xs:top-16
     sm:top-20 lg:top-20' alt='Red Rectangle'></img>
  </div>
</section>


  );
}

export default Info;
