"use client";

import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 mt-20 xl:mt-28"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          {/* socials */}
          <article className="flex flex-col items-center w-full xl:w-2/5 space-y-6 mx-auto xl:mx-0">
            <h2 className="text-3xl text-accent font-semibold">Let's Talk</h2>
            <p className="text-center text-sm text-white/60">
              Have a question or want to hire me? I'm here to help. Feel free to
              reach out via social media handles or directly via email. Thank
              you!
            </p>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles={"flex gap-6"}
                iconStyles={
                  "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                }
              />
            </div>
          </article>

          {/* form */}
          <div className="xl:w-[54%]">
            <form
              action="https://formspree.io/f/xvojedzq"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone number" />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Graphic Design</SelectItem>
                    <SelectItem value="mst">Branding</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
