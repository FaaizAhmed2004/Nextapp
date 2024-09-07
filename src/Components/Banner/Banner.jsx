import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='flex'>
        <img className=' h-96 ml-16 mt-11 rounded-full ' src="/fruit_mix.jpg" alt="" />
        <div className=''>
            <h1 className='mt-14 ml-40 font-black text-5xl text-green-400 pt-10'>Fresh,Healthy,Organic<br></br><span className='text-black'>
                Delicious Fruits</span></h1>
                <p className='text-center ml-32 text-2xl mt-9'>“Eating healthy food fills your body with energy and nutrients.<br></br>
                 Imagine your cells smiling back at you and saying: 'Thank you! </p>
                 <button className='border-solid ml-80 w-72 bg-green-400 h-10 '>Lern More</button>
        </div>
    </div>
  )
}

export default Banner