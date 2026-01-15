
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Professional <span className="text-[#2563EB]">Certifications</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0F19] p-6 rounded-xl border border-white/5 flex items-center space-x-6 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all"
            >
              <div className="text-3xl text-[#2563EB]"><FaAward /></div>
              <div>
                <h4 className="font-bold text-white text-sm">{c.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{c.platform}</p>
                <a href={c.link} className="text-[#38BDF8] text-[10px] uppercase font-bold tracking-widest mt-2 inline-flex items-center space-x-1 hover:text-white">
                  <span>Verify</span> <FaExternalLinkAlt size={8} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
