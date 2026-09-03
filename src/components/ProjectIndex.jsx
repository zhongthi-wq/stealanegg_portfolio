import React, { useState } from 'react';
import { Sparkles, Trophy, BookOpen, ExternalLink, CheckCircle, Search, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function ProjectIndex({ projects, categories, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id);
  const [claimedReward, setClaimedReward] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleSlotClick = (project) => {
    sound.playPop();
    setSelectedProjectId(project.id);
  };

  const handleClaimReward = () => {
    sound.playClaim();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00d2ff', '#ffe600', '#39ff14', '#ff007f']
    });
    setClaimedReward(true);
    setTimeout(() => setClaimedReward(false), 3000);
  };

  // Color mapping for rarity backgrounds (inspired by Pet Index slots)
  const getRarityBackground = (rarity) => {
    switch (rarity) {
      case 'brainrot':
        return 'bg-gradient-to-b from-fuchsia-500 to-pink-600 border-pink-400';
      case 'legendary':
        return 'bg-gradient-to-b from-amber-400 to-yellow-600 border-yellow-300';
      case 'epic':
        return 'bg-gradient-to-b from-purple-500 to-indigo-700 border-purple-400';
      case 'rare':
        return 'bg-gradient-to-b from-blue-500 to-cyan-600 border-blue-400';
      default:
        return 'bg-gradient-to-b from-slate-600 to-slate-800 border-slate-400';
    }
  };

  return (
    <section id="index" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Trophy className="w-4 h-4 text-black" />
            <span>Interactive Game Vault</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            PROJECT INDEX
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Khám phá các sản phẩm game, pet voxel 3D, hệ thống UI & Script Luau theo giao diện chuẩn Pet Index!
          </p>
        </div>

        {/* Outer Roblox Window Frame */}
        <div className="bg-[#1f2735] border-4 border-black rounded-3xl overflow-hidden shadow-stud-card relative">
          
          {/* Top Blue Stud Bar (Signature Roblox Window Header) */}
          <div className="bg-gradient-to-r from-[#0099ff] via-[#00c8ff] to-[#0088ff] border-b-4 border-black px-4 py-3 flex items-center justify-between relative bg-studs">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🥚</span>
              <h3 className="game-text text-2xl md:text-3xl text-white tracking-wide">
                Pet & Project Index
              </h3>
            </div>
            
            {/* Red X Close Button (Decorative Roblox UI Element) */}
            <button 
              onClick={() => sound.playPop()} 
              className="w-10 h-10 bg-gradient-to-b from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 active:translate-y-1 rounded-xl border-3 border-black flex items-center justify-center font-game text-2xl text-white shadow-md transition-all"
              title="Classic Roblox UI"
            >
              ✕
            </button>
          </div>

          {/* Sub-header Filter Tabs */}
          <div className="bg-[#151c27] border-b-3 border-black p-3 flex flex-wrap items-center justify-between gap-3">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playPop();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl font-game text-xs md:text-sm border-2 border-black transition-all ${
                    activeCategory === cat.id
                      ? 'bg-yellow-400 text-black shadow-md -translate-y-0.5'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm dự án..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900 border-2 border-black rounded-xl px-3 py-1.5 pl-8 text-xs font-bubble text-white placeholder-slate-500 focus:outline-none focus:border-roblox-cyan w-40 md:w-56"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Main Index Content: Left Slots Grid + Right Inspector Panel */}
          <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#18212e] bg-studs">
            
            {/* LEFT: The Slots Grid (Cols 1-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {/* Category banner / Biome indicator */}
              <div className="flex items-center justify-between bg-slate-900/90 border-3 border-black rounded-xl px-3 py-2">
                <span className="font-game text-sm text-roblox-lime flex items-center gap-1.5">
                  <span>🌲</span> Biome: Forest & Brainrot Haven
                </span>
                <span className="font-bubble text-xs text-slate-400 font-bold">
                  {filteredProjects.length} Projects Available
                </span>
              </div>

              {/* Slot Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredProjects.map((project) => {
                  const isSelected = project.id === selectedProjectId;
                  return (
                    <div
                      key={project.id}
                      onClick={() => handleSlotClick(project)}
                      className={`cursor-pointer rounded-2xl border-3 border-black overflow-hidden relative group transition-all duration-150 ${
                        isSelected 
                          ? 'ring-4 ring-yellow-400 scale-[1.03] shadow-lg -translate-y-1' 
                          : 'hover:scale-[1.02] hover:-translate-y-0.5 opacity-90 hover:opacity-100'
                      }`}
                    >
                      {/* Slot Header with Title */}
                      <div className="bg-black/75 px-1 py-1 text-center border-b-2 border-black">
                        <span className="game-text text-[11px] sm:text-xs text-white truncate block">
                          {project.title.split(':')[0]}
                        </span>
                      </div>

                      {/* Slot Artwork Background */}
                      <div className={`h-24 sm:h-28 ${getRarityBackground(project.rarity)} p-2 flex items-center justify-center relative overflow-hidden bg-studs`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg border border-black/50 shadow-inner group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <div className="text-4xl drop-shadow-md">
                            {project.icon || '🥚'}
                          </div>
                        )}

                        {/* Rarity Pill Badge */}
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded border border-white/20 text-[9px] font-game text-yellow-300 uppercase">
                          {project.rarity}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Mystery / Locked slots to mimic in-game pet index feel */}
                <div className="rounded-2xl border-3 border-black overflow-hidden bg-slate-900/60 opacity-60 flex flex-col items-center justify-center p-2 text-center h-[126px]">
                  <span className="game-text text-xl text-slate-500">???</span>
                  <span className="font-bubble text-[10px] text-slate-400 mt-1">Next Project</span>
                  <span className="font-mono text-[9px] text-slate-600">Locked</span>
                </div>
              </div>

              {/* Progress Bar (Exact replica of "4/8" with bat icon from screenshot) */}
              <div className="bg-slate-900 border-3 border-black rounded-2xl p-2.5 flex items-center gap-3 shadow-md">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1 text-xs font-game">
                    <span className="text-slate-300">Vault Progress</span>
                    <span className="text-white text-sm">{filteredProjects.length} / {projects.length + 1}</span>
                  </div>
                  <div className="h-4 bg-slate-800 rounded-full border-2 border-black overflow-hidden p-0.5 bg-studs">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 rounded-full shadow-inner"
                      style={{ width: `${(filteredProjects.length / (projects.length + 1)) * 100}%` }}
                    />
                  </div>
                </div>
                {/* Bat Icon from user image */}
                <div className="text-2xl px-2 py-1 bg-slate-800 rounded-xl border-2 border-black" title="Classic Melee Bat">
                  🏏
                </div>
              </div>
            </div>

            {/* RIGHT: Inspector & Preview Box (Cols 8-12) */}
            <div className="lg:col-span-5 bg-slate-900/95 border-3 border-black rounded-2xl p-4 flex flex-col justify-between shadow-lg relative">
              <div>
                {/* Big Preview Area */}
                <div className="h-48 sm:h-56 bg-slate-950/80 border-3 border-black rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden mb-4 bg-studs">
                  {selectedProject.image ? (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="text-7xl animate-pulse">🥚</div>
                  )}

                  {/* Rarity & Category floating tag */}
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-black/85 border border-yellow-400/80 rounded-lg">
                    <span className="game-text text-xs text-yellow-300 tracking-wider">
                      {selectedProject.rarityName || 'RARE'}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <h4 className="game-text text-2xl text-white mb-1">
                  {selectedProject.title}
                </h4>
                <p className="font-bubble text-xs text-roblox-cyan font-bold mb-2">
                  Role: {selectedProject.role}
                </p>
                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {selectedProject.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 font-bubble text-[11px] rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rewards Box & CLAIM Button (Faithful to screenshot) */}
              <div className="border-t-2 border-slate-800 pt-3">
                <div className="flex items-center justify-between mb-3 text-xs font-game text-slate-300">
                  <span className="text-yellow-300">Client Perks:</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 bg-green-950/80 border border-green-500/50 px-2 py-0.5 rounded text-green-400">
                      💵 $100 Value
                    </span>
                    <span className="flex items-center gap-1 bg-blue-950/80 border border-blue-500/50 px-2 py-0.5 rounded text-blue-400">
                      👟 +420 Speed
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* Big White CLAIM / VIEW Button */}
                  <button
                    onClick={() => {
                      sound.playClaim();
                      onSelectProject(selectedProject);
                    }}
                    className="flex-1 btn-3d py-3 rounded-xl bg-white hover:bg-slate-100 text-black font-game text-base md:text-lg uppercase border-3 border-black shadow-md flex items-center justify-center gap-2"
                  >
                    <span>INSPECT & VIEW!</span>
                    <Info className="w-5 h-5 text-black" />
                  </button>

                  <button
                    onClick={handleClaimReward}
                    className="btn-3d px-4 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-game text-base border-3 border-black shadow-md flex items-center justify-center"
                    title="Claim Fun Reward"
                  >
                    {claimedReward ? '🎉 CLAIMED!' : '🎁 CLAIM!'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Big Status Bar (Unlocked: 58/106 styled) */}
          <div className="bg-[#121824] border-t-4 border-black p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 border-2 border-black flex items-center justify-center text-white shadow">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="game-text text-xl md:text-2xl text-white tracking-wide">
                  Unlocked: {projects.length}/{projects.length}
                </span>
                <span className="block text-xs font-bubble text-roblox-green font-bold">
                  100% Vault Catalog Complete • Ready for Next Commission
                </span>
              </div>
            </div>

            <a
              href="#shop"
              onClick={() => sound.playPop()}
              className="btn-3d px-5 py-2.5 rounded-xl bg-gradient-to-r from-roblox-green to-emerald-500 text-black font-game text-sm uppercase border-2 border-black font-bold flex items-center gap-1.5"
            >
              <span>Order Custom Game / Asset</span>
              <span>⚡</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
