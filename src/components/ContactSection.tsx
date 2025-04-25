
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";

interface ContactMethod {
  name: string;
  icon: JSX.Element;
  link: string;
  username: string;
  color: string;
  description: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: "Instagram",
    icon: <Instagram className="w-8 h-8" />,
    link: "https://www.instagram.com/themessengersmusic/",
    username: "themessengersmusic",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
    description: "Follow me for music releases, behind-the-scenes, and visual art"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-8 h-8" />,
    link: "https://linkedin.com/in/debdootmanna",
    username: "debdootmanna",
    color: "bg-gradient-to-br from-blue-700 to-blue-500",
    description: "Connect for professional opportunities and collaborations"
  },
  {
    name: "Email",
    icon: <Mail className="w-8 h-8" />,
    link: "mailto:debdootmanna007@outlook.com",
    username: "debdootmanna007@outlook.com",
    color: "bg-gradient-to-br from-theme-red to-rose-500",
    description: "Contact me directly for project inquiries or collaborations"
  }
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-theme-black z-0"></div>
      
      {/* Glass orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/6 w-64 h-64 rounded-full bg-theme-red/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 rounded-full bg-theme-violet/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="container px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
            <div className="h-1 w-20 bg-theme-red mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Feel free to reach out through any of these channels.
            </p>
          </motion.div>
          
          {/* Contact methods with scroll animations */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16 md:space-y-24">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`w-24 h-24 rounded-2xl ${method.color} flex items-center justify-center shadow-lg hoverable`}
                  >
                    {method.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className={`flex-1 text-center md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h3 className="text-2xl font-bold mb-2">{method.name}</h3>
                    <p className="text-white/70 mb-4">{method.description}</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-medium text-theme-red hover:underline"
                    >
                      {method.username}
                      <span className="text-xs">↗</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <p className="text-white/50 mb-4">
              Project Link:
              <a 
                href="https://www.google.com/search?q=https://github.com/DebdootManna/website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-theme-red hover:underline"
              >
                github.com/DebdootManna/website
              </a>
            </p>
            
            <blockquote className="max-w-2xl mx-auto border-l-4 border-theme-red pl-4 italic text-white/60 text-lg">
              "Stay curious. Stay sarcastic. Ship weird things. Drop weird beats."<br/>
              <span className="text-right block mt-2">— Debdoot a.k.a. The Messengers 👾</span>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
