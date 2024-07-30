import React from 'react';
import { container } from '../../assets';

function Posts() {
  return (
    <section className='bg-reddish py-20 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60'>
      <div className='relative'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-black leading-8 sm:leading-9 md:leading-10 text-white'>
          Latest Posts
        </h2>
        <span className='block h-1 w-12 bg-yellowLine my-1'></span>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 xl:gap-36 mt-6'>
          <div className='bg-white rounded-xl flex flex-col relative overflow-hidden transition-all duration-400 ease-ease hover:scale-104'>
            <div className='absolute bg-white text-center rounded-xl w-16 px-3 py-0 right-2 top-2 font-alegreya non-italic font-bold text-sm'>
              DAW
            </div>
            <a href=''>
              <img className='w-full h-40 object-cover' src={container}></img>
            </a>
            <a href=''>
              <h3 className='pb-2 pt-2 text-center font-alegreya font-bold text-lg leading-6'>
                This is the heading of the post
              </h3>
            </a>
          </div>
          <div className='bg-white rounded-xl flex flex-col relative overflow-hidden transition-all duration-400 ease-ease hover:scale-104'>
            <div className='absolute bg-white text-center rounded-xl w-16 px-3 py-0 right-2 top-2 font-alegreya non-italic font-bold text-sm'>
              DAW
            </div>
            <a href=''>
              <img className='w-full h-40 object-cover' src={container}></img>
            </a>
            <a href=''>
              <h3 className='pb-2 pt-2 text-center font-alegreya font-bold text-lg leading-6'>
                This is the heading of the post
              </h3>
            </a>
          </div>
          <div className='bg-white rounded-xl flex flex-col relative overflow-hidden transition-all duration-400 ease-ease hover:scale-104'>
            <div className='absolute bg-white text-center rounded-xl w-16 px-3 py-0 right-2 top-2 font-alegreya non-italic font-bold text-sm'>
              DAW
            </div>
            <a href=''>
              <img className='w-full h-40 object-cover' src={container}></img>
            </a>
            <a href=''>
              <h3 className='pb-2 pt-2 text-center font-alegreya font-bold text-lg leading-6 '>
                This is the heading of the post
              </h3>
            </a>
          </div>
        </div>
        <div className='flex justify-center xxs:justify-end '>
          <a
            href=''
            className='bg-white rounded-xl w-32 xxs:w-20 xs:w-32 sm:w-32 md:w-32 lg:w-32  h-7 font-alegreya font-bold text-base mt-7 text-center py-1'
          >
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Posts;
