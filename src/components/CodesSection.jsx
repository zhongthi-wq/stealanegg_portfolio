import React, { useState } from 'react';
import { Gift, Copy, Check, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function CodesSection({ codes }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    sound.playClaim();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00d2ff', '#ffe600', '#39ff14', '#ff007f']
    });
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="codes" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-green text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Gift className="w-4 h-4 text-black" />
            <span>Free Player Rewards</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            ACTIVE PROMO CODES
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Redeem these official codes in-game for free speed potions, starter cash, and exclusive pets!
          </p>
        </div>

        {/* Codes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {codes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18212e] border-4 border-black rounded-3xl p-5 shadow-stud-card flex flex-col justify-between hover:-translate-y-1 transition-all bg-studs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-game text-[10px] rounded-lg uppercase">
                    ● {item.status}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Code #{idx + 1}</span>
                </div>

                <div className="bg-slate-900 border-2 border-black rounded-2xl p-3 text-center mb-3 shadow-inner">
                  <span className="game-text text-2xl text-yellow-300 tracking-wider">
                    {item.code}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-300 mb-4 text-center">
                  Reward: <b className="text-roblox-cyan">{item.reward}</b>
                </p>
              </div>

              <button
                onClick={() => handleCopy(item.code)}
                className="w-full btn-3d py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-game text-xs uppercase border-2 border-black flex items-center justify-center gap-1.5 font-bold shadow"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>COPIED CODE!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>COPY CODE</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* How to Redeem Banner */}
        <div className="bg-[#151c27] border-3 border-black rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <span className="game-text text-base text-white">How to Redeem in Roblox</span>
              <p className="text-xs font-bubble text-slate-400">
                1. Launch Steal An Egg ➜ 2. Tap the blue Twitter/Code icon on the left HUD ➜ 3. Paste the code and click Redeem!
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-black/60 border border-yellow-400 text-yellow-300 text-xs font-game rounded-xl">
            Case Sensitive
          </span>
        </div>

      </div>
    </section>
  );
}
