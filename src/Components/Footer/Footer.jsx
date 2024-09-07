import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex'>
        
        <div className='h-64 w-full bg-green-400 flex pl-96 pt-20 gap-11 text-black mt-16  shadow-black  rounded-md'>
        <img  className='h-20'src='/cooking.png'/>
            <ul>
                <h1 className='font-bold'>Services</h1>
                <li>Home Delivery</li>
                <li>Orders</li>
                <li>Cake</li>
                <li>Online Paymenty</li>
            </ul>
            <div className=''>
            <h1 className='font-bold'>Company</h1>
            <ul>
                <li>FoodPanda</li>
                <li>Bykea</li>
                <li>EasyPaisa</li>
                <li>NayaPay</li>
            </ul>
        </div>
        <div className=''>
            <ul>
                <h1 className='font-bold'>Our Menu</h1>
                <li>BBQ</li>
                <li>Fish</li>
                <li>Fresh Vege</li>
                <li>Desert</li>
            </ul>
        </div>
        <div className=''>
            <ul>
                <h1 className='font-bold'>Contact Us</h1>
                <li>+92 111 1111 1</li>
                <li>www.facebook/organicfood.com</li>
                <li>Instagram</li>
                <li>Linkdln</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer