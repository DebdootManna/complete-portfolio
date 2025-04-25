
import Layout from "../components/Layout";
import SkillsSection from "../components/SkillsSection";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkillsSection />
      </motion.div>
    </Layout>
  );
};

export default SkillsPage;
