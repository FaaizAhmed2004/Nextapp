import React from 'react'
import Image from 'next/image'

const Choose = () => {
  return (
    <div>
        <h1 className='text-center text-3xl font-extrabold mt-11'>Why Choose Us?</h1>
        <div className='h-72 w-full'>
          <div className='flex'>
            <div className=''>
                <img  className = 'h-32 ml-52'src="/diet.png"  alt="" />
                <h2 className='font-bold ml-52 text-green-400'>Fresh Food</h2>
                <p className='ml-52'>We Provide you the <br></br>best fresh food <br></br>in the entire area</p>

            </div>
            <div className=''>
              <img className='h-32 ml-64 mt-3'  src='/restaurant.png'/>
              <h2 className='font-bold ml-64 text-green-400'>Best Deal</h2>
              <p className='ml-64'>We Provide you the <br></br>best Deal Offer <br></br>in the entire area</p>
            </div>
            <div className=''>
              <img className='h-32 ml-72 mt-3'  src='/cooking.png'/>
              <h2 className='font-bold ml-72 text-green-400'>Best Deal</h2>
              <p className='ml-72'>We Provide you the <br></br>best Deal Offer <br></br>in the entire area</p>
            </div>

            </div>

        </div>

    </div>
      )
}

export default Choose