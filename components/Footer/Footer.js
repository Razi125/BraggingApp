import React from 'react'
import InputBtn from '../common/InputBtn'
import FooterBttom from './FooterBttom'

const Footer = () => {
    return (
        <div className='bg-[#111827] rounded-2xl'>
            <div className='mx-auto container '>
                <div className='flex flex-col xl:flex-row justify-between items-center'>
                     {/** First */}
                        <div className='flex flex-col mb-10'>
                            <div>
                            <img className='pt-12 ' src='./images/logo.svg' alt=''/> 
                            </div>
                            <div>
                            <p  className='max-w-[82px] text-[#FFFFFF] leading-[135%] text-lg not-italic font-bold urbanist-medium py-[14px]'>Blumstein</p>
                            </div>
                            <div>
                                <p className='max-w-[380px] text-[#9CA3AF] leading-[135%] text-sm not-italic font-medium urbanist-medium '>Whether it be a rental or sale, co-op, condo, townhouse or new development site Meris and Kenny have the knowledge, connections and expertise to make deals happen.</p>
                            </div>
                        </div>
        
                        {/** Second */}
                        <div className='flex flex-row space-x-[121px]'>
                            <div className='pt-[80px] space-y-[18px]'>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Watch & Learn</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Bragging Rights</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Trustimonials</p>
                            </div>
                            </div>

                            <div className='pt-[80px] space-y-[18px]'>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Read & Learn</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Our Current Listings</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>See us in Action</p>
                            </div>
                            </div>

                            <div className='pt-[80px] space-y-[18px]'>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Our Team</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Press</p>
                            </div>
                            <div>
                                <p className='max-w-[201.33px] text-[#9CA3AF] -tracking-[0.02em] leading-[135%] text-base not-italic font-medium urbanist-medium '>Contact us</p>
                            </div>
                            </div>
                        </div>   
                       
                       {/** Third Component */}
                        <div className='pt-[80px] '>
                            <div >
                            <p className='max-w-[400px] text-[#FFFFFF]  leading-5 text-lg not-italic font-bold urbanist-medium  pb-[26px]'>Stay Updated with Team Blumstein</p>
                            </div>
                            <div>
                            <InputBtn/>
                            </div>
                        </div> 
                </div>
            </div>

            {/** Footer Bottom */}
            <div>
                <FooterBttom/>
            </div>

        </div>
    )
}

export default Footer
