import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='bg-[#FFFFFF] top-0 bg-fixed lg:block hidden'>
                <div className='mx-auto container flex justify-between items-center mb-[76px]'>
                    <div className='pt-3'>
                        <img src='./images/Blumstein-logo.svg' alt='Blumstein Logo' />
                    </div>

                    <div className='flex justify-between space-x-[36px] items-center'>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Watch & Learn</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Read & Learn</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Our Team</Link>
                        </div>
                        <div className='text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold border-b-[#FFE600] border-b-2 urbanist-bold'>
                            <Link href="/">Bragging Rights</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Our Current Listings</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Press</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Trustimonials</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">See us in Action</Link>
                        </div>
                        <div className='text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'>
                            <Link href="/">Contact us</Link>
                        </div>
                    </div>
                </div>



                <div className='mx-auto container flex flex-col justify-start items-start pl-[10px] pb-12'>
                    <div className='text-[#1F2937] -tracking-[0.02em] leading-4 text-base not-italic font-medium urbanist-medium pb-3'>
                    Showing<span className='text-[#FFE600]'>08 Awards</span> 
                    </div>
                    <div className='text-[#1F2937] -tracking-[0.03em] leading-[110%] text-[40px] not-italic font-bold  urbanist-bold'>
                    Bragging Rights
                    </div>

                </div>
            </div>

                            {/** Mobile and Tablets  */}
                            <div className=' w-full inline-block lg:hidden bg-[#FFFFFF] '>
                <div className='mx-auto container flex justify-between items-center  pt-[22.89px] pb-6'>
                    
                    <div className='pt-3'>
                        <img src='./images/Blumstein-logo.svg' alt='Blumstein Logo' />
                    </div>

                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='hamburgar inline-block p-4 cursor-pointer xl:hidden'>
                                <div className='line h-0.5 w-6 my-1 bg-black'></div>
                                <div className='line h-0.5 w-6 my-1 bg-black'></div>
                                <div className='line h-0.5 w-6 my-1 bg-black'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    </>
  )
}

export default Header
