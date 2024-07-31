import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: '#'},
    {icon: <FaLinkedinIn/>, path: '#'},
    {icon: <FaTwitter/>, path: '#'},
    {icon: <FaInstagramSquare/>, path: '#'},
]
const Socials = ({ containerStyles, iconStyles }) => {

  return (
    <section className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </section>
  )
}

export default Socials