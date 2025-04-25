
import { useEffect } from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import FunFacts from "../components/FunFacts";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Intersection Observer to handle section visibility
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Animation for skill bars
    const skillSection = document.getElementById('skills');
    const skillObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skillSection?.classList.add('skill-animated');
      }
    }, { threshold: 0.3 });

    if (skillSection) skillObserver.observe(skillSection);

    return () => {
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-theme-red z-50 origin-left"
        style={{ scaleX }}
      />
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ServicesSection />
      <ContactSection />
      <FunFacts />
    </Layout>
  );
};

export default Index;
