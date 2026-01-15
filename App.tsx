
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import CodingProfiles from './components/CodingProfiles';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <Navbar />
      <main className="space-y-0">
        <About />
        <Education />
        <Skills />
        <Interests />
        <Projects />
        <Hackathons />
        <Certifications />
        <Publications />
        <CodingProfiles />
      </main>
      <Footer />
    </div>
  );
};

export default App;
