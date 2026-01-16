
import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const CodingProfiles: React.FC = () => {
  const profiles = [
    { name: 'LeetCode', icon: <SiLeetcode />, color: '#FFA116', link: 'https://leetcode.com/u/ashhwiithac22/' },
    { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks />, color: '#2F8D46', link: 'https://www.geeksforgeeks.org/profile/ashwithacax7l' },
    { name: 'HackerRank', icon: <SiHackerrank />, color: '#2EC866', link: 'https://www.hackerrank.com/profile/ashwithacchandru' }
  ];

  return (
    <section className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16">Coding <span className="text-[#2563EB]">Profiles</span></h2>
        <div className="flex flex-wrap justify-center gap-8">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0B0F19] p-8 rounded-2xl border border-white/5 w-48 flex flex-col items-center space-y-4 hover:border-white/20 transition-all group"
            >
              <div className="text-5xl opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: profile.color }}>
                {profile.icon}
              </div>
              <span className="font-bold text-gray-300">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
