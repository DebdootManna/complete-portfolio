
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Music Producer",
    description: "Professional music production services (part-time). Creating electronic music, beats, and custom soundscapes.",
    icon: "🎵",
    color: "from-theme-red to-orange-600"
  },
  {
    title: "Painter",
    description: "Freelance painting services specializing in non-figurative drawings and fauvism style artworks.",
    icon: "🎨",
    color: "from-theme-violet to-blue-700"
  },
  {
    title: "Photography",
    description: "Abstract, object, product, and landscape photography as a hobby. Capturing unique perspectives through the lens.",
    icon: "📸",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Film Making",
    description: "Still learning, but interested in Drama and Psychological film making. Experience from Netflix short film competition.",
    icon: "🎬",
    color: "from-amber-500 to-yellow-400"
  },
  {
    title: "Other Helps",
    description: "Additional services like completing homework assignments and providing technical assistance.",
    icon: "🤝",
    color: "from-green-600 to-teal-500"
  }
];

const ServiceCard = ({ service, index, isVisible }: { service: Service; index: number; isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="relative glass-panel p-6 z-10 h-full hoverable group"
    >
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-70 transition-all duration-500 group-hover:h-1.5 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}
      ></div>
      
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color.replace('from-', '').replace('to-', '')} flex items-center justify-center mb-6 shadow-lg text-3xl`}>
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/70">{service.description}</p>
      
      <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${service.color})` }}
      ></div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div style={{ opacity }} className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-theme-red/5 blur-3xl"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }} 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-theme-violet/5 blur-3xl"
        ></motion.div>
      </motion.div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Services</h2>
          <div className="h-1 w-20 bg-theme-red mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Professional services I offer, blending technical expertise with artistic skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
