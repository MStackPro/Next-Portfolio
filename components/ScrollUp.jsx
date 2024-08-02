"use client"


import { IoArrowUp } from "react-icons/io5";
import ScrollToTop from 'scroll-to-top-react';


const ScrollUp = () => {
  return (
    <section>
      <ScrollToTop component={<IoArrowUp/>}/>
    </section>

  );
};

export default ScrollUp;