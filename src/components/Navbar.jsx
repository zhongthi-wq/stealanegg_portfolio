import React, { useState } from 'react';
import { Volume2, VolumeX, Gamepad2, Gift, HelpCircle, Users, Bell, BookOpen, Home } from 'lucide-react';
import { sound } from '../utils/audio';

function DiscordIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

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

        {/* Tab Navigation Menu */}
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

        {/* Action Controls */}
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

          {/* Discord Button for Everyone to Join */}
          <a
            href={gameData.discordUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playPop()}
            className="btn-3d px-3.5 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-game text-xs md:text-sm border-2 border-black flex items-center gap-1.5 shadow-md"
            title="Join Official Discord Server"
          >
            <DiscordIcon className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Discord</span>
          </a>

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
