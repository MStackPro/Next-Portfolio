"use client";

// import { PiCareLeftBold, PiCareRightBold } from "react-icons/pi";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <BsArrowUpRight className={iconsStyles} />
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <BsGithub className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
