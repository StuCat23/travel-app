import React from 'react';
import logo from '../assets/react.svg';

function Navbar() {
  return (
   <nav className='bg-gradient-to-r from-gray-800 to-black p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={ logo } alt='logo' className='h-8 w-8 mr-2' />
                <span className='text-white text-xl font-bold'>The Travel App</span>
            </div>
            <div className='flex space-x-4'>
                <a href='#' className='text-white hover:text-gray-400'>Home</a>
                <a href='#' className='text-white hover:text-gray-400'>About</a>
                <a href='#' className='text-white hover:text-gray-400'>Contact</a>
            </div>
        </div>
   </nav>
  );
};

export default Navbar;