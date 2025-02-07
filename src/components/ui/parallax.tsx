"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import eu from "../../../public/cfc31a16-48e0-4f31-8cab-87e9ba009b3d.jpg";
import eu2 from "../../../public/basket-marketplace.png";
import eu3 from "../../../public/creditOrDebit.png";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Imagee({ id }: { id: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Link href={`/blog/${id}`}>
      <section className="h-screen snap-start flex items-center relative max-w-screen-lg mx-auto">
        <div
          ref={ref}
          className="w-[40%] h-[500px] m-5 bg-[#f5f5f5] overflow-hidden shadow-lg md:w-[300px] md:h-[400px] sm:w-[150px] sm:h-[200px]"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image
            src={id == 1 ? eu : id == 2 ? eu2 : eu3}
            alt="A London skyscraper"
            className="w-full h-full object-cover"
            priority
            quality={100}
          />
        </div>
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-[60%] tracking-[-3px] absolute inline-block left-[calc(30%+120px)]"
        >
          <motion.h2 className="text-foreground m-0 font-mono text-5xl font-bold">
            <motion.span className="text-primary">#0{id}</motion.span> Hello!
            This is a blog post
          </motion.h2>
          <motion.p className="text-foreground m-0 font-mono text-2xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec,
          </motion.p>
          <motion.p className="text-foreground m-0 font-mono text-2xl mt-4">
            January 1, 1970
          </motion.p>
        </motion.div>
      </section>
    </Link>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="snap-y snap-mandatory">
      {[1, 2, 3].map((image) => (
        <Imagee key={image} id={image} />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-primary bottom-[64px] origin-[0%] rounded-2xl"
        style={{ scaleX }}
      />
    </div>
  );
}
