
import React from 'react';
import { motion } from 'framer-motion';
import { interests } from '../data/portfolioData';

const Interests: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Beyond the <span className="text-[#2563EB]">Terminal</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {interests.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] px-8 py-10 rounded-2xl border border-white/5 flex flex-col items-center space-y-4 min-w-[160px]"
            >
              <span className="text-4xl">{interest.icon}</span>
              <span className="font-medium text-gray-300">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
