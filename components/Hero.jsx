"use client"
import React from 'react'
import { Button } from './ui/button'
import Photo from './Photo'
import Link from 'next/link'
import { words } from '@/lib/data'
import Image from 'next/image'

export default function Hero() {

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <Image src="/bg.png" alt="" width={400} height={400} priority />
      </div>
      <div className="container">

        {/* HERO */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:mt-12 xl:pb-12">
          {/* TEXT */}
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <Image
                          src={word.imgPath}
                          alt="person"
                          width={100}
                          height={100}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-accent"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Manasseh, a Developer & Brand Designer.
            </p>

            <Link href={"#projects"} className='mb-6 lg:mb-0'>
              <Button
                size="lg"
                className="w-full"
              >
                See Projects
              </Button>
            </Link>
          </div>

          {/* PHOTO */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </div>
  )
}
