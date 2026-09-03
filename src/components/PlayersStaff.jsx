import React, { useState } from 'react';
import { Users, Trophy, Shield, Crown, Sparkles, Award, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

export default function PlayersStaff({ staffAndPlayers }) {
  const [activeTab, setActiveTab] = useState('staff'); // 'staff' | 'leaderboard'
  const { staff, leaderboard } = staffAndPlayers;

  return (
    <section id="players" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Trophy className="w-4 h-4 text-black" />
            <span>Community Hall of Fame</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            PLAYERS &amp; STAFF
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Meet the developers behind Steal An Egg and check out the top global egg raiders!
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="bg-slate-900 border-3 border-black rounded-2xl p-1.5 flex gap-2 shadow-md">
            <button
              onClick={() => { sound.playPop(); setActiveTab('staff'); }}
              className={`px-6 py-2.5 rounded-xl font-game text-sm transition-all flex items-center gap-2 ${
                activeTab === 'staff'
                  ? 'bg-roblox-cyan text-black shadow-md -translate-y-0.5'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Official Staff &amp; Admins</span>
            </button>

            <button
              onClick={() => { sound.playPop(); setActiveTab('leaderboard'); }}
              className={`px-6 py-2.5 rounded-xl font-game text-sm transition-all flex items-center gap-2 ${
                activeTab === 'leaderboard'
                  ? 'bg-yellow-400 text-black shadow-md -translate-y-0.5'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Global Top Stealers</span>
            </button>
          </div>
        </div>

        {/* TAB 1: OFFICIAL STAFF & ADMINS */}
        {activeTab === 'staff' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
            {staff.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sound.playPop()}
                className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Avatar Frame */}
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-900 border-3 border-black overflow-hidden p-1.5 mb-4 shadow-md group">
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Rank Badge */}
                  <div className="text-center mb-2">
                    <span className={`inline-block px-3 py-1 rounded-xl border-2 font-game text-[11px] uppercase tracking-wide ${member.color} bg-black/60`}>
                      {member.badge}
                    </span>
                  </div>

                  {/* Username & Role */}
                  <div className="text-center mb-3">
                    <h4 className="game-text text-xl text-white">
                      {member.username}
                    </h4>
                    <span className="font-bubble text-xs text-roblox-cyan font-bold block">
                      {member.role}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="font-sans text-xs text-slate-300 text-center leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Verified Tag */}
                <div className="pt-3 border-t-2 border-slate-800 text-center">
                  <span className="text-[10px] font-game text-emerald-400">
                    ✓ VERIFIED GAME DEVELOPER
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: GLOBAL LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <div className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card animate-fadeIn">
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h3 className="game-text text-2xl text-white">
                  TOP EGG RAIDERS LEADERBOARD
                </h3>
              </div>
              <span className="text-xs font-bubble text-slate-400">
                Live Server Ranks • Resets Weekly
              </span>
            </div>

            <div className="space-y-3">
              {leaderboard.map((player) => (
                <div
                  key={player.rank}
                  className={`border-3 border-black rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition ${
                    player.rank === 1
                      ? 'bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-slate-900 border-yellow-400'
                      : player.rank === 2
                      ? 'bg-slate-900/90 border-slate-400'
                      : player.rank === 3
                      ? 'bg-slate-900/90 border-amber-600'
                      : 'bg-slate-900/70 hover:bg-slate-900'
                  }`}
                >
                  {/* Left: Rank + Name */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center font-game text-lg ${
                      player.rank === 1
                        ? 'bg-yellow-400 text-black shadow'
                        : player.rank === 2
                        ? 'bg-slate-300 text-black'
                        : player.rank === 3
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      #{player.rank}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="game-text text-lg text-white">{player.name}</span>
                        <span className="px-2 py-0.5 bg-black/60 rounded border border-white/20 text-[10px] font-game text-yellow-300">
                          {player.badge}
                        </span>
                      </div>
                      <span className="text-xs font-bubble text-slate-400">
                        Favorite Companion: <b className="text-roblox-cyan">{player.favoritePet}</b>
                      </span>
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div className="flex items-center gap-6 text-center sm:text-right">
                    <div>
                      <span className="font-bubble text-[10px] text-slate-400 uppercase block">Eggs Stolen</span>
                      <span className="game-text text-xl text-yellow-400">
                        🥚 {player.eggsStolen}
                      </span>
                    </div>
                    <div>
                      <span className="font-bubble text-[10px] text-slate-400 uppercase block">Treadmill Speed</span>
                      <span className="game-text text-xl text-roblox-cyan flex items-center gap-1 justify-center sm:justify-end">
                        <Zap className="w-4 h-4 text-roblox-cyan" />
                        {player.speedLevel}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
