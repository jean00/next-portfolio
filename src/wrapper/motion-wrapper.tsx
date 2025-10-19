"use client";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      className="px-6 sm:px-15"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
};

export default MotionWrapper;
