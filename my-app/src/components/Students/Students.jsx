import React from 'react';
import { Student } from '../../assets';


function Students() {
  return (
    <section className='bg-darkgrey text-white py-20 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60' id='students'>
      <div className='relative'>
        <h2 className=' text-2xl sm:text-3xl md:text-4xl font-black leading-10 sm:leading-9  text-white '>
          What our Students Say?
        </h2>
        <span class='block h-1 w-20 bg-yellowLine my-1'></span>
        <div className='flex justify-center xs:justify-center sm:justify-start items-center'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 xl:gap-36 mt-6'>
    <div className=' rounded-xl flex flex-col relative w-full sm:w-64 items-center sm:items-start justify-center sm:justify-start'>
      <img src={Student} className='rounded-xl w-32 h-28'></img>
      <div className='text-center sm:text-left'>
        <div className='font-alegreya non-italic font-medium text-xl leading-7 mt-4'>Peter</div>
        <div className='font-alegreya non-italic font-medium text-sm pt-1 pb-1 pr-0 pl-0 leading-7 opacity-70 uppercase'>Google</div>
        <div className='text-base leading-4 font-normal font-alegreya'>Lorem Ipsum</div>
      </div>
    </div>
    <div className=' rounded-xl flex flex-col relative w-full sm:w-64 items-center sm:items-start justify-center sm:justify-start'>
      <img src={Student} className='rounded-xl w-32 h-28'></img>
      <div className='text-center sm:text-left'>
        <div className='font-alegreya non-italic font-medium text-xl leading-7 mt-4'>Peter</div>
        <div className='font-alegreya non-italic font-medium text-sm pt-1 pb-1 pr-0 pl-0 leading-7 opacity-70 uppercase'>Google</div>
        <div className='text-base leading-4 font-normal font-alegreya'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
      </div>
    </div>
    <div className=' rounded-xl flex flex-col relative w-full sm:w-64 items-center sm:items-start justify-center sm:justify-start'>
      <img src={Student} className='rounded-xl w-32 h-28'></img>
      <div className='text-center sm:text-left'>
        <div className='font-alegreya non-italic font-medium text-xl leading-7 mt-4'>Peter</div>
        <div className='font-alegreya non-italic font-medium text-sm pt-1 pb-1 pr-0 pl-0 leading-7 opacity-70 uppercase'>Google</div>
        <div className='text-base leading-4 font-normal font-alegreya'>Lorem Ipsum</div>
      </div>
    </div>
  </div>
</div>



      </div>
    </section>
  );
}

export default Students;


