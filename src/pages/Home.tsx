
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
    </Layout>
  );
};

export default Home;
