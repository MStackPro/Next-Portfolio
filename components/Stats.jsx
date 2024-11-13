"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "./motions/variants";


const stats = [
  { num: 3, text: "Years of experience" },
  { num: 10, text: "Projects completed" },
  { num: 9, text: "Technologies mastered" },
  { num: 14, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <motion.div variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className="flex-1 flex gap-4 items-center justify-center" key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-4xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-sm` }>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
