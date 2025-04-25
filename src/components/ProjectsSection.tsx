
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: "music" | "tech" | "art";
  image: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gravity",
    category: "music",
    image: "https://cdn-images.dzcdn.net/images/cover/1a7306a6eeee9052ac23a366a79ed6c4/1900x1900-000000-80-0-0.jpg",
    description: "A fusion of celestial ambient sounds and a mid tempo rhythms designed to transport listeners to another dimension.",
    link: "https://open.spotify.com/track/7HuHPpLlvyBhFdyeLQM0JP?si=24656d5971064a2e"
  },
  {
    id: 2,
    title: "Browser Fingerprint Viewer",
    category: "tech",
    image: "/images/image_of_browser_whisper_app.png",
    description: "A Next.js application that displays your browser's fingerprints.",
    link: "https://github.com/DebdootManna/browser-whisperer-reveal"
  },
  {
    id: 3,
    title: "Digital Dreamscape",
    category: "art",
    image: "images/liquor_image.png",
    description: "Something different about this tea which looks like liquor...",
    link: "https://www.instagram.com/p/CinY973t4xz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    title: "Go On - EP",
    category: "music",
    image: "images/go_on_image_art.png",
    description: "An electronic album with soothing emotions with synths and ambience.",
    link: "https://soundcloud.com/themessengersmusic/sets/go-on"
  },
  {
    id: 5,
    title: "Neural Interface",
    category: "tech",
    image: "https://github.com/DebdootManna/Memory-Game/blob/main/Homepage_Image.png?raw=true",
    description: "Its that card flip game",
    link: "https://github.com/DebdootManna/Memory-Game"
  },
  {
    id: 6,
    title: "Solitary Star - Album",
    category: "music",
    image: "https://cdn-images.dzcdn.net/images/cover/1a7306a6eeee9052ac23a366a79ed6c4/1900x1900-000000-80-0-0.jpg",
    description: "My first ever album. This link is of Apple Music",
    link: "https://music.apple.com/us/album/solitary-star/1797310730"
  }
];

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
      className="group relative glass-panel overflow-hidden h-80 hoverable"
    >
      {/* Category Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
          project.category === "music" ? "bg-theme-red/80" : 
          project.category === "tech" ? "bg-theme-violet/80" : "bg-theme-navy/80"
        }`}>
          {project.category}
        </span>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-theme-black via-theme-black/70 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4 text-sm">{project.description}</p>
        
        {project.link && (
          <a 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-theme-red/80 rounded-md text-sm hover:bg-theme-red transition-colors duration-300"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "music" | "tech" | "art">("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.category === filter
  );

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-theme-red/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-theme-navy/5 blur-3xl"></div>
      </motion.div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Projects</h2>
          <div className="h-1 w-20 bg-theme-red mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Curated list of music production, visual arts, and tech projects.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "all" 
                ? "bg-theme-red text-white" 
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("music")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "music" 
                ? "bg-theme-red text-white" 
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            Music
          </button>
          <button
            onClick={() => setFilter("tech")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "tech" 
                ? "bg-theme-red text-white" 
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            Tech
          </button>
          <button
            onClick={() => setFilter("art")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "art" 
                ? "bg-theme-red text-white" 
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            Art
          </button>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              inView={isVisible}
            />
          ))}
        </div>
        
        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70">
            Mostly contributed in music production and other stuff can be found on my{" "}
            <a 
              href="https://www.instagram.com/themessengersmusic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-red hover:underline"
            >
              Instagram profile
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
