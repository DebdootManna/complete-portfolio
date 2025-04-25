
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const journeyItems = [
    "First it was painting. (Before lockdown)",
    "Then (after lockdown) it all started. Thanks to "boredomness" I got interest into many things (and one of them is music producing). I focused on that and build a profession for myself.",
    "Simultaneously got interest into computers and history of computers.",
    "Reading online articles and went into deep web (and later dark web). Got interest into a lot of stuff.",
    "First science, then physics, then quantum physics, then technology, then computer science."
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-20 bg-theme-red mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-theme-red translate-x-3 translate-y-3 rounded-lg"></div>
              <div className="relative z-10 bg-theme-dark p-4 rounded-lg shadow-xl">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Abstract Digital Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 p-4 glass-panel shadow-xl"
            >
              <p className="text-lg font-bold text-theme-red">Debdoot Manna</p>
              <p className="text-sm text-white/80">a.k.a. The Messengers</p>
            </motion.div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              I am an electronic music producer born on Vadodara, Gujarat (India). I am also a cyber security enthusiast. I like to explore many things on computers, operating systems, latest science technologies, AI and development, and lots of stuff.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              These were just the technical stuff. Other than that I like to read a lot of controversy theories and paradoxes. I like to know stuff, that all! I have no limits on learning anything.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              I like to read stuff too, like stories, theories, debates, controversies, philosophical and psychological. So for that I research on the dark web too. I LIKE TO KNOW STUFF. Also I like to paint too! My painting style represents more like 'fauvism.' I like photography and videography too. And for that I like Films. I did work on films too. Was part in a small competition (hosted by netflix) for short film making too. Currently a computer science student.
            </p>
          </motion.div>
        </div>
        
        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-theme-red/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-theme-red rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  <div className="w-full md:w-1/2 px-6 md:px-12 py-4 relative">
                    <div className={`glass-panel p-6 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                      <p className="text-lg">{item}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
