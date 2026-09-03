import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, MessageSquare, Gamepad2, ShoppingBag } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ onOpenContact }) {
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
    <header className="sticky top-0 z-40 bg-[#121824]/95 backdrop-blur-md border-b-4 border-black px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo with Stud styling */}
        <a 
          href="#" 
          onClick={(e) => { sound.playPop(); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-roblox-cyan to-roblox-purple border-3 border-black flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">
            🥚
          </div>
          <div>
            <span className="game-text text-xl md:text-2xl text-yellow-300 block leading-tight tracking-wide drop-shadow">
              STEAL AN EGG
            </span>
            <span className="text-[10px] md:text-xs text-roblox-cyan font-bold tracking-widest uppercase block font-bubble">
              Roblox Studio & Art Vault
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border-2 border-black">
          <a
            href="#index"
            onClick={(e) => handleNavClick(e, 'index')}
            className="px-3.5 py-1.5 rounded-xl font-game text-sm text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Gamepad2 className="w-4 h-4 text-roblox-cyan" />
            Project Index
          </a>
          <a
            href="#vault"
            onClick={(e) => handleNavClick(e, 'vault')}
            className="px-3.5 py-1.5 rounded-xl font-game text-sm text-yellow-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <span>🐾</span>
            Pet &amp; Egg Vault
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            className="px-3.5 py-1.5 rounded-xl font-game text-sm text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-roblox-yellow" />
            Skills
          </a>
          <a
            href="#shop"
            onClick={(e) => handleNavClick(e, 'shop')}
            className="px-3.5 py-1.5 rounded-xl font-game text-sm text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-roblox-green" />
            Commissions
          </a>
          <a
            href="#vouches"
            onClick={(e) => handleNavClick(e, 'vouches')}
            className="px-3.5 py-1.5 rounded-xl font-game text-sm text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4 text-roblox-pink" />
            Vouches
          </a>
        </nav>

        {/* Action Controls */}
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

          {/* Hire / Commission CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-3d px-4 py-2 rounded-xl bg-gradient-to-r from-roblox-cyan to-blue-500 text-black font-game text-sm uppercase tracking-wider border-2 border-black flex items-center gap-1.5 font-bold"
          >
            <span>Hire Me</span>
            <span className="text-base">🚀</span>
          </a>
        </div>
      </div>
    </header>
  );
}
