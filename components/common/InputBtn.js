import React from 'react'

const InputBtn = () => {
    return (
        <div className='mx-auto container w-full flex flex-row justify-center items-center bg-[#374151] rounded-[6px]  '>
            <input
                type='text'
                className='montserrat-medium text-base leading-4 not-italic text-[#FFFFFF] bg-[#262626] w-[322px]  font-normal py-5 pl-5 '
                placeholder='Your Email'
            />
            <button className='bg-[#E68A00] text-base xl:w-[134px] text-[#FFFFFF] h-[60px] montserrat-medium  not-italic font-medium leading-4 rounded-[4px] py-5 px-7'>Subscribe</button>
        </div>
    )
}

export default InputBtn