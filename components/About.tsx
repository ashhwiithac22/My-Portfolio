
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-[#0B0F19] to-[#111827] pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-[#38BDF8] font-semibold tracking-widest uppercase">Developer + Data Background</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ashwitha C
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            M.Sc. student in Decision and Computing Sciences at Coimbatore Institute of Technology. 
            Passionate about building ML-driven, data-centric solutions and modern web applications that solve real-world problems.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/ashhwiithac22" target="_blank" className="text-3xl text-gray-400 hover:text-[#2563EB] transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ashwitha-c/" target="_blank" className="text-3xl text-gray-400 hover:text-[#2563EB] transition-colors"><FaLinkedin /></a>
            <a href="mailto:ashwithac22@gmail.com" className="text-3xl text-gray-400 hover:text-[#2563EB] transition-colors"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
             {/* Glow effect */}
            <div className="absolute -inset-4 bg-[#2563EB] rounded-full blur-3xl opacity-20"></div>
            <img
              src="\assests\Ashwitha_C.jpeg"
              alt="Ashwitha C"
              className="relative rounded-2xl object-cover w-full h-full border-2 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
