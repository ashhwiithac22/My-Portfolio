import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFileDownload } from 'react-icons/fa';
import { Resume } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Education & <span className="text-[#2563EB]">Resume</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#2563EB]/50 transition-all"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#2563EB]/20 rounded-lg">
                <FaGraduationCap className="text-[#2563EB] text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Academic Profile</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-white font-medium">
                  M.Sc. Decision & Computing Sciences
                </h4>
                <p className="text-[#38BDF8]">
                  Coimbatore Institute of Technology
                </p>
                <p className="text-gray-500">2023 - 2028 (Integrated)</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-gray-400 leading-relaxed">
                  Focusing on advanced computing, data analytics, and decision systems.
                  Current CGPA: <span className="text-white font-bold">9.25</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Resume</h3>

            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden bg-[#111827] p-8 rounded-xl border border-white/5 hover:border-[#2563EB] transition-all flex flex-col items-center justify-center space-y-4"
            >
              <FaFileDownload className="text-4xl text-[#2563EB] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-center uppercase tracking-wider text-sm">
                View Resume
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
