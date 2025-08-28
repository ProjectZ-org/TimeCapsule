import React from 'react'

function CapsuleCard({
    children,
    className = '',
    ...props
}) {
  return (
    <div className={`flex flex-wrap my-8 justify-center h-200 w-full content-center ${className}`} {...props}>
        <div className='flex flex-row border-[15px] md:border-[20px] rounded-full justify-center align-center dark:border-white border-black md:h-70 h-40 w-100 md:w-200 '>
        <div className='w-[50%]'>
          {children}
        </div>
        <div className='w-[50%] dark:bg-white border-none bg-black rounded-r-[50px] md:rounded-r-[80px] border-r-2
          border-black'></div>
    </div>
      </div>
  )
}   

export default CapsuleCard