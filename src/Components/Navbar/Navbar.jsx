import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='sm '>
    <div className='flex min-h-16 w-full justify-center absolute items-center gap-10 text-xl bg-transparent'>
        <ul className='text-black flex justify-center  items-center gap-10 text-xl cursor-pointer'>
            <div className='float-right'>
              <img className='h-20 ' src='/diet.png'/>
            </div>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
        <button className='mx-3.5 h-14 w-28 bg-green-400 text-black border-solid border-emerald-600   rounded-md'>Get Started</button>
    </div>
    </div>
  )
}

export default Navbar