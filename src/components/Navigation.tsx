
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const sections = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "education", label: "Education", path: "/education" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background when scrolled
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-theme-black/80 backdrop-blur-md shadow-lg" : "py-5"
        }`}
      >
        <div className="container flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white"
          >
            <Link to="/">
              <span className="text-theme-red">D</span>M
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className={`relative px-1 py-2 transition-colors duration-300 hoverable ${
                  isActivePath(section.path)
                    ? "text-theme-red"
                    : "text-white hover:text-theme-red"
                }`}
              >
                {section.label}
                {isActivePath(section.path) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-red"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-16 left-0 right-0 z-40 bg-theme-black/95 backdrop-blur-lg overflow-hidden"
      >
        <div className="container py-4 flex flex-col space-y-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-6 text-left transition-colors ${
                isActivePath(section.path)
                  ? "text-theme-red font-medium"
                  : "text-white"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
