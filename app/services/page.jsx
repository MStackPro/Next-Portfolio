"use client";

import { fadeIn } from "@/components/motions/variants";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop. From concept to code, i'm proficient in bringing designs to life with seamless user experiences.",
  },
  {
    num: "02",
    title: "Graphic Design",
    desc: "Whether you need eye-catching logos, compelling marketing materials, or captivating social media graphics, we bring your ideas to life with creativity and precision.",
  },
  {
    num: "03",
    title: "Branding",
    desc: "I design comprehensive branding solutions that encompass everything from logos and color schemes to typography and brand guidelines. With meticulous attention to detail and a passion for storytelling.",
  },
];

const Services = () => {
  return (
    <section
      className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0 xl:mt-24 mt-12"
      id="services"
    >
      <div className="container mx-auto">
        <p className="text-accent text-[17px] font-semibold mb-8">
          My Services
        </p>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]"
        >
          {/* Service container */}
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col justify-center gap-6 group space-y-4 bg-[#323237] p-6 rounded-xl"
              >
                {/* NUM */}
                <div className="xl:text-5xl text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-white/60 text-sm leading-6">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
