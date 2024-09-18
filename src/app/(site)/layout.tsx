"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "react-modal-video/css/modal-video.css";
import Prism from "prismjs";
import { useEffect, useRef } from "react";
import "../../styles/index.css";
import "../../styles/prism-vsc-dark-plus.css";
import ToasterContext from "../contex/ToasetContex";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

function applyCodeHighlighting() {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((codeBlock) => {
    Prism.highlightElement(codeBlock);
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    applyCodeHighlighting();
    Prism.highlightAll();
  }, []);

  const contentRef = useRef(null);

  return (
    <html suppressHydrationWarning lang="en">
      <body
        ref={contentRef}
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
      >
        <NextTopLoader
          color="#4A6CF7"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <Providers>
          <ToasterContext />
          <Header />
           {/* Full-width banner with opacity, centered content, and larger text */}
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-900 bg-opacity-75 z-50">
            <div className="text-white text-6xl font-bold p-4">
              Website Coming Soon
            </div>
          </div>

          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
