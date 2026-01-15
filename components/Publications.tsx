
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaCertificate, FaBookOpen } from 'react-icons/fa';
import { publications } from '../data/portfolioData';

const Publications: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center space-x-4">
          <FaBookOpen className="text-[#2563EB]" />
          <span>Research <span className="text-[#2563EB]">Publications</span></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaFileAlt size={80} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 leading-snug">{pub.title}</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={pub.paperLink}
                  target="_blank"
                  className="px-6 py-3 bg-[#2563EB] text-white rounded-lg text-sm font-semibold hover:bg-[#38BDF8] transition-colors flex items-center space-x-2"
                >
                  <FaFileAlt /> <span>View Paper</span>
                </a>
                <a
                  href={pub.certificateLink}
                  target="_blank"
                  className="px-6 py-3 border border-white/10 text-white rounded-lg text-sm font-semibold hover:border-[#2563EB] transition-all flex items-center space-x-2"
                >
                  <FaCertificate /> <span>View Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
