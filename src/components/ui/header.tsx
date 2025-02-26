"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-4 fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm max-w-screen-xl mx-auto transition-all duration-300 ${
        isScrolled ? "bg-background/50 border-primary" : ""
      }`}
    >
      <div className="flex items-center pl-8 w-64">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">R4L.</span>site
        </Link>
      </div>
      <nav className="flex items-center space-x-6 ">
        <Link href="/blog" className="text-foreground/80 hover:text-primary">
          Posts
        </Link>
        <Link
          href="/experience"
          className="text-foreground/80 hover:text-primary"
        >
          Experience
        </Link>
        <Link href="/chat" className="text-foreground/80 hover:text-primary">
          Chat
        </Link>
      </nav>
      <div className="flex items-center justify-end w-64 pr-8 gap-4">
        <Link
          href="https://github.com/rafaeltj13"
          className="hover:text-primary"
        >
          <Icon
            className="text-foreground hover:text-primary"
            icon="line-md:github"
            width="24"
            height="24"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rafael-de-ara%C3%BAjo-14b5b1117/"
          className="hover:text-primary"
        >
          <Icon
            className="text-foreground hover:text-primary"
            icon="line-md:linkedin"
            width="24"
            height="24"
          />
        </Link>
        <Link
          href="https://instagram.com/rafaeldearaujo_"
          className="hover:text-primary"
        >
          <Icon
            className="text-foreground hover:text-primary "
            icon="line-md:instagram"
            width="24"
            height="24"
          />
        </Link>
        <Icon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-foreground hover:text-primary cursor-pointer"
          icon={
            theme === "light"
              ? "line-md:sun-rising-loop"
              : "line-md:moon-rising-loop"
          }
          width="24"
          height="24"
        />
      </div>
    </header>
  );
}
