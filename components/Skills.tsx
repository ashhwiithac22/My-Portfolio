
import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Technical <span className="text-[#2563EB]">Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0B0F19] p-8 rounded-2xl border border-white/5 hover:border-[#2563EB]/30 group transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-[#38BDF8] border-b border-white/5 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#111827] text-gray-300 text-sm rounded-full border border-white/5 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
