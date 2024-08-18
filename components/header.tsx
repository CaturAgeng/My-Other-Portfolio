'use client'

import Image from 'next/image';
import ReactTypingEffect from 'react-typing-effect';
import profile1 from '@/public/images/profile1.jpg';

const Header = () => {
  return (
    <header className="max-w-[1108px] mx-auto text-gray-400 p-4 sm:p-8 md:p-16 items-center justify-center flex flex-col bg-black">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl">
        Hello,{' '}
        <ReactTypingEffect
          text={["I'm Catur Ageng Pinaringan.", "I'm a Software Engineer.", "I'm a Frontend Developer."]}
          speed={200}
          eraseSpeed={50}
          typingDelay={200}
          eraseDelay={1000}
        />
      </h1>
      <p className="my-16 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Software Engineer.
      </p>
      <Image 
        src={profile1} 
        alt="Catur Ageng" 
        width={2000} 
        height={2000} 
        objectFit='cover'
        className='w-full grayscale filter transition duration-300 ease-in-out hover:filter-none'
      />
    </header>
  );
};

export default Header;
