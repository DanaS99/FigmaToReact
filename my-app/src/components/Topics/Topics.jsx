import React, { useState } from 'react';
import { YellowRect, container, container2 } from '../../assets';

function Topics() {
  const [currentImage, setcurrentImage] = useState(container);

  return (
    <section
      id='topics'
      className='bg-black text-white py-20 pl-6 sm:pl-10 md:pl-20 lg:pl-40 xl:pl-60 pr-6 sm:pr-10 md:pr-20 lg:pr-40 xl:pr-64'
    >
      <div className='relative'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-black leading-10 sm:leading-9  text-white'>
          What will you learn?
        </h2>
        <span className='block h-1 w-16 bg-buttonColor my-1'></span>
        <div className='flex flex-col lg:flex-row lg:justify-between text-center lg:text-left'>
          <ul className='list-none p-0 mb-4 lg:mb-0 lg:w-1/2'>
            <li
              className='font-alegreya font-normal text-xl mt-5 mb-5 relative flex items-center'
              onMouseEnter={() => setcurrentImage(container)}
            >
              <span className='w-2 h-2 bg-red-500 rounded-full inline-block mr-2'></span>
              This is a bullet
            </li>
            <li
              className='font-alegreya font-normal text-xl mt-5 mb-5 relative flex items-center'
              onMouseEnter={() => setcurrentImage(container2)}
            >
              <span className='w-2 h-2 bg-red-500 rounded-full inline-block mr-2'></span>
              This is a bullet
            </li>
            <li
              className='font-alegreya font-normal text-xl mt-5 mb-5 relative flex items-center'
              onMouseEnter={() => setcurrentImage(container)}
            >
              <span className='w-2 h-2 bg-red-500 rounded-full inline-block mr-2'></span>
              This is a bullet
            </li>
            <li
              className='font-alegreya font-normal text-xl mt-5 mb-5 relative flex items-center'
              onMouseEnter={() => setcurrentImage(container2)}
            >
              <span className='w-2 h-2 bg-red-500 rounded-full inline-block mr-2'></span>
              This is a bullet
            </li>
            <li
              className='font-alegreya font-normal text-xl mt-5 mb-5 relative flex items-center'
              onMouseEnter={() => setcurrentImage(container)}
            >
              <span className='w-2 h-2 bg-red-500 rounded-full inline-block mr-2'></span>
              This is a bullet
            </li>
          </ul>
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <img
              src={currentImage}
              className='max-w-full h-auto object-cover hidden sm:block'
              alt='Current Image'
            />
          </div>
        </div>
        <img
          src={YellowRect}
          className='absolute right-5 xs:right-16 sm:right-20px md:right-45px lg:right-24px'
          alt='Yellow Rectangle'
        ></img>
      </div>
    </section>
  );
}

export default Topics;

{
  /* <section id='topics' className='bg-black text-white pt-20 pb-20 pr-60 pl-60'>
      <div className='relative'>
        <h2 className=' text-4xl font-black leading-10'>
          What will you learn?
        </h2>
        <span class='block h-1 w-12 bg-buttonColor my-1'></span>
        <div className='flex justify-between text-center'>
          <ul className='mr-0 p-0'>
            <li className="font-alegreya font-normal text-xl mt-5 mb-5 ml-0 mr-0 relative " onMouseEnter={() => setcurrentImage(container)}><span class="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>This is a bullet</li>
            <li className="font-alegreya font-normal text-xl mt-5 mb-5 ml-0 mr-0 relative" onMouseEnter={() => setcurrentImage(container2)}> <span class="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span> This is a bullet</li>
            <li className="font-alegreya font-normal text-xl mt-5 mb-5 ml-0 mr-0 relative" onMouseEnter={() => setcurrentImage(container)}> <span class="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span> This is a bullet</li>
            <li className="font-alegreya font-normal text-xl mt-5 mb-5 ml-0 mr-0 relative" onMouseEnter={() => setcurrentImage(container2)}> <span class="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span> This is a bullet</li>
            <li className="font-alegreya font-normal text-xl mt-5 mb-5 ml-0 mr-0 relative" onMouseEnter={() => setcurrentImage(container)}> <span class="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span> This is a bullet</li>
          </ul>

          <div className='w-2/4 object-cover'>
              <img src={currentImage} ></img>
          </div>
        </div>
        <img src={YellowRect} className='absolute  right-24px'></img>
      </div>
    </section>   */
}

//   <img src={YellowRect} className='absolute right-24px'></img>
