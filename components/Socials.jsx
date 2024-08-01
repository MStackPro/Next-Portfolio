import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaBehance, FaXTwitter } from "react-icons/fa6";

const socials = [
    {icon: <FaGithub/>, path: 'https://www.github.com/MStackPro'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/manasseh-walshak-yakubu-946733244'},
    {icon: <FaXTwitter/>, path: 'https://www.twitter.com/walshak_m'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/manasseh_walshak'},
    {icon: <FaBehance/>, path: 'https://www.behance.net/walshakmanasseh'},
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