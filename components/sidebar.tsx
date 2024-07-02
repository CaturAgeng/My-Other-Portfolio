'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser, faListCheck, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setIsOpen(false);
      } 
    };

    window.addEventListener('resize', handleResize);

    // Set initial state based on window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Tombol Toggle untuk Mobile dan Tablet */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 xl:hidden text-white bg-stone-800 p-2 rounded"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        Menu
      </button>

      {/* Overlay untuk Background ketika Sidebar terbuka */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <nav className={`fixed h-full flex flex-col items-center w-32 bg-stone-800 text-center text-white transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <Image src={logo} alt="Avatar" width={130} height={125} className="grayscale mt-8" />
        <a href="#" className="block w-full py-8 px-8 text-white bg-black hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faHouseChimney} className='px-3' />
          <p>HOME</p>
        </a>
        <a href="#about" className="block w-full py-8 px-8 text-white hover:bg-black">
          <FontAwesomeIcon icon={faUser} className='px-3' />
          <p>ABOUT</p>
        </a>
        <a href="#project" className="block w-full py-8 px-8 text-white hover:bg-black">
          <FontAwesomeIcon icon={faListCheck} className='px-3' />
          <p>PROJECT</p>
        </a>
        <a href="#contact" className="block w-full py-8 px-8 text-white hover:bg-black">
          <FontAwesomeIcon icon={faEnvelope} className='px-3' />
          <p>CONTACT</p>
        </a>
      </nav>
    </>
  );
};

export default Sidebar;




