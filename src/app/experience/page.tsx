"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceItem from "@/components/experience/item";

export interface Experience {
  title: string;
  companyName: string;
  technologies: string[];
  dateStart: string;
  dateEnd: string;
  description: string;
  partner?: string;
}

export default function ResumePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Could not fetch experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

  const handleDownload = () => {
    window.open("/CV-RafaelMaciel.pdf", "_blank");
  };

  return (
    <div className="py-28 px-8 max-w-screen-xl mx-auto" ref={ref}>
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="projects" className="dark:bg-slate-900">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          <TabsContent value="resume">
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
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
          </TabsContent>
          <TabsContent value="projects">
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  staggerChildren: 0.2,
                  delayChildren: 0.4,
                }}
              >
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceItem
                      timeRange={`${new Date(
                        experience.dateStart
                      ).getFullYear()} - ${new Date(
                        experience.dateEnd
                      ).getFullYear()}`}
                      title={experience.title}
                      description={experience.description}
                      technologies={experience.technologies}
                      company={experience.companyName}
                      partner={experience.partner}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
