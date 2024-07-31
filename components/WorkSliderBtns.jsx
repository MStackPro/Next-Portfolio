"use client";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack />
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
