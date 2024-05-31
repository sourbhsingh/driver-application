import React from 'react';
import { DesktopNavigationProps } from './Interface';

function DesktopNavigation({ className }: DesktopNavigationProps) {
  return (
    <div className={`bg-white w-64 p-4 ${className}`}>
      <div className='flex flex-col items-center mb-6'>
        <img
          className='rounded-full w-16 h-16'
          src='https://via.placeholder.com/150'
          alt='Profile'
        />
        <h2 className='mt-2 text-xl font-semibold'>Aduragbemi Oroja</h2>
        <p className='text-gray-500'>CEO</p>
      </div>
      <nav>
        <ul>
          <li className='mb-4'>
            <a
              href='#'
              className='flex items-center text-gray-600 hover:text-black'
            >
              <span className='material-icons'>home</span>
              <span className='ml-2'>Dashboard</span>
            </a>
          </li>
          <li className='mb-4'>
            <a
              href='#'
              className='flex items-center text-gray-600 hover:text-black'
            >
              <span className='material-icons'>people</span>
              <span className='ml-2'>Customers</span>
            </a>
          </li>
          <li className='mb-4'>
            <a
              href='#'
              className='flex items-center text-gray-600 hover:text-black'
            >
              <span className='material-icons'>build</span>
              <span className='ml-2'>Solutions</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center text-gray-600 hover:text-black'
            >
              <span className='material-icons'>settings</span>
              <span className='ml-2'>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className='mt-auto'>
        <a
          href='#'
          className='flex items-center text-gray-600 hover:text-black'
        >
          <span className='material-icons'>exit_to_app</span>
          <span className='ml-2'>Exit</span>
        </a>
      </div>
    </div>
  );
}

export default DesktopNavigation;
