"use client";

import { motion } from "framer-motion";

import { FaDiscord, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaDiscord />,
    title: "Discord",
    description: "xd.xd",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "email@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex justify-center items-center min-h-[80vh] py-12 xl:py-0 px-[40%]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center">
          <div className="flex-1 flex items-center justify-center mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#053E39] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
