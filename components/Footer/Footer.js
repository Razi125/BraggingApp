import React, { useState } from 'react'
import InputBtn from '../common/InputBtn'
import FooterBttom from './FooterBttom'

const Footer = () => {
    const [active, setActive] = useState(1)
    return (
        <div className='bg-[#111827] rounded-t-2xl '>
            <div className='mx-auto container '>
                <div className='flex flex-col xl:flex-row justify-between items-center'>
                    {/** First */}
                    <div className='flex flex-col items-center md:items-start text-center md:text-left md:justify-start mb-10'>
                        <div>
                            <img className='pt-12 ' src='./images/logo.svg' alt='' />
                        </div>
                        <div >
                            <p className='max-w-[82px] text-[#FFFFFF] leading-[135%] text-lg not-italic font-bold urbanist-medium py-[14px]'>Blumstein</p>
                        </div>
                        <div>
                            <p className='max-w-[380px] text-[#9CA3AF] leading-[135%] text-sm not-italic font-medium urbanist-medium '>Whether it be a rental or sale, co-op, condo, townhouse or new development site Meris and Kenny have the knowledge, connections and expertise to make deals happen.</p>
                        </div>
                    </div>

                    {/** Second */}
                    <div className='flex flex-row space-x-5 md:space-x-[121px]'>
                        <div className='pt-[80px] space-y-[18px]'>
                            <div onClick={() => setActive(1)}>
                                <p className={active === 1 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Watch & Learn</p>
                            </div>
                            <div onClick={() => setActive(2)}>
                                <p className={active === 2 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Bragging Rights</p>
                            </div>
                            <div onClick={() => setActive(3)}>
                                <p className={active === 3 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Trustimonials</p>
                            </div>
                        </div>

                        <div className='pt-[80px] space-y-[18px]'>
                            <div onClick={() => setActive(4)}>
                                <p className={active === 4 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Read & Learn</p>
                            </div>
                            <div onClick={() => setActive(5)}>
                                <p className={active === 5 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Our Current Listings</p>
                            </div>
                            <div onClick={() => setActive(6)}>
                                <p className={active === 6 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>See us in Action</p>
                            </div>
                        </div>

                        <div className='pt-[80px] space-y-[18px]'>
                            <div onClick={() => setActive(7)}>
                                <p className={active === 7 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold  -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Our Team</p>
                            </div>
                            <div onClick={() => setActive(8)}>
                                <p className={active === 8 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Press</p>
                            </div>
                            <div onClick={() => setActive(9)}>
                                <p className={active === 9 ? 'max-w-[201.33px] text-[#FFFFFF] font-bold -tracking-[0.02em] border-b-[#FFE600] border-b-2 leading-[135%] text-base not-italic  urbanist-medium' : 'max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium'}>Contact us</p>
                            </div>
                        </div>
                    </div>

                    {/** Third Component */}
                    <div className='pt-[80px] '>
                        <div >
                            <p className='max-w-[400px] text-center md:text-left text-[#FFFFFF]  leading-5 text-lg not-italic font-bold urbanist-medium  pb-[26px]'>Stay Updated with Team Blumstein</p>
                        </div>
                        <div>
                            <InputBtn />
                        </div>
                    </div>
                </div>
            </div>

            {/** Footer Bottom */}
            <div>
                <FooterBttom />
            </div>

        </div>
    )
}

export default Footer
