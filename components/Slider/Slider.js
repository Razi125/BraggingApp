// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';

// const Slider = () => {
//     const videoProperties = [
//         {
//             id: 1,
//             src: './images/unsplash.svg',
//         },
//         {
//             id: 2,
//             src: './images/unsplash.svg',
//         },
//         {
//             id: 3,
//             // src: Vid3,
//             src: './images/unsplash.svg',
//         },
//     ];

//     return (
//         <div className="mx-auto container mb-20">
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 ...
//             </Swiper>

//         </div>
//     )
// }

// export default Slider


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[98%] xl:w-[100%] h-[100%] mx-auto px-6 container mb-20 ">
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>

            </Swiper>
        </>
    );
}

