import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {

    const [active, setActive] = useState('/watch')

    const data = [
        {
            name: 'Watch & Learn',
            link: '/watch'
        },
        {
            name: 'Read & Learn',
            link: '/read'
        },
        {
            name: 'Our Team',
            link: '/watch2'

        },
        {
            name: 'Bragging Rights',
            link: '/watch3'

        },
        {
            name: 'Our Current Listings',
            link: '/watch4'

        },
        {
            name: 'Press',
            link: '/watch5'

        },
        {
            name: 'Trustimonials',
            link: '/watch0'

        },
        {
            name: 'See us in Action',
            link: '/watch6'

        },
        {
            name: 'Contact us',
            link: '/watch7'

        },
    ]

    return (
        <>
            <div className='bg-[#FFFFFF] top-0 bg-fixed xl:block hidden'>
                <div className='mx-auto container flex justify-between items-center mb-[76px]'>
                    <div className='pt-3'>
                        <img src='./images/Blumstein-logo.svg' alt='Blumstein Logo' />
                    </div>
                    <div className='flex justify-between space-x-[36px] items-center'>
                        {
                            data?.map((item, index) => (
                                <div key={index} onClick={() => {
                                    setActive(item.link)

                                }}
                                    className={`-tracking-[0.02em] leading-[135%] text-base not-italic urbanist-medium h-[20px] hover:border-b-[#FFE600]  hover:text-[#1F2937] ${active == item.link ? "text-[#1F2937]  border-b-2 border-b-[#FFE600]" : " text-[#4B5563]"}`}>
                                    <Link href={''}>{item.name}</Link>
                                </div>
                            ))
                        }
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
