
import Layout from "../components/Layout";
import ProjectsSection from "../components/ProjectsSection";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectsSection />
      </motion.div>
    </Layout>
  );
};

export default ProjectsPage;
