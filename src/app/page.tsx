"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="py-28 px-8 max-w-screen-xl mx-auto flex justify-between">
      <motion.div
        className="w-[50%] h-[80vh] flex flex-col items-start justify-between fixed"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-2">Rafael de Araújo Maciel</h1>
          <p className="text-foreground/80 mb-4 text-xl">
            Senior Software Engineer
          </p>
          <p>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p className="text-foreground/60 mb-4 text-xl hover:scale-110 transition-transform cursor-pointer hover:text-foreground">
            About
          </motion.p>
          <motion.p className="text-foreground/60 mb-4 text-xl hover:scale-110 transition-transform cursor-pointer hover:text-foreground">
            Professional experience
          </motion.p>
          <motion.p className="text-foreground/60 mb-4 text-xl hover:scale-110 transition-transform cursor-pointer hover:text-foreground">
            Relevant posts
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="ml-auto w-[50%]" ref={scrollRef}>
        <motion.div>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
