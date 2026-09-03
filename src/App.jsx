import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PetEggVault from './components/PetEggVault';
import PlayersStaff from './components/PlayersStaff';
import UpdatesEvents from './components/UpdatesEvents';
import CodesSection from './components/CodesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { gameData } from './data/gameData';

export default function App() {
  // Tabs: 'home' | 'wiki' | 'players' | 'updates' | 'codes' | 'faq'
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'wiki', 'players', 'updates', 'codes', 'faq'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'wiki', 'players', 'updates', 'codes', 'faq'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-roblox-cyan selection:text-black relative">
      
      {/* Global Background with Tiled Stud Texture at 75% Opacity (Not overused) */}
      <div 
        className="fixed inset-0 bg-studs opacity-75 pointer-events-none -z-10" 
        style={{ opacity: 0.75 }}
      />

      {/* Vibrant Yellow Game Navbar */}
      <Navbar 
        gameData={gameData} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      {/* Main Content Area: Render Only Active Tab (Separated Pages/Views) */}
      <main className="flex-1 py-6 px-4 max-w-6xl mx-auto w-full">
        {activeTab === 'home' && (
          <Hero 
            gameData={gameData} 
            onNavigateTab={handleTabChange} 
          />
        )}

        {activeTab === 'wiki' && (
          <div className="animate-fadeIn">
            <PetEggVault />
          </div>
        )}

        {activeTab === 'players' && (
          <div className="animate-fadeIn">
            <PlayersStaff staffAndPlayers={gameData.staffAndPlayers} />
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="animate-fadeIn">
            <UpdatesEvents 
              updates={gameData.updates} 
              sneakPeeks={gameData.sneakPeeks} 
            />
          </div>
        )}

        {activeTab === 'codes' && (
          <div className="animate-fadeIn">
            <CodesSection codes={gameData.activeCodes} />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="animate-fadeIn">
            <FAQSection faqList={gameData.faq} />
          </div>
        )}
      </main>

      {/* Community Footer */}
      <Footer gameData={gameData} />
    </div>
  );
}
