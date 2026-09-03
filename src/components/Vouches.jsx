import React from 'react';
import { MessageSquare, Star, Heart } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Vouches({ vouches }) {
  return (
    <section id="vouches" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-pink text-white border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Heart className="w-4 h-4 fill-white" />
            <span>Trusted by Roblox Creators</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            CLIENT VOUCHES & REVIEWS
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Nhận xét thực tế từ các studio owner và nhà phát triển đã từng hợp tác
          </p>
        </div>

        {/* Vouches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vouches.map((vouch, index) => (
            <div
              key={index}
              onMouseEnter={() => sound.playPop()}
              className="bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 bg-studs opacity-20 pointer-events-none" />

              <div>
                {/* User Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border-2 border-black overflow-hidden flex-shrink-0">
                    <img
                      src={vouch.avatar}
                      alt={vouch.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="game-text text-lg text-white">
                      {vouch.author}
                    </h4>
                    <span className="font-bubble text-xs text-roblox-cyan font-bold block">
                      {vouch.role}
                    </span>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(vouch.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs font-bubble text-slate-400 ml-2">{vouch.date}</span>
                </div>

                {/* Comment Text */}
                <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4 italic">
                  "{vouch.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-3 border-t-2 border-slate-800 flex items-center justify-between text-[11px] font-game text-emerald-400">
                <span>✓ VERIFIED VOUCH</span>
                <span className="text-slate-500 font-mono">DevForum / Discord</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
