"use client";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";
import { Button } from "./ui/button";

const WorkSliderBtns = ({ containerStyles }) => {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyles}>
      <Button size="sm" onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack />
      </Button>

      <Button size="sm" onClick={() => swiper.slideNext()}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default WorkSliderBtns;
