import React, { useState, useEffect, useMemo } from 'react';
import { Search, Sparkles, Filter, X, Eye, ExternalLink, Trophy, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { compact, formatTime } from '../utils/formatters';
import { sound } from '../utils/audio';

export default function PetEggVault() {
  const [data, setData] = useState({ items: [], rarities: [] });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [kindFilter, setKindFilter] = useState(''); // '' | 'pet' | 'egg'
  const [rarityFilter, setRarityFilter] = useState('');
  const [selectedUids, setSelectedUids] = useState([]);
  const [inspectedUid, setInspectedUid] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        if (json.items && json.items.length > 0) {
          const first = json.items.find((it) => it.kind === 'pet') || json.items[0];
          setInspectedUid(`${first.category}-${first.kind}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load catalog data:', err);
        setLoading(false);
      });
  }, []);

  const items = data.items || [];
  const rarities = data.rarities || [];

  // Filtered items
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((it) => {
      if (kindFilter && it.kind !== kindFilter) return false;
      if (rarityFilter && it.rarityId !== rarityFilter) return false;
      if (q) {
        const matchName = it.name?.toLowerCase().includes(q);
        const matchCat = it.category?.toLowerCase().includes(q);
        const matchRarity = it.rarityName?.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchRarity) return false;
      }
      return true;
    });
  }, [items, kindFilter, rarityFilter, search]);

  // Map uid -> Item
  const itemMap = useMemo(() => {
    const map = new Map();
    for (const it of items) {
      map.set(`${it.category}-${it.kind}`, it);
    }
    return map;
  }, [items]);

  const activeItem = inspectedUid ? itemMap.get(inspectedUid) || items[0] : items[0];

  const handleTogglePick = (uid) => {
    sound.playPop();
    setInspectedUid(uid);
    setSelectedUids((prev) => {
      if (prev.includes(uid)) {
        return prev.filter((id) => id !== uid);
      } else {
        return [...prev, uid];
      }
    });
  };

  const clearAllSelected = () => {
    sound.playPop();
    setSelectedUids([]);
  };

  const handleClaimPet = () => {
    sound.playClaim();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00d2ff', '#ffe600', '#39ff14', '#ff007f']
    });
  };

  const selectedSet = useMemo(() => new Set(selectedUids), [selectedUids]);

  if (loading) {
    return (
      <div id="wiki" className="bg-[#18212e] border-4 border-black rounded-3xl p-12 text-center shadow-stud-card bg-studs">
        <div className="text-4xl animate-bounce mb-3">🥚</div>
        <div className="game-text text-xl text-yellow-300">Loading Pet &amp; Egg Wiki (236 items)...</div>
      </div>
    );
  }

  return (
    <div id="wiki" className="space-y-6 pt-4">
      {/* Top Filter Bar */}
      <div className="bg-[#151c27] border-4 border-black rounded-3xl p-4 md:p-6 shadow-stud-card relative overflow-hidden bg-studs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-black flex items-center justify-center text-xl shadow">
              🐾
            </div>
            <div>
              <h3 className="game-text text-xl md:text-2xl text-white">
                Pet &amp; Egg Official Wiki
              </h3>
              <p className="text-xs font-bubble text-slate-400">
                Official database of all 236 Pets &amp; Eggs with earning rates, incubation times, and 3D icons
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-black/70 border-2 border-roblox-cyan text-roblox-cyan font-game text-xs rounded-xl shadow">
              {filtered.length} / {items.length} Items
            </span>
            {selectedUids.length > 0 && (
              <button
                onClick={clearAllSelected}
                className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 border-2 border-red-500/50 font-bubble text-xs rounded-xl transition"
              >
                Clear Selected ({selectedUids.length})
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          {/* Search Box */}
          <div className="lg:col-span-5 relative">
            <input
              type="search"
              placeholder="Search pets, eggs, or species..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border-2 border-black rounded-xl px-3 py-2 pl-9 text-xs font-bubble text-white placeholder-slate-500 focus:outline-none focus:border-roblox-cyan shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Kind Filter Toggle */}
          <div className="lg:col-span-3 flex bg-slate-900 border-2 border-black rounded-xl p-1 gap-1">
            <button
              onClick={() => { sound.playPop(); setKindFilter(''); }}
              className={`flex-1 py-1.5 rounded-lg font-game text-xs transition ${
                kindFilter === '' ? 'bg-yellow-400 text-black shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              All (236)
            </button>
            <button
              onClick={() => { sound.playPop(); setKindFilter('pet'); }}
              className={`flex-1 py-1.5 rounded-lg font-game text-xs transition ${
                kindFilter === 'pet' ? 'bg-roblox-cyan text-black shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              🐾 Pets (118)
            </button>
            <button
              onClick={() => { sound.playPop(); setKindFilter('egg'); }}
              className={`flex-1 py-1.5 rounded-lg font-game text-xs transition ${
                kindFilter === 'egg' ? 'bg-roblox-pink text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              🥚 Eggs (118)
            </button>
          </div>

          {/* Rarity Select Dropdown */}
          <div className="lg:col-span-4">
            <select
              value={rarityFilter}
              onChange={(e) => { sound.playPop(); setRarityFilter(e.target.value); }}
              className="w-full bg-slate-900 border-2 border-black rounded-xl px-3 py-2 text-xs font-bubble text-white focus:outline-none focus:border-roblox-cyan shadow-inner"
            >
              <option value="">All Rarities ({rarities.length} tiers)</option>
              {rarities.map((r) => (
                <option key={r.id} value={r.id} style={{ color: r.color }}>
                  ● {r.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Catalog View: Grid on Left + Selected Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Scrollable Grid of Pet/Egg Cards (Cols 1-8) */}
        <div className="lg:col-span-8 bg-[#18212e] border-4 border-black rounded-3xl p-4 md:p-6 shadow-stud-card">
          <div className="flex items-center justify-between mb-4 border-b-2 border-slate-800 pb-3">
            <div className="font-game text-sm text-yellow-300 flex items-center gap-1.5">
              <span>🎒</span> Catalog Items ({filtered.length} visible)
            </div>
            <span className="text-[11px] font-bubble text-slate-400">
              Click any card to inspect or select
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[720px] overflow-y-auto pr-1">
            {filtered.map((item) => {
              const uid = `${item.category}-${item.kind}`;
              const isSelected = selectedSet.has(uid);
              const isInspected = inspectedUid === uid;
              const color = item.color || '#e8e8f2';
              const rateVal = item.earningRate;

              return (
                <div
                  key={uid}
                  onClick={() => handleTogglePick(uid)}
                  className={`rounded-2xl border-3 border-black overflow-hidden relative cursor-pointer group transition-all duration-150 select-none ${
                    isInspected
                      ? 'ring-3 ring-yellow-400 scale-[1.02] shadow-lg -translate-y-1'
                      : isSelected
                      ? 'ring-2 ring-roblox-cyan bg-slate-900/90'
                      : 'bg-slate-900/80 hover:bg-slate-850 hover:scale-[1.01] hover:-translate-y-0.5'
                  }`}
                  style={{
                    boxShadow: isInspected ? `0 0 16px ${color}66` : undefined,
                  }}
                >
                  {/* Card Header Tag */}
                  <div 
                    className="px-2 py-1 text-center border-b-2 border-black flex items-center justify-between text-[10px] font-game"
                    style={{ backgroundColor: `${color}25` }}
                  >
                    <span className="text-white truncate max-w-[90px]">{item.kind === 'pet' ? '🐾' : '🥚'} {item.kind.toUpperCase()}</span>
                    <span style={{ color }}>{item.rarityName}</span>
                  </div>

                  {/* Thumbnail Frame */}
                  <div 
                    className="h-28 flex flex-col items-center justify-center p-2 relative overflow-hidden bg-slate-950/60"
                    style={{ borderBottom: `2px solid ${color}33` }}
                  >
                    {item.img ? (
                      <img
                        src={`/${item.img}`}
                        alt={item.name}
                        loading="lazy"
                        className="max-h-20 max-w-20 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="text-3xl">🥚</div>
                    )}

                    {/* Rate $/s Badge */}
                    {rateVal != null && (
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/85 rounded-md border border-green-500/60 font-mono text-[10px] text-green-400 font-bold shadow">
                        +${compact(rateVal)}/s
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Name */}
                  <div className="p-2 text-center bg-slate-900">
                    <div 
                      className="font-game text-xs truncate"
                      style={{ color }}
                      title={item.name}
                    >
                      {item.name || item.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Inspector & Current Panel (Cols 9-12) */}
        <div className="lg:col-span-4 sticky top-20 space-y-4">
          {activeItem ? (
            <div className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 border-b-2 border-slate-800 pb-3">
                <span className="font-game text-xs uppercase tracking-wider text-yellow-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Item Inspector</span>
                </span>
                <span 
                  className="px-2.5 py-0.5 rounded-lg text-xs font-game uppercase border border-black font-bold"
                  style={{ backgroundColor: activeItem.color, color: '#000' }}
                >
                  {activeItem.rarityName}
                </span>
              </div>

              {/* Large Image Preview */}
              <div 
                className="h-56 bg-slate-950/80 rounded-2xl border-3 border-black p-4 flex items-center justify-center relative mb-4 shadow-inner overflow-hidden"
                style={{
                  boxShadow: `inset 0 0 40px ${activeItem.color}33`,
                }}
              >
                {activeItem.imgLarge || activeItem.img ? (
                  <img
                    src={`/${activeItem.imgLarge || activeItem.img}`}
                    alt={activeItem.name}
                    className="max-h-48 max-w-48 object-contain drop-shadow-2xl animate-pulse"
                    style={{
                      filter: `drop-shadow(0 0 16px ${activeItem.color}88)`,
                    }}
                  />
                ) : (
                  <div className="text-7xl">🥚</div>
                )}

                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 rounded font-game text-[10px] text-slate-300 border border-slate-700">
                  {activeItem.kind.toUpperCase()} #{activeItem.rarityNumber}
                </div>
              </div>

              {/* Item Info */}
              <h4 
                className="game-text text-2xl mb-1 text-center"
                style={{ color: activeItem.color }}
              >
                {activeItem.name}
              </h4>
              <p className="font-bubble text-xs text-slate-400 text-center mb-4">
                Category: <b className="text-white">{activeItem.category}</b>
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-2 bg-slate-900 border-2 border-black rounded-2xl p-3 mb-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Income Rate</span>
                  <span className="text-green-400 font-bold text-sm">
                    {activeItem.earningRate != null ? `+$${compact(activeItem.earningRate)}/s` : '—'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Model Weight</span>
                  <span className="text-yellow-300 font-bold text-sm">
                    {activeItem.modelWeight != null ? `${activeItem.modelWeight} pts` : '—'}
                  </span>
                </div>
                {activeItem.growthTime != null && (
                  <div className="col-span-2 pt-2 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] uppercase">Incubation (Growth)</span>
                    <span className="text-roblox-cyan font-bold">
                      {formatTime(activeItem.growthTime)}
                    </span>
                  </div>
                )}
                {activeItem.eggWeightKg != null && (
                  <div className="col-span-2 pt-1 flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] uppercase">Egg Weight</span>
                    <span className="text-slate-200 font-bold">
                      {activeItem.eggWeightKg} kg
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={handleClaimPet}
                className="w-full btn-3d py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-game text-sm uppercase border-2 border-black flex items-center justify-center gap-2 font-bold shadow-md"
              >
                <Trophy className="w-4 h-4 text-black" />
                <span>Collect in Game!</span>
              </button>
            </div>
          ) : null}

          {/* Selected Summary Card */}
          {selectedUids.length > 0 && (
            <div className="bg-[#151c27] border-3 border-black rounded-2xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="game-text text-sm text-roblox-cyan">
                  Selected: {selectedUids.length} items
                </span>
                <button
                  onClick={clearAllSelected}
                  className="text-xs text-red-400 hover:underline font-bubble"
                >
                  Clear all
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                {selectedUids.map((uid) => {
                  const it = itemMap.get(uid);
                  if (!it) return null;
                  return (
                    <span
                      key={uid}
                      onClick={() => setInspectedUid(uid)}
                      className="px-2 py-1 bg-slate-900 border border-black rounded-lg text-[11px] font-game flex items-center gap-1 cursor-pointer hover:border-yellow-400"
                      style={{ color: it.color }}
                    >
                      <span>{it.kind === 'pet' ? '🐾' : '🥚'}</span>
                      <span>{it.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
