import React, { useState } from 'react';
import { Volume2, VolumeX, Gamepad2, Gift, HelpCircle, Users, Bell, BookOpen, Home } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ gameData, activeTab, onTabChange }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) sound.playPop();
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'wiki', label: 'Pet & Egg Wiki', icon: BookOpen, badge: '236' },
    { id: 'players', label: 'Admin & Media', icon: Users },
    { id: 'updates', label: 'Updates & Events', icon: Bell },
    { id: 'codes', label: 'Codes', icon: Gift, badge: 'Free' },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const handleItemClick = (id) => {
    sound.playPop();
    onTabChange(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-yellow-400 border-b-4 border-black px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Game Logo & Brand */}
        <button 
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <img 
            src={gameData.logo} 
            alt={gameData.title}
            className="w-11 h-11 rounded-2xl border-3 border-black shadow-md object-cover group-hover:scale-105 transition-transform bg-white"
          />
          <div>
            <span className="font-game text-xl md:text-2xl text-black block leading-tight tracking-wide drop-shadow-sm">
              STEAL AN EGG
            </span>
            <span className="text-[10px] md:text-xs text-slate-900 font-extrabold tracking-widest uppercase block font-bubble">
              Official Game Hub
            </span>
          </div>
        </button>

        {/* Tab Navigation Menu (Separate Pages/Views) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-yellow-500/60 p-1.5 rounded-2xl border-2 border-black/40">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-1.5 rounded-xl font-game text-xs transition-all flex items-center gap-1.5 relative select-none ${
                  isActive
                    ? 'bg-slate-950 text-yellow-300 shadow-md border-2 border-black -translate-y-0.5'
                    : 'text-black hover:bg-yellow-300/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-yellow-300' : 'text-slate-900'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] font-bubble px-1.5 py-0.2 rounded-md font-bold uppercase ${
                    isActive ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile & Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute audio" : "Enable audio"}
            className="w-10 h-10 rounded-xl bg-yellow-300 hover:bg-yellow-200 border-2 border-black flex items-center justify-center text-black active:scale-95 transition shadow-sm"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-black" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Big Play Button on Roblox */}
          <a
            href={gameData.playUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClaim()}
            className="btn-3d px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-game text-xs md:text-sm uppercase tracking-wider border-2 border-black flex items-center gap-1.5 font-bold shadow-md"
          >
            <span>Play Game</span>
            <Gamepad2 className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Mobile Tab Bar (Visible on mobile/tablet) */}
      <div className="lg:hidden mt-2.5 pt-2 border-t-2 border-black/30 flex items-center gap-1 overflow-x-auto pb-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`px-3 py-1.5 rounded-xl font-game text-[11px] whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-slate-950 text-yellow-300 border-black shadow'
                  : 'bg-yellow-300/80 text-black border-black/20 hover:bg-yellow-200'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
