import React from 'react'
const FooterBttom = () => {
  return (
    <div className='mx-auto container pt-10'>
      <div style={{ border: '1px solid #262626' }}></div>
      <div className='flex flex-col md:flex-row justify-between items-center '>
        
        <div className='flex justify-center xl:justify-start items-center xl:items-start py-[32px]'>
        <p className=' text-base mx-w-[276px] leading-[135%] text-[#D1D5DB] urbanist-medium opacity-[0.75] font-normal not-italic '>© 2021 Blumstein | All Rights Reserved</p>
      </div>

      <div className='flex gap-4 justify-center items-center py-[32px]'>
          <img className='md:w-[20px] xl:w-[32px] ' src='./images/logo-instagram.svg' alt='' />
          <img className='md:w-[20px] xl:w-[32px]' src='./images/logo-facebook.svg' alt='' />
          <img className='md:w-[20px] xl:w-[32px]' src='./images/logo-youtube.svg' alt='' />
          <img className='md:w-[20px] xl:w-[32px]' src='./images/logo-twitter.svg' alt='' />
          <img className='md:w-[20px] xl:w-[32px]' src='./images/logo-tiktok.svg' alt='' />
        </div>
      </div>
     
    </div>
  )
}

export default FooterBttom