import React from 'react'

const Details = ({ courseId }) => {

    const data = [
        {
            id: 1,
            no: '01',
            name: 'Chelsea Sales Team of the Year',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            id: 2,
            no: '02',
            name: 'Corcorans Top 25',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            id: 3,
            no: '03',
            name: 'Presidents Council',
            year: 2021,
            image: './images/oscar.svg'

        },
        {
            id: 4,
            no: '04',
            name: 'NRT Top 1% Broker in the USA',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            id: 5,
            no: '05',
            name: 'NRT Top 100 Teams',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            id: 6,
            no: '06',
            name: 'Wall Street Journal Real Estate Top 100',
            year: 2020,
            image: './images/oscar.svg'

        },
        {
            id: 7,
            no: '07',
            name: 'Village Team of the Year',
            year: 2019,
            image: './images/oscar.svg'

        },
        {
            id: 8,
            no: '08',
            name: 'Certified Negotiation Expert',
            year: 2021,
            image: './images/oscar.svg'

        },
    ]

    return (
        <>
            <div><h1 className='text-black font-semibold text-center text-7xl'> Details</h1></div>

            <div className='mx-auto container flex justify-center items-center text-center mt-48 bg-gray-500 w-1/2 h-1/2 py-24 '>

                <div>
                    <h1 className='text-white font-semibold'>01</h1>
                    <h4 className='text-white font-semibold'>Chelsea Sales Team of the Year</h4>
                    <p className='text-white font-semibold'>2021</p>
                    <img src='./images/oscar.svg' alt='' />
                </div>

            </div>
        </>

    )
}

export default Details