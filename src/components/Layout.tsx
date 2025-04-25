
import { ReactNode, useState, useEffect } from "react";
import Navigation from "./Navigation";
import CustomCursor from "./CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-theme-black min-h-screen text-white">
      {!isMobile && <CustomCursor />}
      <Navigation />
      <main className="relative">
        {children}
      </main>
      <footer className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Debdoot Manna. All rights reserved.</p>
        <p className="mt-2">
          <span className="mr-2">MIT License</span>
          <span className="opacity-60">|</span>
          <a 
            href="https://debdootmanna-old-portfolio.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 hover:text-theme-red transition-colors"
          >
            Previous Portfolio
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
