"use client";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";
import { Button } from "./ui/button";

const WorkSliderBtns = () => {
  const swiper = useSwiper();
  
  return (
    <div className="flex gap-4 justify-center mt-4">
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
