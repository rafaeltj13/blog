"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BackgroundWrapper() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-center bg-no-repeat" />;
  }

  return (
    <div
      className="fixed inset-0 z-[-1] bg-center bg-no-repeat opacity-50"
      style={{
        backgroundImage:
          theme === "dark" ? 'url("/bg-dark.png")' : 'url("/bg-light.png")',
      }}
    />
  );
}
