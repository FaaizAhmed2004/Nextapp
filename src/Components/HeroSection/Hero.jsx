import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='absolute '>
        <h1 className='mt-32 ml-60 text-6xl font-black py-11'>We Deliver Best<br></br> <span className='
         text-green-400  float-left '> Organic Food </span></h1>
         <p className='ml-64 pt-0 text-xl'><br></br>We have Vast range of Organic foods</p>
      </div>
      <div className=' mt-24 mr-12 float-right flex  '>
      <img  className='rounded-full'src="/salad.jpg"
       width={500}
       alt='salad' />
      </div>
      <div>
        <button className='mt-96  border-solid ml-72 bg-green-400 h-10 *
        w-40	'>Explore Now</button>
      </div>
    </div>
  )
} 

export default Hero