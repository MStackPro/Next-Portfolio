"use client";

import Image from "next/image";
import Me from "../app/assets/me.jpg";
import { easeInOut, motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: easeInOut },
      }}
      className="w-[75%] overflow-hidden mx-auto rounded-full border border-accent/30 mix-blend-lighten hover:transform hover:rotate-[10deg] transition-all duration-500 ease-in-out hover:mix-blend-lighten"
    >
      <Image
        src={Me}
        alt="me"
        width={450}
        quality={100}
        className="object-contain"
      />
    </motion.section>
  );
};

export default Photo;
