
import Layout from "../components/Layout";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
      </motion.div>
    </Layout>
  );
};

export default ServicesPage;
