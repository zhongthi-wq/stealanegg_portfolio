import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectIndex from './components/ProjectIndex';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import ShopCommission from './components/ShopCommission';
import Vouches from './components/Vouches';
import ContactFooter from './components/ContactFooter';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#0d121c] text-slate-100 flex flex-col font-sans selection:bg-roblox-cyan selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 space-y-12">
        <Hero 
          profile={portfolioData.devProfile} 
          socials={portfolioData.socials} 
        />

        <ProjectIndex 
          projects={portfolioData.projects} 
          categories={portfolioData.categories}
          onSelectProject={(project) => setActiveModalProject(project)}
        />

        <Skills 
          skills={portfolioData.devProfile.skills} 
        />

        <ShopCommission 
          commissionData={portfolioData.commissions} 
          onOrderClick={(pkg) => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <Vouches 
          vouches={portfolioData.vouches} 
        />
      </main>

      {/* Footer & Socials */}
      <ContactFooter 
        socials={portfolioData.socials}
        profile={portfolioData.devProfile}
      />

      {/* Interactive Detail Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </div>
  );
}
