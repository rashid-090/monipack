import React from 'react'
import { Link } from 'react-router-dom'

const Weoffers = () => {
  return (
    <div className='w-11/12 mx-auto py-20'>
      <h2 className='text-3xl text-center font-semibold'>What We Offer</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-0 mt-10'>
            <div className='relative overflow-hidden '>
                <img className='aspect-square hover:scale-105 duration-200 object-cover ' src='https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg' alt="" />
                <Link to={'/'} className='bg-[#0000003f] hover:bg-main-bg duration-200 backdrop-blur-xs text-center font-medium  rounded-full p-3 text-white absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]'>Paper Items</Link>
            </div>
            <div className='relative overflow-hidden '>
                <img className='aspect-square hover:scale-105 duration-200 object-cover ' src='https://cdn.cssauthor.com/wp-content/uploads/2025/08/Round-Food-Tray-Mockup-PSD.jpg' alt="" />
                <Link to={'/'} className='bg-[#0000003f] hover:bg-main-bg duration-200 backdrop-blur-xs text-center font-medium  rounded-full p-3 text-white absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]'>Plastic Items</Link>
            </div>
            <div className='relative overflow-hidden '>
                <img className='aspect-square hover:scale-105 duration-200 object-cover ' src='https://thecustomizeboxes.com/assets/products-gallery/wholesale-coffee-take-away-boxes.webp' alt="" />
                <Link to={'/'} className='bg-[#0000003f] hover:bg-main-bg duration-200 backdrop-blur-xs text-center font-medium  rounded-full p-3 text-white absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]'>Aluminium Items</Link>
            </div>
            <div className='relative overflow-hidden '>
                <img className='aspect-square hover:scale-105 duration-200 object-cover ' src='https://cdn.cssauthor.com/wp-content/uploads/2022/08/Free-Open-Chips-Box-Mockup1.jpg' alt="" />
                <Link to={'/'} className='bg-[#0000003f] hover:bg-main-bg duration-200 backdrop-blur-xs text-center font-medium  rounded-full p-3 text-white absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]'>Foam Items</Link>
            </div>
      </div>
    </div>
  )
}

export default Weoffers
