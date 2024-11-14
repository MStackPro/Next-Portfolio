"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from './motions/variants'
import { Button } from './ui/button'
import Socials from './Socials'
import Photo from './Photo'
import { FiDownload } from 'react-icons/fi'
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="container mx-auto h-full">
        {/* HERO */}
        <div className="flex flex-col xl:flex-row items-center justify-between mt-12 xl:mt-12 xl:pb-12">
          {/* TEXT */}
          <div className="text-center xl:text-left">
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2"
            >
              <span className="">Hello I'm</span>
              <h1 className="h2 text-accent">Manasseh Walshak</h1>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-[500px] mb-9  text-sm"
            >
              <Typewriter options={{ strings: ["Front-end Developer and Creative Graphic Designer."], autoStart: true, loop: true, delay: 40}}/>
            </motion.div>

            {/* BUTTON AND SOCIALS */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Button
                variant="outline"
                size="sm"
                className="uppercase text-sm flex items-center gap-2"
              >
                Download CV
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </motion.div>
          </div>

          {/* PHOTO */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
  )
}
