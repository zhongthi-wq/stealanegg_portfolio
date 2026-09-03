import React from 'react';
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
  return (
    <div className="min-h-screen bg-[#0d121c] text-slate-100 flex flex-col font-sans selection:bg-roblox-cyan selection:text-black">
      {/* Top Game Navigation */}
      <Navbar gameData={gameData} />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-16">
        {/* Hero & How to Play */}
        <Hero gameData={gameData} />

        {/* 236-item Pet & Egg Official Wiki Database */}
        <section className="py-4 px-4 max-w-6xl mx-auto">
          <PetEggVault />
        </section>

        {/* Players, Leaderboards & Staff Hall of Fame */}
        <PlayersStaff staffAndPlayers={gameData.staffAndPlayers} />

        {/* Updates, Countdown & Sneak Peeks */}
        <UpdatesEvents 
          updates={gameData.updates} 
          sneakPeeks={gameData.sneakPeeks} 
        />

        {/* Active Promo Codes */}
        <CodesSection codes={gameData.activeCodes} />

        {/* FAQ Section */}
        <FAQSection faqList={gameData.faq} />
      </main>

      {/* Official Game Community Footer */}
      <Footer gameData={gameData} />
    </div>
  );
}
