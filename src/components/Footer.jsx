import React from 'react';
import { Gamepad2, MessageSquare, ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Footer({ gameData }) {
  return (
    <footer className="pt-16 pb-12 px-4 bg-[#0d121c] border-t-4 border-black relative bg-studs">
      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Main Banner CTA */}
        <div className="bg-gradient-to-br from-[#18212e] via-[#151c27] to-[#101620] border-4 border-black rounded-3xl p-8 md:p-10 shadow-stud-card text-center relative overflow-hidden bg-studs">
          <img
            src={gameData.logo}
            alt={gameData.title}
            className="w-16 h-16 rounded-2xl border-3 border-black mx-auto mb-4 shadow-md object-cover"
          />

          <h3 className="game-text-lg text-3xl md:text-5xl text-white mb-2">
            JOIN THE EGG STEALING COMMUNITY!
          </h3>
          <p className="font-bubble text-slate-300 text-sm md:text-base max-w-lg mx-auto mb-6">
            Raid enemy bases, trade with thousands of players, and compete for the #1 spot on the global leaderboards!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={gameData.playUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClaim()}
              className="btn-3d px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 text-black font-game text-sm uppercase border-2 border-black font-bold flex items-center gap-2 shadow"
            >
              <Gamepad2 className="w-4 h-4 text-black" />
              <span>Play Steal An Egg on Roblox</span>
            </a>

            <a
              href={gameData.discordUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playPop()}
              className="btn-3d px-6 py-3 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-game text-sm uppercase border-2 border-black font-bold flex items-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Official Discord Server</span>
            </a>

            <a
              href={gameData.wikiUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playPop()}
              className="btn-3d px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-yellow-300 font-game text-sm border-2 border-black flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Fandom Community Wiki</span>
            </a>
          </div>
        </div>

        {/* Links & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-slate-800 pt-6 text-xs font-bubble text-slate-400">
          <div className="flex items-center gap-4">
            <a
              href={gameData.robloxGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              Roblox Group
            </a>
            <span>•</span>
            <a
              href={gameData.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-roblox-cyan transition"
            >
              Discord Community
            </a>
            <span>•</span>
            <a
              href={gameData.wikiUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-roblox-pink transition"
            >
              Fandom Wiki
            </a>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-500">
            © {new Date().getFullYear()} Steal An Egg. Built for players on Desktop, Console, Mobile &amp; Tablet.
          </div>
        </div>

      </div>
    </footer>
  );
}
