import React, { useState } from 'react';
import { Gamepad2, Copy, Check, Sparkles, Trophy, Star, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function Hero({ profile, socials }) {
  const [copied, setCopied] = useState(false);

  const copyDiscord = () => {
    sound.playCoin();
    navigator.clipboard.writeText(socials.discordUsername);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00d2ff', '#ff007f', '#ffe600', '#39ff14']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4">
      {/* Background Stud Ambience */}
      <div className="absolute inset-0 bg-studs opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-roblox-cyan/15 via-roblox-pink/15 to-roblox-yellow/15 blur-3xl -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Top Status & Level Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-slate-900/90 border-4 border-black p-3 rounded-2xl shadow-stud-card">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-yellow-400 text-black font-game text-sm rounded-lg border-2 border-black flex items-center gap-1 shadow-sm">
              <Trophy className="w-4 h-4 text-black" />
              <span>LVL {profile.level}</span>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center text-xs font-bubble text-slate-300 gap-4">
                <span className="font-bold text-yellow-300">BRAINROT ARCHITECT</span>
                <span className="text-slate-400 font-mono text-[11px]">{profile.currentExp} / {profile.maxExp} XP</span>
              </div>
              <div className="w-36 md:w-56 h-3 bg-slate-800 rounded-full border-2 border-black overflow-hidden mt-1 p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${(profile.currentExp / profile.maxExp) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border-2 border-emerald-500/50 rounded-xl font-bubble text-xs font-bold flex items-center gap-1.5 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              {profile.status}
            </span>
          </div>
        </div>

        {/* Main Hero Card */}
        <div className="bg-[#18202f] border-4 border-black rounded-3xl p-6 md:p-10 shadow-stud-card relative overflow-hidden">
          {/* Subtle stud texture on card header */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-[#1f293d] border-b-3 border-black bg-studs opacity-50 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Avatar Profile Frame */}
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-tr from-roblox-cyan via-purple-500 to-roblox-pink p-2 border-4 border-black shadow-stud-card group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-2xl bg-slate-900 border-2 border-black flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={profile.avatarUrl} 
                    alt={profile.displayName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 px-2 py-0.5 bg-yellow-400 text-black font-game text-[11px] rounded-md border border-black shadow">
                    PRO DEV
                  </div>
                </div>
              </div>
              {/* Floating Egg / Sparkle */}
              <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                🥚
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1 bg-black/80 rounded-xl border-2 border-roblox-cyan text-roblox-cyan font-game text-xs">
                @stealanegg
              </div>
            </div>

            {/* Profile Intro */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-2">
                <span className="px-3 py-1 bg-roblox-cyan/15 text-roblox-cyan border-2 border-roblox-cyan/40 rounded-xl font-game text-xs tracking-wider uppercase">
                  Roblox Creator Portfolio
                </span>
              </div>
              
              <h1 className="game-text-lg text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                {profile.displayName}
              </h1>

              <p className="font-bubble text-lg md:text-xl text-yellow-300 font-bold mb-4 tracking-wide">
                {profile.tagline}
              </p>

              <p className="font-sans text-slate-300 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                {profile.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#index"
                  onClick={() => sound.playPop()}
                  className="btn-3d px-6 py-3.5 rounded-2xl bg-gradient-to-r from-roblox-cyan to-blue-500 text-black font-game text-base uppercase border-3 border-black flex items-center gap-2 font-bold"
                >
                  <Gamepad2 className="w-5 h-5 text-black" />
                  <span>Open Project Index</span>
                </a>

                <button
                  onClick={copyDiscord}
                  className="btn-3d px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-game text-base border-3 border-black flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Copied: {socials.discordUsername}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-roblox-pink" />
                      <span>Copy Discord Tag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid with Stud look */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t-3 border-slate-800">
            {profile.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/80 border-3 border-black rounded-2xl p-4 text-center shadow-md relative overflow-hidden group hover:border-slate-600 transition"
              >
                <div className="absolute inset-0 bg-studs opacity-20 pointer-events-none" />
                <div className={`game-text text-2xl md:text-3xl ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="font-bubble text-xs md:text-sm text-slate-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
