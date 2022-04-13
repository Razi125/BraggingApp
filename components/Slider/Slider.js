


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
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[98%] xl:w-[100%] h-[100%] mx-auto px-6 container mb-20 rounded-[8px]">
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>
                <SwiperSlide ><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="flex flex-col justify-center items-center w-full h-[475px]"></iframe> </SwiperSlide>

            </Swiper>
        </>
    );
}

