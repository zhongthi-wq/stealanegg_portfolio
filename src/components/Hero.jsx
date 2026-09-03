import React, { useState, useEffect } from 'react';
import { Gamepad2, Sparkles, Trophy, Star, ChevronLeft, ChevronRight, MessageSquare, ExternalLink, ShieldCheck, Gift, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function Hero({ gameData, onNavigateTab }) {
  const [currentThumbIdx, setCurrentThumbIdx] = useState(0);

  const nextThumb = () => {
    sound.playPop();
    setCurrentThumbIdx((prev) => (prev + 1) % gameData.thumbnails.length);
  };

  const prevThumb = () => {
    sound.playPop();
    setCurrentThumbIdx((prev) => (prev - 1 + gameData.thumbnails.length) % gameData.thumbnails.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumbIdx((prev) => (prev + 1) % gameData.thumbnails.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [gameData.thumbnails.length]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Horizontal Thumbnail Showcase Banner */}
      <div className="relative rounded-3xl border-4 border-black overflow-hidden shadow-stud-card group bg-black">
        <div className="relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden">
          <img
            src={gameData.thumbnails[currentThumbIdx]}
            alt="Steal An Egg Gameplay"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />

          {/* Slider Navigation Buttons */}
          <button
            onClick={prevThumb}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/70 hover:bg-black text-white border-2 border-white/30 flex items-center justify-center font-bold active:scale-95 transition backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextThumb}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black/70 hover:bg-black text-white border-2 border-white/30 flex items-center justify-center font-bold active:scale-95 transition backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {gameData.thumbnails.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { sound.playPop(); setCurrentThumbIdx(idx); }}
                className={`h-2.5 rounded-full transition-all border border-black ${
                  idx === currentThumbIdx ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Live Game Status Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-500 text-black border-2 border-black rounded-xl font-game text-xs font-bold flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-black inline-block animate-ping"></span>
              OFFICIAL ROBLOX GAME
            </span>
            <span className="hidden sm:inline-block px-3 py-1 bg-black/80 text-yellow-300 border border-yellow-400/60 rounded-xl font-bubble text-xs font-bold backdrop-blur-sm">
              Next Update Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Main Game Header Card (Clean dark surface without inner stud clutter) */}
      <div className="bg-[#18202f] border-4 border-black rounded-3xl p-6 md:p-10 shadow-stud-card relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          
          {/* Game Icon */}
          <div className="relative flex-shrink-0 group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-tr from-roblox-cyan via-yellow-400 to-roblox-pink p-2 border-4 border-black shadow-stud-card group-hover:scale-105 transition-transform duration-300">
              <img 
                src={gameData.logo} 
                alt={gameData.title}
                className="w-full h-full object-cover rounded-2xl border-2 border-black bg-white"
              />
            </div>
            <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
              🥚
            </div>
            <div className="absolute -bottom-2 -left-2 px-3 py-1 bg-black/90 rounded-xl border-2 border-yellow-400 text-yellow-300 font-game text-xs">
              Roblox Arcade
            </div>
          </div>

          {/* Game Info & Description */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-2">
              <span className="px-3 py-1 bg-yellow-400 text-black border-2 border-black rounded-xl font-game text-xs tracking-wider uppercase shadow">
                🔥 Viral Pet Collection &amp; Speed Arcade
              </span>
            </div>
            
            <h1 className="game-text-lg text-4xl md:text-5xl lg:text-6xl text-white mb-2">
              {gameData.title} 🥚
            </h1>

            <p className="font-bubble text-lg md:text-xl text-yellow-300 font-bold mb-4 tracking-wide">
              Welcome to Steal An Egg!
            </p>

            <p className="font-sans text-slate-300 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              {gameData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href={gameData.playUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClaim()}
                className="btn-3d px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-black font-game text-base uppercase border-3 border-black flex items-center gap-2 font-bold shadow-lg"
              >
                <Gamepad2 className="w-5 h-5 text-black" />
                <span>PLAY NOW ON ROBLOX</span>
              </a>

              <a
                href={gameData.discordUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="btn-3d px-5 py-3.5 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-game text-base border-3 border-black flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Join Discord Community</span>
              </a>

              <button
                onClick={() => onNavigateTab('wiki')}
                className="btn-3d px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-yellow-300 font-game text-base border-3 border-black flex items-center gap-2"
              >
                <span>🐾 236 Pet Database</span>
              </button>
            </div>
          </div>
        </div>

        {/* How to Play Box */}
        <div className="mt-8 pt-8 border-t-3 border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="game-text text-xl md:text-2xl text-yellow-300">
              HOW TO PLAY
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gameData.howToPlay.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border-2 border-black rounded-2xl p-3.5 flex items-start gap-3 hover:border-slate-700 transition"
              >
                <span className="text-2xl flex-shrink-0">{step.icon}</span>
                <span className="font-bubble text-xs md:text-sm text-slate-200 font-bold leading-snug">
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          {/* Supported Devices Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 bg-slate-950 border-2 border-black rounded-2xl p-3 px-4 text-xs font-bubble text-slate-300">
            <span className="text-roblox-cyan font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Cross-Platform Multiplayer Enabled:
            </span>
            <div className="flex flex-wrap items-center gap-3 font-game text-slate-300">
              {gameData.platforms.map((p, i) => (
                <span key={i} className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t-3 border-slate-800">
          {gameData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/90 border-3 border-black rounded-2xl p-4 text-center shadow-md relative overflow-hidden group hover:border-slate-700 transition"
            >
              <div className={`game-text text-2xl md:text-3xl ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="font-bubble text-xs md:text-sm text-slate-400 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Explore Tabs Quick Navigation Cards */}
        <div className="mt-8 pt-8 border-t-3 border-slate-800">
          <h4 className="game-text text-lg text-white mb-4 flex items-center gap-2">
            <span>🚀</span> Quick Game Portals
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigateTab('wiki')}
              className="btn-3d bg-slate-900 hover:bg-slate-850 border-3 border-black rounded-2xl p-4 text-left group flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-1 block">🐾</span>
                <span className="game-text text-base text-yellow-300 block mb-1">Pet &amp; Egg Database</span>
                <p className="text-xs font-bubble text-slate-400">Search all 236 creatures, earning rates, and rarities.</p>
              </div>
              <span className="mt-3 text-xs font-game text-roblox-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Wiki <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigateTab('codes')}
              className="btn-3d bg-slate-900 hover:bg-slate-850 border-3 border-black rounded-2xl p-4 text-left group flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-1 block">🎁</span>
                <span className="game-text text-base text-roblox-green block mb-1">Active Promo Codes</span>
                <p className="text-xs font-bubble text-slate-400">Claim free speed potions, starter cash, and exclusive pet skins.</p>
              </div>
              <span className="mt-3 text-xs font-game text-roblox-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Get Codes <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigateTab('players')}
              className="btn-3d bg-slate-900 hover:bg-slate-850 border-3 border-black rounded-2xl p-4 text-left group flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-1 block">🛡️</span>
                <span className="game-text text-base text-roblox-pink block mb-1">Admin &amp; Creators</span>
                <p className="text-xs font-bubble text-slate-400">Meet the founders, developers, moderators, and verified media partners.</p>
              </div>
              <span className="mt-3 text-xs font-game text-roblox-pink flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Team <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
