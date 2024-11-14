"use client"

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { IoIosArrowUp } from "react-icons/io";


export default function ScrollUp() {
  return (
    <main>
          <ScrollToTop className='flex justify-center items-center transform transition-transform duration-300 hover:scale-105' style={{backgroundColor: "#292827", border: "1px solid #fff", width: "2.5rem", height: "2.5rem", }} smooth component={<IoIosArrowUp className='text-accent text-3xl' />}/>

    </main>
  )
}