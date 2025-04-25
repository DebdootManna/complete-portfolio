
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
