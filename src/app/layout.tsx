import type { Metadata } from "next";
import { Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ThemeProvider } from "next-themes";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Rafael Maciel",
  description: "Nice to meet you, I'm Rafael!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${publicSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="data-theme">
          {/* Mobile/Tablet Notice */}
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center bg-background p-8 text-center">
            <div className="max-w-md space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Mobile Version Under Development
              </h2>
              <p className="text-foreground/80">
                We apologize, but we are currently working on the mobile version
                of our website. Please visit us on a desktop device for the best
                experience.
              </p>
            </div>
          </div>

          {/* Main Content - Hidden on Mobile/Tablet */}
          <div className="hidden lg:block">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
