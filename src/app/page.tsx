"use client";

import BlogItem from "@/components/blog/item";
import ExperienceItem from "@/components/experience/item";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Experience } from "./experience/page";
import { Icon } from "@iconify/react";

export default function Home() {
  const scrollRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);

  const isAboutInView = useInView(aboutRef);
  const isExperienceInView = useInView(experienceRef);
  const isBlogInView = useInView(blogRef);

  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExperiences(data.slice(0, 3));
      } catch (error) {
        console.error("Could not fetch experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-28 px-8 max-w-screen-xl mx-auto flex justify-between">
      <motion.div
        className="w-[40%] fixed top-28 h-[80vh] flex flex-col justify-between"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[80%]">
          <h1 className="text-4xl font-bold mb-2">Rafael de Araújo Maciel</h1>
          <p className="text-foreground/80 mb-4 text-xl">
            Senior Software Engineer
          </p>
          <p>
            I&apos;m a full-stack developer with a passion for creating seamless
            user experiences. I build accessible, pixel-perfect digital
            experiences for the web.
          </p>
          <div className="flex gap-2 mt-4">
            <Icon
              className="text-foreground"
              icon="vscode-icons:file-type-reactts"
              width="32"
              height="32"
            />
            <Icon
              className="text-foreground"
              icon="vscode-icons:file-type-vue"
              width="32"
              height="32"
            />
            <Icon
              className="text-foreground"
              icon="vscode-icons:file-type-node"
              width="32"
              height="32"
            />
            <Icon
              className="text-foreground"
              icon="vscode-icons:file-type-next"
              width="32"
              height="32"
            />
            <Icon
              className="text-foreground"
              icon="vscode-icons:file-type-nuxt"
              width="32"
              height="32"
            />
          </div>
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
            className="text-foreground mb-4 text-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Welcome to my corner of the web! I&apos;m a developer from Campina
            Grande, a city in Paraíba, Brazil, where my journey in web
            development began. At 27, I&apos;ve already experienced quite an
            evolution in web technologies.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            My path started with classic frameworks like AngularJS and ASP.NET
            during my university years, but it was discovering mordern
            frameworks like React and Vue that truly ignited my passion for web
            development. Today, I focus on creating meaningful digital
            experiences that combine clean code with thoughtful design.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I have 7+ years of experience specializing in full-stack web
            development. Advanced proficiency in modern TypeScript frameworks
            including React, Vue.js, Next.js, and Node.js. Successfully
            collaborated with global teams to build scalable solutions,
            demonstrating effective cross-cultural communication.
          </motion.p>
          <motion.p
            className="text-foreground mb-4 text-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            In my spare time, I&apos;m usually playing DotA 2, NBA 2k25, working
            out, hanging out with my girlfriend and two cats, or watching
            series.
          </motion.p>
        </div>
        <div className="py-20">
          <div id="experience" ref={experienceRef}>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="pb-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <ExperienceItem
                  timeRange={`${new Date(
                    experience.dateStart,
                  ).getFullYear()} - ${new Date(
                    experience.dateEnd,
                  ).getFullYear()}`}
                  title={experience.title}
                  description={experience.description}
                  technologies={experience.technologies}
                  company={experience.companyName}
                  partner={experience.partner}
                />
              </motion.div>
            ))}
          </div>
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
