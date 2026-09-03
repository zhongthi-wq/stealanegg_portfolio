import React, { useState, useEffect } from 'react';
import { Shield, Crown, Sparkles, ExternalLink, MessageSquare, Flame, FlaskConical, Gift, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

export default function PlayersStaff({ adminStaffAndCreators, verifiedBadge }) {
  const [subTab, setSubTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '').toLowerCase();
      if (['creators', 'itslossi', 'lossi', 'lossinion', 'media', 'tiktok', 'creator'].includes(h)) {
        return 'creators';
      }
    }
    return 'staff';
  });

  const [creatorCategory, setCreatorCategory] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '').toLowerCase();
      if (h === 'tiktok') return 'tiktok';
      if (h === 'youtube') return 'youtube';
    }
    return 'all';
  });

  const [copiedLink, setCopiedLink] = useState(false);
  const [highlightCard, setHighlightCard] = useState(false);

  const { owner, developers, mod, communityManager, testers, featuredYoutubers, mediaCreators, vipCreator, tiktokCreators } = adminStaffAndCreators;

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const h = window.location.hash.replace('#', '').toLowerCase();
      if (['creators', 'itslossi', 'lossi', 'lossinion', 'media', 'tiktok', 'creator'].includes(h)) {
        setSubTab('creators');
        if (h === 'tiktok') {
          setCreatorCategory('tiktok');
        }
        if (h === 'itslossi' || h === 'lossi' || h === 'lossinion' || h === 'creators') {
          setHighlightCard(true);
          setTimeout(() => {
            const el = document.getElementById('itslossi');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 250);
          setTimeout(() => setHighlightCard(false), 4000);
        }
      } else if (['staff', 'admin'].includes(h)) {
        setSubTab('staff');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleShareLink = () => {
    sound.playClaim();
    const url = `${window.location.origin}${window.location.pathname}#itslossi`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00d2ff', '#ff007f', '#ffe600', '#39ff14']
    });
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
          <Shield className="w-4 h-4 text-black" />
          <span>Official Team &amp; Partners</span>
        </div>
        <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
          ADMIN, STAFF &amp; MEDIA CREATORS
        </h2>
        <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
          Meet the core development team, staff moderators, and verified content creators!
        </p>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-slate-900 border-3 border-black rounded-2xl p-1.5 flex gap-2 shadow-md">
          <button
            onClick={() => { sound.playPop(); setSubTab('staff'); window.location.hash = 'staff'; }}
            className={`px-6 py-2.5 rounded-xl font-game text-sm transition-all flex items-center gap-2 ${
              subTab === 'staff'
                ? 'bg-yellow-400 text-black shadow-md -translate-y-0.5'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Admin &amp; Staff Team</span>
          </button>

          <button
            onClick={() => { sound.playPop(); setSubTab('creators'); window.location.hash = 'creators'; }}
            className={`px-6 py-2.5 rounded-xl font-game text-sm transition-all flex items-center gap-2 ${
              subTab === 'creators'
                ? 'bg-rose-500 text-white shadow-md -translate-y-0.5'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TikTokIcon className="w-4 h-4 text-white" />
            <span>Media Creators</span>
            <img src={verifiedBadge} alt="Verified" className="w-4 h-4 inline-block" />
          </button>
        </div>
      </div>

      {/* ================= TAB 1: ADMIN & STAFF ================= */}
      {subTab === 'staff' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* 1. OWNER HIGHLIGHT (RED & CROWN) */}
          <div className="bg-gradient-to-r from-red-950/40 via-[#18212e] to-red-950/40 border-4 border-red-500 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(239,68,68,0.25)] relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              
              {/* Owner Avatar with Crown & Verified */}
              <div className="relative flex-shrink-0 group">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-slate-900 border-4 border-red-500 overflow-hidden p-1 shadow-lg">
                  <img
                    src={owner.avatar}
                    alt={owner.username}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Crown Icon */}
                <div className="absolute -top-4 -right-3 text-3xl animate-bounce" title="Owner Crown">
                  👑
                </div>
                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2">
                  <img
                    src={verifiedBadge}
                    alt="Roblox Verified"
                    className="w-7 h-7 drop-shadow-md"
                    title="Roblox Verified"
                  />
                </div>
              </div>

              {/* Owner Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-xl font-game text-xs uppercase ${owner.badgeColor} border-2 border-black flex items-center gap-1.5 shadow`}>
                    <span>👑</span>
                    <span>{owner.badge}</span>
                  </span>
                  <span className="px-2.5 py-0.5 bg-red-500/20 text-red-300 border border-red-500/50 rounded-lg text-xs font-bubble flex items-center gap-1">
                    <img src={verifiedBadge} alt="Verified" className="w-3.5 h-3.5" />
                    Verified Game Founder
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="game-text text-3xl md:text-4xl text-white">
                    {owner.username}
                  </h3>
                  <span className="font-bubble text-sm text-red-400 font-bold">
                    (@{owner.username})
                  </span>
                </div>

                <p className="font-sans text-xs md:text-sm text-slate-300 max-w-2xl mb-4 leading-relaxed">
                  {owner.bio}
                </p>

                {/* Roblox Profile Link */}
                <a
                  href={owner.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playPop()}
                  className="btn-3d inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-game text-xs uppercase border-2 border-black shadow"
                >
                  <span>View Roblox Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. DEVELOPERS (BLUE THEME) */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-800 pb-2">
              <span className="game-text text-2xl text-blue-400 flex items-center gap-2">
                <span>💻</span> Developers
              </span>
              <span className="text-xs font-bubble text-slate-400">Luau Gameplay &amp; Systems Engineers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {developers.map((dev, idx) => (
                <div
                  key={idx}
                  className="bg-[#18212e] border-4 border-blue-500/80 rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-slate-900 border-3 border-blue-500 overflow-hidden p-1 shadow-md">
                        <img
                          src={dev.avatar}
                          alt={dev.username}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      {dev.verified && (
                        <div className="absolute -bottom-1 -right-1">
                          <img
                            src={verifiedBadge}
                            alt="Verified"
                            className="w-5 h-5 drop-shadow"
                            title="Verified Developer"
                          />
                        </div>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-lg font-game text-[10px] uppercase bg-blue-600 text-white border border-black shadow-sm">
                          {dev.badge}
                        </span>
                      </div>
                      <h4 className="game-text text-xl text-white truncate flex items-center gap-1.5">
                        <span>{dev.username}</span>
                        {dev.verified && (
                          <img src={verifiedBadge} alt="Verified" className="w-4 h-4 inline-block" />
                        )}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-bubble text-slate-400">
                        {dev.discordId && (
                          <span className="flex items-center gap-1 text-[#5865F2]">
                            <MessageSquare className="w-3 h-3" />
                            {dev.discordId}
                          </span>
                        )}
                        {dev.isDiscordOnly && (
                          <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded text-[10px]">
                            Discord
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                    {dev.bio}
                  </p>

                  <div className="pt-3 border-t-2 border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-game text-blue-400">
                      ✓ CORE DEVELOPER
                    </span>
                    {dev.robloxUrl && (
                      <a
                        href={dev.robloxUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bubble text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                      >
                        Roblox Profile <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. MODERATOR (GREEN) & COMMUNITY MANAGER (CYAN) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Moderator */}
            <div className="bg-[#18212e] border-4 border-emerald-500 rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 border-3 border-emerald-500 overflow-hidden p-1 shadow-md">
                      <img
                        src={mod.avatar}
                        alt={mod.username}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      <img src={verifiedBadge} alt="Verified" className="w-5 h-5 drop-shadow" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="px-2.5 py-0.5 rounded-lg font-game text-[10px] uppercase bg-emerald-600 text-white border border-black shadow-sm block w-fit mb-1">
                      {mod.badge}
                    </span>
                    <h4 className="game-text text-xl text-white truncate flex items-center gap-1.5">
                      <span>{mod.username}</span>
                      <img src={verifiedBadge} alt="Verified" className="w-4 h-4" />
                    </h4>
                    <span className="text-xs font-bubble text-[#5865F2] flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {mod.discordId}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                  {mod.bio}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-game text-emerald-400">
                  🛡️ GAME MODERATOR
                </span>
                <a
                  href={mod.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bubble text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                >
                  Roblox Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Community Manager */}
            <div className="bg-[#18212e] border-4 border-cyan-400 rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 border-3 border-cyan-400 overflow-hidden p-1 shadow-md">
                      <img
                        src={communityManager.avatar}
                        alt={communityManager.username}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      <img src={verifiedBadge} alt="Verified" className="w-5 h-5 drop-shadow" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="px-2.5 py-0.5 rounded-lg font-game text-[10px] uppercase bg-cyan-600 text-white border border-black shadow-sm block w-fit mb-1">
                      {communityManager.badge}
                    </span>
                    <h4 className="game-text text-xl text-white truncate flex items-center gap-1.5">
                      <span>{communityManager.username}</span>
                      <img src={verifiedBadge} alt="Verified" className="w-4 h-4" />
                    </h4>
                    <span className="text-xs font-bubble text-[#5865F2] flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {communityManager.discordId}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                  {communityManager.bio}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-game text-cyan-400">
                  📢 COMMUNITY LEAD
                </span>
                <a
                  href={communityManager.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bubble text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                >
                  Roblox Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* 4. TESTER LIST (PINK/PURPLE THEME) */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-800 pb-2">
              <span className="game-text text-2xl text-fuchsia-400 flex items-center gap-2">
                <FlaskConical className="w-6 h-6 text-fuchsia-400" />
                <span>Official QA Testers</span>
              </span>
              <span className="text-xs font-bubble text-slate-400">Balancing, Bug Hunting &amp; Pre-Release Testing</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {testers.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#18212e] border-3 border-fuchsia-500/80 rounded-2xl p-4 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 border-2 border-fuchsia-500 overflow-hidden p-0.5 flex-shrink-0">
                        <img
                          src={t.avatar}
                          alt={t.username}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="px-2 py-0.5 bg-fuchsia-600 text-white font-game text-[9px] rounded uppercase flex items-center gap-1 w-fit mb-0.5">
                          <FlaskConical className="w-2.5 h-2.5" />
                          {t.badge}
                        </span>
                        <div className="game-text text-base text-white truncate">
                          {t.displayName || t.username}
                        </div>
                        <span className="text-[11px] font-bubble text-[#5865F2] flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {t.discordId}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3">
                      {t.bio}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-fuchsia-400 font-game flex items-center gap-1">
                      <FlaskConical className="w-3 h-3" />
                      QA VERIFIED
                    </span>
                    {t.robloxUrl && (
                      <a
                        href={t.robloxUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-white hover:underline flex items-center gap-1 font-bubble"
                      >
                        Roblox <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ================= TAB 2: MEDIA CREATORS & TIKTOK STARS ================= */}
      {subTab === 'creators' && (
        <div id="creators" className="space-y-8 animate-fadeIn">
          
          {/* USER'S VIP CREATOR PROFILE SHOWCASE (@itslossi) */}
          {vipCreator && (
            <div 
              id="itslossi"
              className={`bg-gradient-to-r from-teal-950/60 via-[#18212e] to-pink-950/60 border-4 rounded-3xl p-6 md:p-8 shadow-[0_0_35px_rgba(6,182,212,0.3)] relative overflow-hidden transition-all duration-500 ${
                highlightCard 
                  ? 'border-yellow-400 ring-4 ring-yellow-400 ring-offset-4 ring-offset-black scale-[1.01]' 
                  : 'border-cyan-400'
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                
                {/* Avatar with Verified & Glow */}
                <div className="relative flex-shrink-0 group">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-3xl bg-slate-950 border-4 border-cyan-400 overflow-hidden p-1 shadow-2xl">
                    <img
                      src={vipCreator.avatar}
                      alt={vipCreator.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <img
                      src={verifiedBadge}
                      alt="Verified"
                      className="w-8 h-8 drop-shadow-xl"
                      title="Roblox Verified Creator"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 text-2xl bg-black/80 rounded-xl p-1 border border-cyan-400 animate-bounce">
                    🎁
                  </div>
                </div>

                {/* VIP Info */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                    <span className="px-3 py-1 rounded-xl bg-fuchsia-600 text-white font-game text-xs uppercase flex items-center gap-1.5 shadow border border-black">
                      <FlaskConical className="w-3.5 h-3.5" />
                      <span>OFFICIAL QA TESTER</span>
                    </span>

                    <span className="px-3 py-1 rounded-xl bg-yellow-400 text-black font-game text-xs uppercase flex items-center gap-1.5 shadow border border-black">
                      <img src={verifiedBadge} alt="Verified" className="w-3.5 h-3.5" />
                      <span>VERIFIED CREATOR</span>
                    </span>

                    <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-game text-xs uppercase flex items-center gap-1.5 shadow border border-black">
                      <Gift className="w-3.5 h-3.5" />
                      <span>IN-GAME ITEM SPAWNER &amp; EGG GIFTER PERK</span>
                    </span>

                    <span className="px-3 py-1 rounded-xl bg-black text-white font-game text-xs uppercase flex items-center gap-1.5 shadow border border-pink-500">
                      <TikTokIcon className="w-3.5 h-3.5 text-pink-400" />
                      <span>FAMOUS TIKTOK STREAMER</span>
                    </span>
                  </div>

                  {/* Name & Handles */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-2">
                    <h3 className="game-text text-3xl md:text-4xl text-white flex items-center gap-2">
                      <span>{vipCreator.name}</span>
                      <img src={verifiedBadge} alt="Verified" className="w-6 h-6 inline-block" />
                    </h3>
                    <span className="font-bubble text-sm text-cyan-300 font-bold bg-cyan-950/60 px-2.5 py-0.5 rounded-lg border border-cyan-500/50">
                      Display: {vipCreator.displayName}
                    </span>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-slate-200 max-w-3xl mb-5 leading-relaxed">
                    {vipCreator.bio}
                  </p>

                  {/* Action Buttons: TikTok Accounts, Roblox & Share Direct Link */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <a
                      href={vipCreator.tiktokUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playPop()}
                      className="btn-3d px-4 py-2.5 rounded-xl bg-black hover:bg-slate-900 text-white font-game text-xs md:text-sm border-2 border-pink-500 flex items-center gap-2 shadow-lg"
                    >
                      <TikTokIcon className="w-4 h-4 text-pink-400" />
                      <span>TikTok: {vipCreator.tiktokHandle}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    {vipCreator.tiktokUrl2 && (
                      <a
                        href={vipCreator.tiktokUrl2}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playPop()}
                        className="btn-3d px-4 py-2.5 rounded-xl bg-black hover:bg-slate-900 text-white font-game text-xs md:text-sm border-2 border-pink-500 flex items-center gap-2 shadow-lg"
                      >
                        <TikTokIcon className="w-4 h-4 text-pink-400" />
                        <span>TikTok: {vipCreator.tiktokHandle2}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    )}

                    <a
                      href={vipCreator.robloxUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playPop()}
                      className="btn-3d px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-roblox-cyan font-game text-xs md:text-sm border-2 border-black flex items-center gap-2 shadow"
                    >
                      <span>Roblox Profile (@{vipCreator.robloxUsername})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={handleShareLink}
                      className="btn-3d px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-game text-xs md:text-sm border-2 border-black flex items-center gap-2 font-bold shadow"
                      title="Copy Direct Link to this profile"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>Copied Share Link!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 text-black" />
                          <span>Share Direct Profile Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Category Filter for Media: All / TikTok / YouTube */}
          <div className="flex justify-center">
            <div className="bg-slate-900 border-2 border-black rounded-2xl p-1 flex gap-1.5 shadow">
              <button
                onClick={() => { sound.playPop(); setCreatorCategory('all'); }}
                className={`px-4 py-1.5 rounded-xl font-game text-xs transition ${
                  creatorCategory === 'all' ? 'bg-yellow-400 text-black shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Creators
              </button>
              <button
                onClick={() => { sound.playPop(); setCreatorCategory('tiktok'); }}
                className={`px-4 py-1.5 rounded-xl font-game text-xs transition flex items-center gap-1.5 ${
                  creatorCategory === 'tiktok' ? 'bg-black text-pink-400 border border-pink-500 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <TikTokIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>TikTok Stars ({tiktokCreators.length})</span>
              </button>
              <button
                onClick={() => { sound.playPop(); setCreatorCategory('youtube'); }}
                className={`px-4 py-1.5 rounded-xl font-game text-xs transition flex items-center gap-1.5 ${
                  creatorCategory === 'youtube' ? 'bg-red-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-white" />
                <span>YouTube Titans ({featuredYoutubers.length + mediaCreators.length})</span>
              </button>
            </div>
          </div>

          {/* SECTION: TIKTOK CREATORS CATEGORY */}
          {(creatorCategory === 'all' || creatorCategory === 'tiktok') && (
            <div className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <TikTokIcon className="w-6 h-6 text-pink-400" />
                    <h3 className="game-text text-2xl md:text-3xl text-white">
                      TOP TIKTOK ROBLOX CREATORS
                    </h3>
                  </div>
                  <p className="text-xs font-bubble text-slate-300 mt-0.5">
                    10+ famous TikTok creators sharing Steal An Egg memes, speed runs &amp; pet giveaways
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-black/80 rounded-xl border border-pink-500/50">
                  <TikTokIcon className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-game text-pink-300">TikTok Category</span>
                </div>
              </div>

              {/* TikTok Creators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tiktokCreators.map((tiktoker, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border-3 border-black rounded-2xl p-4 hover:border-pink-500/70 transition flex flex-col justify-between shadow group"
                  >
                    <div>
                      <div className="flex items-start gap-3.5 mb-3">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-slate-950 border-2 border-black overflow-hidden p-0.5 shadow">
                            <img
                              src={tiktoker.avatar}
                              alt={tiktoker.name}
                              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                            />
                          </div>
                          {tiktoker.verified && (
                            <div className="absolute -bottom-1 -right-1">
                              <img src={verifiedBadge} alt="Verified" className="w-4 h-4 drop-shadow" />
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="px-2 py-0.5 bg-black text-pink-400 border border-pink-500/40 font-game text-[9px] rounded uppercase flex items-center gap-1">
                              <TikTokIcon className="w-2.5 h-2.5" />
                              TikTok
                            </span>
                            <span className="text-[10px] font-bubble text-slate-400">
                              {tiktoker.followers}
                            </span>
                          </div>
                          <h4 className="game-text text-base text-white truncate flex items-center gap-1">
                            <span>{tiktoker.name}</span>
                            {tiktoker.verified && (
                              <img src={verifiedBadge} alt="Verified" className="w-3.5 h-3.5 inline-block" />
                            )}
                          </h4>
                          <span className="text-xs font-mono text-pink-400 block font-bold">
                            {tiktoker.handle}
                          </span>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3">
                        {tiktoker.bio}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <a
                          href={tiktoker.tiktokUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playPop()}
                          className="btn-3d px-3 py-1.5 rounded-xl bg-black hover:bg-slate-900 text-white font-game text-xs flex items-center gap-1.5 border border-pink-500 shadow"
                        >
                          <TikTokIcon className="w-3.5 h-3.5 text-pink-400" />
                          <span>{tiktoker.tiktokUrl2 ? '@itslossi' : 'Open TikTok'}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>

                        {tiktoker.tiktokUrl2 && (
                          <a
                            href={tiktoker.tiktokUrl2}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => sound.playPop()}
                            className="btn-3d px-3 py-1.5 rounded-xl bg-black hover:bg-slate-900 text-white font-game text-xs flex items-center gap-1.5 border border-pink-500 shadow"
                          >
                            <TikTokIcon className="w-3.5 h-3.5 text-pink-400" />
                            <span>@lossinion</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        )}
                      </div>

                      {tiktoker.hasRoblox && tiktoker.robloxUrl ? (
                        <a
                          href={tiktoker.robloxUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bubble text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                        >
                          Roblox Profile <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[10px] font-bubble text-slate-500">TikTok Partner</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: YOUTUBE STARS CATEGORY */}
          {(creatorCategory === 'all' || creatorCategory === 'youtube') && (
            <div className="space-y-6">
              {/* Famous YouTubers Who Played & Reviewed */}
              <div className="bg-[#18212e] border-4 border-yellow-400/80 rounded-3xl p-6 shadow-stud-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-800 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      <h3 className="game-text text-2xl md:text-3xl text-yellow-300">
                        FEATURED YOUTUBERS (PLAYED &amp; REVIEWED)
                      </h3>
                    </div>
                    <p className="text-xs font-bubble text-slate-300 mt-0.5">
                      Top YouTube icons who explored, raided, and reviewed Steal An Egg
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-300 border border-yellow-400/40 rounded-xl font-game text-xs flex items-center gap-1.5 shadow">
                      <img src={verifiedBadge} alt="Badge" className="w-4 h-4" />
                      <span>YouTube Titans</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {featuredYoutubers.map((star, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900 border-3 border-black rounded-2xl p-5 hover:border-yellow-400/70 transition flex flex-col justify-between shadow-md group"
                    >
                      <div>
                        <div className="flex items-start gap-4 mb-3">
                          <div className="relative flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-slate-950 border-3 border-black overflow-hidden p-0.5 shadow">
                              <img
                                src={star.avatar}
                                alt={star.name}
                                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1">
                              <img
                                src={verifiedBadge}
                                alt="Verified"
                                className="w-5 h-5 drop-shadow"
                                title="Verified Creator"
                              />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-1">
                              <span className="px-2 py-0.5 bg-red-600 text-white font-game text-[9px] rounded uppercase flex items-center gap-1">
                                <YoutubeIcon className="w-2.5 h-2.5" />
                                YouTube
                              </span>
                              <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 font-bubble text-[9px] rounded font-bold">
                                {star.subscribers}
                              </span>
                            </div>
                            <h4 className="game-text text-lg text-white truncate flex items-center gap-1.5">
                              <span>{star.name}</span>
                              <img src={verifiedBadge} alt="Verified" className="w-3.5 h-3.5 inline-block" />
                            </h4>
                            <span className="text-[11px] font-game text-emerald-400 block">
                              ✓ {star.tag}
                            </span>
                          </div>
                        </div>

                        <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                          {star.bio}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800">
                        <a
                          href={star.channelUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playPop()}
                          className="w-full btn-3d py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-game text-xs flex items-center justify-center gap-1.5 border border-black shadow"
                        >
                          <YoutubeIcon className="w-4 h-4 text-white" />
                          <span>Watch on YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Creator Partners */}
              <div className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card">
                <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <YoutubeIcon className="w-6 h-6 text-red-500" />
                      <h3 className="game-text text-2xl md:text-3xl text-white">
                        COMMUNITY CREATOR PARTNERS
                      </h3>
                    </div>
                    <p className="text-xs font-bubble text-slate-400">
                      Dedicated video creators covering Steal An Egg
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {mediaCreators.map((creator, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900 border-3 border-black rounded-2xl p-5 hover:border-red-500/70 transition flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="flex items-start gap-4 mb-3">
                          <div className="relative flex-shrink-0">
                            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border-3 border-black overflow-hidden p-1">
                              <img
                                src={creator.avatar}
                                alt={creator.name}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1">
                              <img src={verifiedBadge} alt="Verified" className="w-5 h-5 drop-shadow" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-0.5 bg-red-600 text-white font-game text-[10px] rounded uppercase flex items-center gap-1">
                                <YoutubeIcon className="w-2.5 h-2.5" />
                                {creator.platform}
                              </span>
                              <span className="px-2 py-0.5 bg-black/60 text-yellow-300 font-bubble text-[10px] rounded border border-yellow-400/40">
                                PARTNER
                              </span>
                            </div>
                            <h4 className="game-text text-xl text-white truncate flex items-center gap-1.5">
                              <span>{creator.name}</span>
                              <img src={verifiedBadge} alt="Verified" className="w-4 h-4 inline-block" />
                            </h4>
                            {creator.robloxUsername ? (
                              <span className="text-xs font-bubble text-slate-400 block">
                                Roblox: <b className="text-roblox-cyan">@{creator.robloxUsername}</b>
                              </span>
                            ) : (
                              <span className="text-xs font-bubble text-red-400 flex items-center gap-1">
                                <YoutubeIcon className="w-3 h-3" />
                                Official YouTube Channel
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                          {creator.bio}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                        <a
                          href={creator.channelUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playPop()}
                          className="btn-3d px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-game text-xs flex items-center gap-1.5 border border-black shadow"
                        >
                          <YoutubeIcon className="w-3.5 h-3.5" />
                          <span>Visit Channel</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        {creator.hasRoblox && creator.robloxUrl ? (
                          <a
                            href={creator.robloxUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-bubble text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                          >
                            Roblox Profile <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-[11px] font-bubble text-slate-500 flex items-center gap-1">
                            <YoutubeIcon className="w-3 h-3 text-red-500" />
                            YouTube Partner
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
