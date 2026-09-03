import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function FAQSection({ faqList }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    sound.playPop();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-cyan text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <HelpCircle className="w-4 h-4 text-black" />
            <span>Got Questions?</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Everything you need to know about stealing eggs, treadmills, and pet hatching
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#18212e] border-3 border-black rounded-2xl overflow-hidden shadow-stud-card transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-game text-base md:text-lg text-white hover:text-yellow-300 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-roblox-cyan font-mono text-sm">#{idx + 1}</span>
                    <span>{item.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 font-sans text-xs md:text-sm leading-relaxed border-t border-slate-800 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
