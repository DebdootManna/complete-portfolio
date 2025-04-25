
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const funFacts = [
  "I can solve a Rubik's cube in under 2 minutes",
  "I once stayed awake for 36 hours straight to finish a music track",
  "I've explored over 10 different programming languages",
  "My first computer was a Windows 98 machine",
  "I collect vintage synthesizers",
  "I can type at 90 WPM"
];

const experiments = [
  "Exploring generative audio with AI",
  "Building a cyberpunk-themed personal website",
  "Creating a decentralized music distribution platform",
  "Developing a custom VST plugin"
];

const FunFacts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-theme-red flex items-center">
              <span className="text-3xl mr-3">⚡</span> 
              Fun Facts
            </h3>
            
            <ul className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-theme-red mr-2 mt-1">•</span>
                  <span className="text-white/80">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Current Experiments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-theme-violet flex items-center">
              <span className="text-3xl mr-3">🧪</span>
              Current Experiments
            </h3>
            
            <ul className="space-y-4">
              {experiments.map((experiment, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-theme-violet mr-2 mt-1">•</span>
                  <span className="text-white/80">{experiment}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Digital Footprint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 md:p-8 glass-panel"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">🔗</span>
            Digital Footprint
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://www.google.com/search?q=https://debdootmanna.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center text-center"
            >
              <span className="text-xl mb-2">🌐</span>
              <span className="font-medium">Portfolio</span>
              <span className="text-sm text-white/60">debdootmanna.me</span>
            </a>
            
            <a 
              href="https://github.com/DebdootManna" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center text-center"
            >
              <span className="text-xl mb-2">💻</span>
              <span className="font-medium">Projects</span>
              <span className="text-sm text-white/60">See Repos</span>
            </a>
            
            <a 
              href="https://www.google.com/search?q=https://open.spotify.com/album/26QlxsORL2Yh7zPt8Xh6gj%3Fsi%3D6DLw-KgBS12yuIMeMuvuhA" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center text-center"
            >
              <span className="text-xl mb-2">🎵</span>
              <span className="font-medium">Music</span>
              <span className="text-sm text-white/60">Spotify</span>
            </a>
            
            <a 
              href="https://www.instagram.com/themessengersmusic/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center text-center"
            >
              <span className="text-xl mb-2">💬</span>
              <span className="font-medium">Chat</span>
              <span className="text-sm text-white/60">Instagram</span>
            </a>
          </div>
        </motion.div>
        
        {/* General Features & Acknowledgments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 bg-white/5 rounded-lg"
          >
            <h4 className="text-lg font-medium mb-3">General Features</h4>
            <ul className="grid grid-cols-2 gap-2">
              {["Modern Design", "Responsive Layout", "Performance Optimized", "Accessibility", "Dark Mode", "SEO Optimized"].map((feature, index) => (
                <li key={index} className="flex items-center text-white/70">
                  <span className="text-theme-red mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 bg-white/5 rounded-lg"
          >
            <h4 className="text-lg font-medium mb-3">Acknowledgments</h4>
            <p className="text-white/70">
              Special thanks to all the open-source libraries, frameworks, and tools that made this website possible.
              Built with React, Tailwind CSS, and Framer Motion. MIT Licensed.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
