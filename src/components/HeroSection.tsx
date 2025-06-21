
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TypedText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [visibleText, setVisibleText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startTyping();
      }, delay);
      
      return () => clearTimeout(delayTimer);
    } else {
      startTyping();
    }
  }, [delay]);
  
  const startTyping = () => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  };
  
  return (
    <span className="typing-container">
      <span className="typing-text">
        {visibleText}
        {isTyping && <span className="animate-blink-caret inline-block w-0.5 h-5 ml-0.5 bg-theme-red"></span>}
      </span>
    </span>
  );
};

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Add navigate hook for routing
  
  const typingTexts = [
    "Intergalactic musician & full-stack magician",
    "Sarcasm-driven AI whisperer",
    "Ableton Live Wizard 🎧",
    "Next.js Addict | Cybersecurity Fanboy",
    "All hail the Vercel deploy button!"
  ];
  
  useEffect(() => {
    if (currentTextIndex < typingTexts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, typingTexts[currentTextIndex].length * 70 + 2000);
      
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, typingTexts]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation to projects page
  const handleViewProjects = () => {
    navigate('/projects');
  };
  
  // Handle navigation to contact page
  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20"
    >
      {/* Background elements for parallax effect */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-theme-red/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-theme-violet/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-theme-navy/10 blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 flex items-center justify-center md:justify-start"
          >
            <span className="px-2 py-1 text-xs uppercase tracking-wider bg-theme-red/20 text-theme-red rounded-md">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left"
          >
            <span className="block">Debdoot Manna:</span>
            <span className="text-gradient">The Only Sane Vibe Coder</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground min-h-[40px] mb-6 text-center md:text-left"
          >
            <TypedText text={typingTexts[currentTextIndex]} delay={800} />
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border-l-4 border-theme-red pl-4 italic text-muted-foreground my-8 text-center md:text-left"
          >
            "I hack computers for fun and produce music that could summon aliens."
          </motion.blockquote>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg md:text-xl mb-8 text-center md:text-left"
          >
            Developer by day, space DJ by night (a.k.a The Messengers 🚀). Specializes in Next.js. 
            Cybersecurity enthusiast. Drops sick beats. Currently coding and composing somewhere 
            in the multiverse (also known as Earth).
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col md:flex-row justify-center md:justify-start gap-4"
          >
            <button 
              onClick={handleViewProjects}
              className="px-8 py-3 bg-theme-red text-white rounded-md transition-all hover:bg-theme-red/80 hover:shadow-lg hover:shadow-theme-red/20"
            >
              View Projects
            </button>
            <button 
              onClick={handleContactMe}
              className="px-8 py-3 border border-white/20 text-white rounded-md transition-all hover:bg-white/5 hover:border-white/40"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Explore the Digital Cosmos 🚀</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-5 h-5 border-r-2 border-b-2 border-theme-red transform rotate-45"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
