"use client";

import BlogItem from "@/components/blog/item";
import ExperienceItem from "@/components/experience/item";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);

  const isAboutInView = useInView(aboutRef);
  const isExperienceInView = useInView(experienceRef);
  const isBlogInView = useInView(blogRef);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-28 px-8 max-w-screen-xl mx-auto flex justify-between">
      <motion.div
        className="w-[50%] fixed top-28 h-[80vh] flex flex-col justify-between"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Rafael de Araújo Maciel</h1>
          <p className="text-foreground/80 mb-4 text-xl">
            Senior Software Engineer
          </p>
          <p>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            onClick={() => scrollToSection("about")}
            className={`text-foreground/60 mb-4 text-xl transition-all cursor-pointer hover:text-primary ${
              isAboutInView ? "text-primary font-bold" : ""
            }`}
          >
            About me
          </motion.p>
          <motion.p
            onClick={() => scrollToSection("experience")}
            className={`text-foreground/60 mb-4 text-xl transition-all cursor-pointer hover:text-primary ${
              isExperienceInView ? "text-primary font-bold" : ""
            }`}
          >
            Relevant projects
          </motion.p>
          <motion.p
            onClick={() => scrollToSection("blog")}
            className={`text-foreground/60 mb-4 text-xl transition-all cursor-pointer hover:text-primary ${
              isBlogInView ? "text-primary font-bold" : ""
            }`}
          >
            Relevant posts
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="ml-auto w-[50%]" ref={scrollRef}>
        <div id="about" ref={aboutRef}>
          <motion.p
            className="text-foreground mb-4 text-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a developer passionate about crafting accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </motion.p>
        </div>
        <div id="experience" ref={experienceRef}>
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ExperienceItem
              timeRange="2023 - Present"
              title="Software Engineer"
              description="Led the development of a full-stack web application using React and Node.js"
              technologies={["React", "TypeScript", "Node.js", "PostgreSQL"]}
              company="Company Name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ExperienceItem
              timeRange="2023 - Present"
              title="Software Engineer"
              description="Led the development of a full-stack web application using React and Node.js"
              technologies={["React", "TypeScript", "Node.js", "PostgreSQL"]}
              company="Company Name"
            />
          </motion.div>
          <motion.div
            className="pb-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ExperienceItem
              timeRange="2023 - Present"
              title="Software Engineer"
              description="Led the development of a full-stack web application using React and Node.js"
              technologies={["React", "TypeScript", "Node.js", "PostgreSQL"]}
              company="Company Name"
            />
          </motion.div>
        </div>
        <div id="blog" ref={blogRef}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <BlogItem
              title="Understanding React Server Components"
              description="A deep dive into React Server Components and how they can improve your application's performance."
              link="/blog/react-server-components"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <BlogItem
              title="Understanding React Server Components"
              description="A deep dive into React Server Components and how they can improve your application's performance."
              link="/blog/react-server-components"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
