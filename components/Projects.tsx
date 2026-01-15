
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartBar } from 'react-icons/fa';
// Fix: Import Project type from the dedicated types file
import { Project } from '../types';
import { developerProjects, dataProjects } from '../data/portfolioData';

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#2563EB]/50 transition-all flex flex-col h-full"
  >
    <div className="p-8 flex-grow">
      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#38BDF8] transition-colors">
        {project.title}
      </h4>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-[10px] uppercase font-bold tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 bg-[#0B0F19]/50 border-t border-white/5 flex space-x-4 mt-auto">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
      >
        <FaGithub /> <span>Code</span>
      </a>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <FaExternalLinkAlt /> <span>Demo</span>
        </a>
      )}
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-[#2563EB]">Work</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my most impactful projects across full-stack development and data science.
          </p>
        </div>

        {/* Developer Projects */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <FaCode className="text-[#2563EB] text-2xl" />
            <h3 className="text-2xl font-bold">Developer Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerProjects.map((p, i) => <ProjectCard key={p.title} project={p} idx={i} />)}
          </div>
        </div>

        {/* Data Projects */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <FaChartBar className="text-[#38BDF8] text-2xl" />
            <h3 className="text-2xl font-bold">Data Science Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProjects.map((p, i) => <ProjectCard key={p.title} project={p} idx={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
