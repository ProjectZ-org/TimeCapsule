import React from 'react'
import Logo from '../Logo'

function Header() {
  return (
    <div className='flex flex-wrap md:justify-around justify-evenly dark:border-b-neutral-700 border-b border-b-gray-100'>
      <div className='w-[20%] flex items-center'> 
        <Logo className='md:h-24 md:w-32 h-14 w-18' />
      </div>
      <div className=' h-full w-[80%]'>
        <div className='flex flex-col items-center py-4  pr-[25%]'>
        <h1 className='md:text-3xl text-red-500 font-bold text-center text-2xl'>Time Capsule</h1>
        <p className='text-red-500'>"This is a Header<i class="fa fa-header" aria-hidden="true"></i>"</p>
      </div>
      </div>
    </div>
  )
}

export default Header