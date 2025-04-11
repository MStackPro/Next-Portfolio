"use client";

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: easeInOut },
      }}
      className="overflow-hidden xl:w-[25rem] xl:h-[25rem] w-60 h-60 rounded-full relative border border-accent/30 mix-blend-lighten hover:transform hover:rotate-[10deg] transition-all duration-500 ease-in-out hover:mix-blend-lighten"
    >
      <Image
        src={"/me.jpg"}
        alt="me"
        width={450}
        height={450}
        quality={100}
        priority
      />
      <div className="rotating-border"></div>
    </motion.section>
  );
};

export default Photo;
