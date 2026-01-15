
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';
import { hackathons } from '../data/portfolioData';

const Hackathons: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center justify-center space-x-4">
          <FaTrophy className="text-[#2563EB]" />
          <span>Hackathons & <span className="text-[#2563EB]">Competitions</span></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((h, idx) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl border border-white/5 flex flex-col space-y-4 hover:border-[#2563EB] transition-all"
            >
              <h4 className="text-xl font-bold text-white">{h.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{h.description}</p>
              <a
                href={h.certificateLink}
                className="inline-flex items-center space-x-2 text-[#38BDF8] hover:text-[#2563EB] transition-colors text-sm font-semibold"
              >
                <FaCertificate /> <span>View Recognition</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
