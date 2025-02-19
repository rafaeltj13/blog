"use client";

import dayjs from "dayjs";

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
import Link from "next/link";

interface Post {
  id: string;
  image: string;
  title: string;
  content: string;
  date: string;
  htmlContent: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function PostItem({ post }: { post: Post }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Link href={`/blog/${post.id}`}>
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
            src={`/${post.image}.jpg`}
            alt="A London skyscraper"
            className="w-full h-full object-cover"
            priority
            quality={100}
            width={100}
            height={300}
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
            <motion.span className="text-primary">#0{post.id}</motion.span>{" "}
            {post.title}
          </motion.h2>
          <motion.p className="text-foreground m-0 font-mono text-2xl mt-4">
            {post.content}
          </motion.p>
          <motion.p className="text-foreground m-0 font-mono text-2xl mt-4">
            {dayjs(post.date).format("MMMM D, YYYY")}
          </motion.p>
        </motion.div>
      </section>
    </Link>
  );
}

export default function Parallax({ posts }: { posts: Post[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="snap-y snap-mandatory">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-primary bottom-[64px] origin-[0%] rounded-2xl"
        style={{ scaleX }}
      />
    </div>
  );
}
