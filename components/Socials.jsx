import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaBehance, FaXTwitter } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const socials = [
    {icon: <FaGithub/>, path: 'https://www.github.com/MStackPro', name: "Github"},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/manasseh-walshak-yakubu-946733244', name: "Linkedin"},
    {icon: <FaXTwitter/>, path: 'https://www.twitter.com/walshak_m', name: "Twitter"},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/manasseh_walshak', name: "Instagram"},
    {icon: <FaBehance/>, path: 'https://www.behance.net/walshakmanasseh', name: "Behance"},
]
const Socials = ({ containerStyles, iconStyles }) => {

  return (
    <section className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link href={item.path} target="_blank"
                    rel="noopener noreferrer" key={index} className={iconStyles}>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger>
                                { item.icon }
                            </TooltipTrigger>
                            <TooltipContent>{ item.name}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
            )
        })}
    </section>
  )
}

export default Socials