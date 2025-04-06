"use client";

import Socials from "@/components/Socials";
import { fadeIn } from "@/components/motions/variants";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="py-6 mt-14 xl:mt-24" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          {/* socials */}
          <motion.article
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center w-full xl:w-2/5 space-y-6 mx-auto xl:mx-0"
          >
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Contacts
          </motion.h2>
            <p className="text-center text-sm text-white">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
            </p>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles={"flex gap-6"}
                iconStyles={
                  "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                }
              />
            </div>
          </motion.article>

          <div className="flex gap-6">
              <a
                href="mailto:walshakmanasseh@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <MailIcon size={24} />
                <span>Email</span>
              </a>
              <a
                href="https://wa.link/n79fcq"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FaWhatsapp size={24} />
                <span>Whatsapp</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
