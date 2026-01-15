
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0B0F19] py-16 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect <span className="text-[#2563EB]">With Me</span></h2>
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://www.linkedin.com/in/ashwitha-c/"
            target="_blank"
            className="text-4xl text-gray-400 hover:text-[#2563EB] hover:drop-shadow-[0_0_8px_#2563EB] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ashhwiithac22"
            target="_blank"
            className="text-4xl text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_white] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ashwithac22@gmail.com"
            className="text-4xl text-gray-400 hover:text-[#38BDF8] hover:drop-shadow-[0_0_8px_#38BDF8] transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ashwitha C. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
