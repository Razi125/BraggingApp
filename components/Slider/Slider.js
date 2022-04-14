


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
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[98%] bg-black xl:w-[100%] h-[100%] mx-auto px-6 container mb-20 rounded-[8px]">
                <SwiperSlide >
                    <video className="flex flex-col justify-center items-center w-full h-[475px]" controls>
                        <source src="./videos/videoOne.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide >
                    <video className="flex flex-col justify-center items-center w-full h-[475px]" controls>
                        <source src="./videos/videotwo.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide >
                    <video className="flex flex-col justify-center items-center w-full h-[475px]" controls>
                        <source src="./videos/videothree.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>


            </Swiper>
        </>
    );
}

