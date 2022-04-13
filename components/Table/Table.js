import React from 'react'

const Table = () => {
    const data = [
        {
            no: '01',
            name: 'Chelsea Sales Team of the Year',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            no: '02',
            name: 'Corcorans Top 25',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            no: '03',
            name: 'Presidents Council',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            no: '04',
            name: 'NRT Top 1% Broker in the USA',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            no: '05',
            name: 'NRT Top 100 Teams',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            no: '06',
            name: 'Wall Street Journal Real Estate Top 100',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            no: '07',
            name: 'Village Team of the Year',
            year: 2019,
            image: './images/oscar.svg'

        },
        {
            no: '08',
            name: 'Certified Negotiation Expert',
            year: 2021,
            image: './images/oscar.svg'

        },
    ]
    return (
        <div className="mx-auto px-6 container flex flex-col  mb-24">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr >
                                    <th scope="col" className='text-[#1F2937] leading-[135%] text-base not-italic font-semibold urbanist-medium text-left'>
                                        Sr.No
                                    </th>
                                    <th scope="col" className='text-[#1F2937]  leading-[135%] text-base not-italic font-semibold urbanist-medium text-left'>
                                        Award
                                    </th>
                                    <th scope="col" className='text-[#1F2937]  leading-[135%] text-base not-italic font-semibold urbanist-medium text-inherit pr-[22px]'>
                                        Year
                                    </th>
                                    <th scope="col" className='text-[#1F2937]  leading-[135%] text-base not-italic font-semibold urbanist-medium'>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data && data.map((item, index) => (
                                        <tr key={index} className=" border-b hover:bg-[#F3F4F6] ">
                                            <td className='text-[#4B5563]  leading-[150%] text-2xl not-italic font-medium urbanist-medium py-6'>{item.no}</td>
                                            <td className='text-[#4B5563]  leading-[150%] text-2xl not-italic font-medium urbanist-medium'>
                                                {item.name}
                                            </td>
                                            <td className='text-[#4B5563]  leading-[150%] text-2xl not-italic font-medium urbanist-medium text-center'>
                                                {item.year}
                                            </td>
                                            <td className='text-[#4B5563] leading-[150%] text-2xl not-italic font-medium urbanist-medium flex justify-center items-center'>
                                                <img src={item.image} alt='award Imgaes' />
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
