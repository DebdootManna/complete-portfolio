
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Music, PaintBucket, Camera, Film } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  category: string;
  colorClass?: string;
  icon?: React.ReactNode;
}

interface TechSkill {
  name: string;
  category: string;
}

const artisticSkills: Skill[] = [
  { 
    name: "Music Production", 
    percentage: 100, 
    category: "House, Future Bass, Trap, Pop, Orchestral, Melodic, Mid Tempo", 
    colorClass: "bg-gradient-to-r from-theme-red to-theme-red/70",
    icon: <Music className="w-5 h-5" /> 
  },
  { 
    name: "Painting", 
    percentage: 85, 
    category: "Non - Figurative drawings", 
    colorClass: "bg-gradient-to-r from-theme-violet to-theme-violet/70",
    icon: <PaintBucket className="w-5 h-5" /> 
  },
  { 
    name: "Photography", 
    percentage: 60, 
    category: "Abstract, object, product, sometimes landscape", 
    colorClass: "bg-gradient-to-r from-blue-400 to-blue-400/70",
    icon: <Camera className="w-5 h-5" /> 
  },
  { 
    name: "Films", 
    percentage: 30, 
    category: "Still learning but I have interest in Drama, Psychological", 
    colorClass: "bg-gradient-to-r from-green-400 to-green-400/70",
    icon: <Film className="w-5 h-5" /> 
  }
];

const techSkills: TechSkill[] = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "C", category: "Language" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "Vite", category: "Build Tool" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Tailwind", category: "CSS Framework" },
  { name: "Chakra UI", category: "UI Library" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Zustand", category: "State Management" },
  { name: "Axios", category: "HTTP Client" },
  { name: "Supabase", category: "Backend as a Service" },
  { name: "Firebase", category: "Backend as a Service" },
  { name: "MongoDB", category: "Database" },
  { name: "PlanetScale", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "Fireproof™ Notion Tables", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "Netlify", category: "Deployment" },
  { name: "Cloudflare", category: "Deployment" },
  { name: "Docker", category: "Container" },
  { name: "Heroku", category: "Deployment" },
  { name: "Railway", category: "Deployment" },
  { name: "Fly.io", category: "Deployment" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Version Control" },
  { name: "GitLab", category: "Version Control" },
  { name: "Postman", category: "API Tool" },
  { name: "Thunder Client", category: "API Tool" },
  { name: "Figma", category: "Design" },
  { name: "VS Code", category: "IDE" }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const groupedTechSkills: Record<string, TechSkill[]> = {};
  
  techSkills.forEach(skill => {
    if (!groupedTechSkills[skill.category]) {
      groupedTechSkills[skill.category] = [];
    }
    groupedTechSkills[skill.category].push(skill);
  });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        setSkillsAnimated(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-theme-black via-theme-black/95 to-theme-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(234,56,76,0.07)_0%,rgba(17,17,17,0)_70%)]"></div>
      </motion.div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
          <div className="h-1 w-20 bg-theme-red mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my technical and artistic skills built over years of exploration and practice.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold mb-8 border-l-4 border-theme-red pl-4"
          >
            Artistic Skills
          </motion.h3>
          
          <div className="space-y-8">
            {artisticSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="space-y-3 glass-panel p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <span className="mr-2 text-white/80">{skill.icon}</span>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono bg-white/10 px-2 py-0.5 rounded">{skill.percentage}%</span>
                </div>
                
                {/* Using custom progress bar that's visible */}
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full ${skill.colorClass}`}
                    style={{ width: `${skill.percentage}%` }}
                    initial={{ width: 0 }}
                    animate={skillsAnimated ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                  />
                </div>
                
                {/* Using shadcn/ui Progress component as a backup */}
                <div className="hidden">
                  <Progress 
                    value={skillsAnimated ? skill.percentage : 0} 
                    className="h-2" 
                  />
                </div>
                
                <p className="text-sm text-white/60 pt-1">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold mb-8 border-l-4 border-theme-violet pl-4"
        >
          Technical Skills
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(groupedTechSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.8 + catIndex * 0.1 }}
              className="glass-panel p-6"
            >
              <h4 className="text-lg font-medium mb-4 text-theme-violet">{category}</h4>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 1 + catIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm hoverable hover:bg-white/20 transition-colors"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
