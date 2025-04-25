
import Layout from "../components/Layout";
import EducationSection from "../components/EducationSection";
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EducationSection />
      </motion.div>
    </Layout>
  );
};

export default EducationPage;
