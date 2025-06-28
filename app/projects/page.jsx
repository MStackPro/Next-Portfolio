'use client';

import { motion } from 'framer-motion';
import { ExternalLinkIcon, } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { projects } from '@/lib/data';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';


export default function Projects() {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Projects
          </motion.h2>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full blue-pagination"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="project-content">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-blue-100 text-black dark:text-blue-100 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent  "
                      >
                        <ExternalLinkIcon size={20} /> Live Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Custom styles for blue pagination and navigation */}
      <style jsx>{`
        :global(.blue-pagination .swiper-pagination-bullet) {
          background-color: #1A3349FF !important;
          opacity: 0.7;
        }
        
        :global(.blue-pagination .swiper-pagination-bullet-active) {
          background-color: #52aeff !important;
          opacity: 1;
        }
        
        :global(.blue-pagination .swiper-button-next),
        :global(.blue-pagination .swiper-button-prev) {
          color: #52aeff !important;
        }
        
        :global(.blue-pagination .swiper-button-next:hover),
        :global(.blue-pagination .swiper-button-prev:hover) {
          color: #52aeff !important;
        }
      `}</style>
    </div>
  )
}