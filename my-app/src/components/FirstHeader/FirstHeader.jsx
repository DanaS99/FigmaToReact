import React from 'react';
import Navbar from '../Navbar/Navbar';

function FirstHeader() {
  return (
    <header className="bg-[url('/src/assets/HeaderImage1.png')] bg-cover bg-center h-screen " id='about'>
      <div className='relative max-w-screen-lg mx-auto h-full'>
        <Navbar /> 
        <div className='absolute bottom-0 right-0 max-w-md bg-headerbgbox border-t-4 border-r-4 border-b-0 border-l-4 border-white border-solid backdrop-blur-xl rounded-t-3xl pt-12 pb-12 pl-6 pr-6 z-[300] md:w-96  md:pl-10 md:pr-10 sm:mr-11 xs:mr-11 xxs:mr-9 ml-9'>
          <p className='font-extrabold text-sm sm:text-base text-white'>
            Sound Design Master Class
          </p>
          <span className='block h-1 w-12 bg-buttonColor my-1'></span>
          <h2 className='text-xl sm:text-2xl md:text-4xl pt-2 font-bold text-white leading-snug font-alegreya pb-5'>
            Learn the Art of Sound Design
          </h2>
          <a
            href='#'
            className='bg-buttonColor p-2 text-sm sm:text-base rounded-xl text-white'
          >
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
}

export default FirstHeader;

// import React from 'react';
// import Navbar from '../Navbar/Navbar';

// function FirstHeader() {
//   return (
//     <header className="bg-[url('/src/assets/HeaderImage1.png')] bg-cover bg-center">
//       <div className='relative max-w-screen-lg mt-0 mb-0 mr-auto ml-auto min-h-screen'>
//         {/* <Navbar /> */}
//         <div className='absolute bottom-0 right-0 w-96 bg-headerbgbox border-t-4 border-r-4 border-b-0 border-l-4 border-white border-solid backdrop-blur-xl rounded-t-3xl pt-12 pb-12 pl-10 pr-10 z-[300]'>
//           <p className='font-extrabold text-base text-white '>
//             Sound Design Master Class
//           </p>
//           <span class='block h-1 w-12 bg-buttonColor my-1'></span>
//           <h2 className='text-4xl pt-2 font-bold text-white leading-snug font-alegreya pb-5'>
//             Learn the Art of Sound Design
//           </h2>
//           <a
//             href='#'
//             className='bg-buttonColor p-3 font-bold text-base rounded-xl text-white'
//           >
//             Demo Lesson
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default FirstHeader;
