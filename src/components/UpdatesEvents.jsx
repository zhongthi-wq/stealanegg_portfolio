import React, { useState, useEffect } from 'react';
import { Bell, Sparkles, Clock, Calendar, ChevronRight, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

export default function UpdatesEvents({ updates, sneakPeeks }) {
  // Countdown to next weekly update (e.g. 2 days, 14 hours from current time)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="updates" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-pink text-white border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Bell className="w-4 h-4 text-white" />
            <span>Game News &amp; Roadmaps</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            UPDATES &amp; EVENTS
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Stay ahead with live patch notes, event schedules, and leaked sneak peeks!
          </p>
        </div>

        {/* Live Update Countdown Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border-4 border-black rounded-3xl p-6 shadow-stud-card relative overflow-hidden bg-studs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300 font-game text-sm uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Next Major Update Dropping</span>
              </div>
              <h3 className="game-text text-2xl md:text-3xl text-white mb-1">
                WEEKLY EVENT UPDATE
              </h3>
              <p className="text-xs font-bubble text-slate-300">
                New Divine eggs, treadmill rebirth multipliers, and limited-time raid bosses!
              </p>
            </div>

            {/* Countdown Digits */}
            <div className="flex items-center gap-3">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Mins" },
                { val: timeLeft.seconds, label: "Secs" },
              ].map((t, idx) => (
                <div 
                  key={idx}
                  className="w-16 h-20 sm:w-20 sm:h-22 bg-slate-900 border-3 border-black rounded-2xl flex flex-col items-center justify-center shadow-md p-1"
                >
                  <span className="game-text text-2xl sm:text-3xl text-yellow-400">
                    {String(t.val).padStart(2, '0')}
                  </span>
                  <span className="font-bubble text-[10px] text-slate-400 uppercase font-bold">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Columns: Patch Notes (Left) + Sneak Peeks (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Patch Notes (Cols 1-7) */}
          <div className="lg:col-span-7 bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card bg-studs space-y-6">
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-3">
              <span className="game-text text-xl text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-roblox-cyan" />
                <span>Latest Patch Notes</span>
              </span>
              <span className="text-xs font-bubble text-slate-400">Changelog History</span>
            </div>

            <div className="space-y-4">
              {updates.map((patch, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border-2 border-black rounded-2xl p-5 hover:border-slate-700 transition space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="game-text text-lg text-yellow-300">{patch.version}</span>
                      <span className="font-bubble text-xs text-white font-bold">— {patch.title}</span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-lg font-game text-[10px] uppercase border border-black ${patch.tagColor}`}>
                      {patch.tag}
                    </span>
                  </div>

                  <div className="text-[11px] font-bubble text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{patch.date}</span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {patch.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                        <span className="text-roblox-green font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sneak Peeks Gallery (Cols 8-12) */}
          <div className="lg:col-span-5 bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card bg-studs space-y-6">
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-3">
              <span className="game-text text-xl text-yellow-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>Sneak Peeks (Upcoming)</span>
              </span>
              <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/50 rounded font-game text-[10px]">
                LEAKS
              </span>
            </div>

            <div className="space-y-4">
              {sneakPeeks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border-2 border-black rounded-2xl p-4 flex items-center gap-4 hover:border-yellow-400/60 transition"
                >
                  <div className="w-20 h-20 rounded-2xl bg-slate-950 border-2 border-black p-2 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain drop-shadow-md animate-pulse"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="game-text text-sm text-white truncate">{item.title}</span>
                      <span className="px-2 py-0.5 bg-black/80 rounded border border-yellow-400/50 text-[10px] font-game text-yellow-300">
                        {item.rarity}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-950/80 rounded-2xl border-2 border-black text-center">
              <span className="font-bubble text-xs text-slate-400 block mb-2">
                Want more leaks &amp; dev sneak peeks?
              </span>
              <a
                href="https://discord.gg/eggs"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="inline-flex items-center gap-1.5 text-xs font-game text-roblox-cyan hover:underline"
              >
                <span>Join Discord #sneak-peeks channel</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
