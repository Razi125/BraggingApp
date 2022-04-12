import React,{useState} from 'react'
import Link from 'next/link'

const Header = () => {
    const [active ,  setActive] = useState(1)

  return (
    <>
    <div className='bg-[#FFFFFF] top-0 bg-fixed xl:block hidden'>
                <div className='mx-auto container flex justify-between items-center mb-[76px]'>
                    <div className='pt-3'>
                        <img src='./images/Blumstein-logo.svg' alt='Blumstein Logo' />
                    </div>

                    <div className='flex justify-between space-x-[36px] items-center'>
                        <div onClick={() => setActive(1)}
                              className = { active === 1 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"} >
                            <Link href="/">Watch & Learn</Link>
                        </div>
                        <div onClick={() => setActive(2)} className = { active === 2 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Read & Learn</Link>
                        </div>
                        <div onClick={() => setActive(3)} className = { active === 3 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Our Team</Link>
                        </div>
                        <div onClick={() => setActive(4)} className = { active === 4 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Bragging Rights</Link>
                        </div>
                        <div onClick={() => setActive(5)} className = { active === 5 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Our Current Listings</Link>
                        </div>
                        <div onClick={() => setActive(6)} className = { active === 6 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Press</Link>
                        </div>
                        <div onClick={() => setActive(7)} className = { active === 7 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">Trustimonials</Link>
                        </div>
                        <div onClick={() => setActive(8)} className = { active === 8 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
                            <Link href="/">See us in Action</Link>
                        </div>
                        <div onClick={() => setActive(9)} className = { active === 9 ? "text-[#1F2937] -tracking-[0.02em] leading-[135%] text-base not-italic font-bold focus:border-b-2 border-b-[#FFE600] border-b-2 urbanist-bold": "text-[#4B5563] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium"}>
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
                            <div className=' w-full inline-block xl:hidden bg-[#FFFFFF] '>
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
