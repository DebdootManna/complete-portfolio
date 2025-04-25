
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-theme-navy/5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-red/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-red/20 to-transparent"></div>
      </div>

      <motion.div 
        style={{ opacity, rotateX }}
        className="container px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Education</h2>
          <div className="h-1 w-20 bg-theme-red mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-theme-red/30 ml-4 md:ml-0"></div>
            
            {/* Education Items */}
            <div className="space-y-16">
              {/* University */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative pl-10 md:pl-24"
              >
                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full border-2 border-theme-red bg-theme-black flex items-center justify-center ml-0.5 md:ml-0">
                  <div className="w-3 h-3 rounded-full bg-theme-red"></div>
                </div>
                
                <div className="glass-panel p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-xs bg-theme-red/20 text-theme-red rounded-full mb-4">
                    2023 - Present
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Charter University of Science and Technology</h3>
                  <p className="text-lg text-white/80 mb-2">Computer Science and Technology</p>
                  <p className="text-white/60">Batch 2027</p>
                  
                  <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-theme-red/10 backdrop-blur-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">B.S.</span>
                  </div>
                </div>
              </motion.div>
              
              {/* High School */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative pl-10 md:pl-24"
              >
                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full border-2 border-theme-red bg-theme-black flex items-center justify-center ml-0.5 md:ml-0">
                  <div className="w-3 h-3 rounded-full bg-theme-red"></div>
                </div>
                
                <div className="glass-panel p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-xs bg-theme-red/20 text-theme-red rounded-full mb-4">
                    Graduated 2023
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Navrachana Vidyani Vidyalaya</h3>
                  <p className="text-lg text-white/80 mb-2">High School</p>
                  <p className="text-white/60">Batch 2023</p>
                  
                  <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-theme-red/10 backdrop-blur-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">H.S.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
