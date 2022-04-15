import React from 'react'
import Link from 'next/link'
const FooterBttom = () => {
  return (
    <div className='mx-auto container pt-10'>
      <div className='xl:block hidden' style={{ border: '1px solid #262626'}}></div>
      <div className='flex flex-col xl:flex-row justify-between items-center '>

        <div className='flex justify-center xl:justify-start items-center xl:items-start py-[32px] order-2 xl:order-none'>
          <p className=' text-base mx-w-[276px] leading-[135%] text-[#D1D5DB] urbanist-medium opacity-[0.75] font-normal not-italic '>© 2021 Blumstein | All Rights Reserved</p>
        </div>

        <div className='flex gap-11 xl:gap-4 justify-center items-center pt-11 xl:py-[32px] order-1 xl:order-none'>
          <Link href='/'><img className='md:w-[20px] xl:w-[32px] cursor-pointer' src='./images/logo-instagram.svg' alt=''/></Link>
          <Link href='/'><img className='md:w-[20px] xl:w-[32px] cursor-pointer' src='./images/logo-facebook.svg' alt='' /></Link>
          <Link href='/'><img className='md:w-[20px] xl:w-[32px] cursor-pointer' src='./images/logo-youtube.svg' alt='' /></Link>
          <Link href='/'><img className='md:w-[20px] xl:w-[32px] cursor-pointer' src='./images/logo-twitter.svg' alt='' /></Link>
          <Link href='/'><img className='md:w-[20px] xl:w-[32px] cursor-pointer' src='./images/logo-tiktok.svg' alt='' /></Link>
        </div>
      </div>

    </div>
  )
}

export default FooterBttom