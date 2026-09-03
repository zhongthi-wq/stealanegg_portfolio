import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Gamepad2, Gift, HelpCircle, Users, Bell, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ gameData }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) sound.playPop();
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    sound.playPop();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#121824]/95 backdrop-blur-md border-b-4 border-black px-4 py-2.5 shadow-lg bg-studs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Game Logo & Title */}
        <a 
          href="#" 
          onClick={() => sound.playPop()}
          className="flex items-center gap-3 group"
        >
          <img 
            src={gameData.logo} 
            alt={gameData.title}
            className="w-11 h-11 rounded-2xl border-3 border-black shadow-md object-cover group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="game-text text-xl md:text-2xl text-yellow-300 block leading-tight tracking-wide drop-shadow">
              STEAL AN EGG
            </span>
            <span className="text-[10px] md:text-xs text-roblox-cyan font-bold tracking-widest uppercase block font-bubble">
              Official Game Hub
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (English 100%) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border-2 border-black">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            Home
          </a>
          <a
            href="#wiki"
            onClick={(e) => handleNavClick(e, 'wiki')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-yellow-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <span>🐾</span>
            Pet &amp; Egg Wiki
          </a>
          <a
            href="#players"
            onClick={(e) => handleNavClick(e, 'players')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-roblox-cyan hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5" />
            Players &amp; Staff
          </a>
          <a
            href="#updates"
            onClick={(e) => handleNavClick(e, 'updates')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-roblox-pink hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Bell className="w-3.5 h-3.5" />
            Updates &amp; Events
          </a>
          <a
            href="#codes"
            onClick={(e) => handleNavClick(e, 'codes')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-roblox-green hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Gift className="w-3.5 h-3.5" />
            Codes
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, 'faq')}
            className="px-3 py-1.5 rounded-xl font-game text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute sound" : "Enable sound"}
            className="w-10 h-10 rounded-xl bg-slate-800 border-2 border-black flex items-center justify-center text-slate-200 hover:text-white hover:bg-slate-700 active:scale-95 transition"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-roblox-cyan" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-500" />
            )}
          </button>

          {/* Big Play on Roblox Button */}
          <a
            href={gameData.playUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClaim()}
            className="btn-3d px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-black font-game text-xs md:text-sm uppercase tracking-wider border-2 border-black flex items-center gap-1.5 font-bold shadow-md"
          >
            <span>Play Game</span>
            <Gamepad2 className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </header>
  );
}
