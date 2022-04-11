import React from 'react'
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
    const SliderData = [
        {
            url: './images/unsplash.svg'
        }

    ]
    return (
        <>
            <div className='mx-auto container flex justify-center items-center'>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={2000}
                >
                    {SliderData.map((item, i) => {
                        return <div key={i}  className='mx-auto container'>

                            <img src={item.url} alt='' />
                        </div>

                    })}
                </Carousel>
            </div>
        </>
    )
}

export default Slider




