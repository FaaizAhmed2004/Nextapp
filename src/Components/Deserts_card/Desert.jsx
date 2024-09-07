import React from 'react'
import Image from 'next/image'

const Desert = () => {
  return (
    <div className=' w-full'>
       <h2 className='text-center mt-14 text-2xl'>Hot Desert</h2>
    <div className=' h-60 flex mt-16 w-full' >
        <div className='h-60 w-64 ml-28'>
<img className='h-60 w-72 ' src='strawberryShake.jpg' alt="" />
        </div>
        <div className=' h-60 w-72 ml-36'>
          <img className='h-60 w-72' src="/gulab jamiun.jpg" alt="" />
        </div>
        <div className=' h-60 w-72 ml-44'>
          <img  className='h-60 w-72'src="/chocolate tiramisu.jpg" alt="" />
        </div>
    </div> 
    </div>
  )
}

export default Desert