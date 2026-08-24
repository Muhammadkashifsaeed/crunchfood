import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import QuickInquiry from "./QuickInquiry";
import ChatBot from "./ChatBot";

type Props = {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  intro?: string;
};

const PageLayout = ({ children, title, eyebrow, intro }: Props) => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Nav />
      <div className="flex-1">
        {title && (
          <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 border-b border-border/50 bg-gradient-dark">
            <div className="absolute inset-0 bg-gradient-radial-glow opacity-40 pointer-events-none" />
            <div className="container-x relative">
              {eyebrow && <span className="text-eyebrow">{eyebrow}</span>}
              <h1 className="text-display mt-4 text-4xl lg:text-6xl text-foreground max-w-4xl">
                {title}
              </h1>
              {intro && (
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                  {intro}
                </p>
              )}
            </div>
          </section>
        )}
        {children}
      </div>
      <Footer />
      <QuickInquiry />
      <ChatBot />
    </main>
  );
};

export default PageLayout;
