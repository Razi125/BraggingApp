import React,{useEffect , useState} from 'react'

const Details = ({ courseId }) => {

    const [item , setItem] = useState([])
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

    useEffect(() => {
        let FilterData = data.filter(item => courseId.includes(item.id))
        setItem(FilterData)
    }, [])




    return (
        <>
            <div className='mx-auto container  flex flex-col justify-center items-center text-center rounded-xl mt-5 bg-white border-2 w-full '>
                <div><h1 className='text-black font-semibold text-center text-4xl pb-4'> Details</h1></div>
                <div >
                    {
                        item?.map((item, index) => (
                            <div key={index} className='space-y-4'>
                                <h1 className='text-gray-900 text-xl font-semibold'>{item.no}</h1>
                                <h4 className='text-gray-900 text-xl font-semibold'>{item.name}</h4>
                                <p className='text-gray-900 text-xl font-semibold'>{item.year}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>

    )
}

export default Details