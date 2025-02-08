"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ResumePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownload = () => {
    window.open("/CV-RafaelMaciel.pdf", "_blank");
  };

  return (
    <div className="py-28 px-8 max-w-screen-xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/CV-RafaelMaciel.jpg"
          alt="Rafael Maciel's Resume"
          width={800}
          height={1131}
          priority
          className="mx-auto shadow-lg rounded-lg w-full h-auto"
        />
      </motion.div>
      <motion.div
        className="fixed bottom-6 right-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Button
          variant="outline"
          className="mt-4 shadow-xl"
          onClick={handleDownload}
        >
          <Icon
            className="text-foreground hover:text-primary rounded-full text-2xl"
            icon="line-md:download"
          />
        </Button>
      </motion.div>
    </div>
  );
}
