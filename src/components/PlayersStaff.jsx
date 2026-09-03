import React, { useState } from 'react';
import { Shield, Crown, Sparkles, ExternalLink, Video, MessageSquare, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function PlayersStaff({ adminStaffAndCreators, verifiedBadge }) {
  const [subTab, setSubTab] = useState('staff'); // 'staff' | 'creators'
  const { owner, developers, mod, communityManager, testers, mediaCreators } = adminStaffAndCreators;

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
            onClick={() => { sound.playPop(); setSubTab('staff'); }}
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
            onClick={() => { sound.playPop(); setSubTab('creators'); }}
            className={`px-6 py-2.5 rounded-xl font-game text-sm transition-all flex items-center gap-2 ${
              subTab === 'creators'
                ? 'bg-rose-500 text-white shadow-md -translate-y-0.5'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <YoutubeIcon className="w-4 h-4 text-white" />
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
                <span>🧪</span> Official QA Testers
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
                        <span className="px-2 py-0.5 bg-fuchsia-600 text-white font-game text-[9px] rounded uppercase block w-fit mb-0.5">
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
                    <span className="text-fuchsia-400 font-game">QA VERIFIED</span>
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

      {/* ================= TAB 2: MEDIA CREATORS ================= */}
      {subTab === 'creators' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card">
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <YoutubeIcon className="w-6 h-6 text-red-500" />
                  <h3 className="game-text text-2xl md:text-3xl text-white">
                    OFFICIAL MEDIA CREATORS
                  </h3>
                </div>
                <p className="text-xs font-bubble text-slate-400">
                  Featured YouTube and TikTok content creators covering Steal An Egg
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 rounded-xl border border-yellow-400/60">
                <img src={verifiedBadge} alt="Badge" className="w-4 h-4" />
                <span className="text-xs font-game text-yellow-300">Verified Creators</span>
              </div>
            </div>

            {/* Creator Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mediaCreators.map((creator, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border-3 border-black rounded-2xl p-5 hover:border-red-500/70 transition flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border-3 border-black overflow-hidden p-1">
                          <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1">
                          <img
                            src={verifiedBadge}
                            alt="Verified"
                            className="w-5 h-5 drop-shadow"
                            title="Roblox Verified Creator"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-red-600 text-white font-game text-[10px] rounded uppercase">
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
                        {creator.robloxUsername && (
                          <span className="text-xs font-bubble text-slate-400 block">
                            Roblox: <b className="text-roblox-cyan">@{creator.robloxUsername}</b>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                      {creator.bio}
                    </p>
                  </div>

                  {/* Links Row */}
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

                    {creator.robloxUrl && (
                      <a
                        href={creator.robloxUrl}
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
        </div>
      )}

    </div>
  );
}
