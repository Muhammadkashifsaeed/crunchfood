"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import QuickInquiry from "./QuickInquiry";
import ChatBot from "./ChatBot";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  intro?: string;
};

const PageLayout = ({ children, title, eyebrow, intro }: Props) => {
  return (
    <main className="min-h-screen bg-background flex flex-col grain-subtle">
      <Nav />
      <div className="flex-1 relative z-10">
        {title && (
          <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-white/5 bg-gradient-dark overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial-glow opacity-50 pointer-events-none mix-blend-screen" />
            <div className="container-x relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
              >
                {eyebrow && <span className="text-eyebrow">{eyebrow}</span>}
                <h1 className="text-display mt-5 text-4xl lg:text-6xl drop-shadow-sm text-foreground drop-shadow-lg">
                  {title}
                </h1>
                {intro && (
                  <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                    {intro}
                  </p>
                )}
              </motion.div>
            </div>
          </section>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
      <Footer />
      <QuickInquiry />
      <ChatBot />
    </main>
  );
};

export default PageLayout;
