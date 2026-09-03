import React, { useState } from 'react';
import { Copy, Check, MessageSquare, ExternalLink, Mail, Send, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function ContactFooter({ socials, profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    sound.playCoin();
    navigator.clipboard.writeText(socials.discordUsername);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#00d2ff', '#ffe600', '#ff007f', '#39ff14']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-16 pb-12 px-4 bg-[#0d121c] border-t-4 border-black relative">
      <div className="absolute inset-0 bg-studs opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-[#18212e] to-[#121824] border-4 border-black rounded-3xl p-8 md:p-12 shadow-stud-card text-center mb-12 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-yellow-400 border-3 border-black mx-auto flex items-center justify-center text-3xl mb-4 shadow-md">
            🥚
          </div>

          <h2 className="game-text-lg text-3xl md:text-5xl text-white mb-3">
            HỢP TÁC & THUÊ DỰ ÁN
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-lg mx-auto mb-8">
            Bạn cần một tựa game Steal a Brainrot mới, dàn pet voxel 3D hay hệ thống Luau tối ưu? Nhắn tin ngay qua Discord để nhận tư vấn!
          </p>

          {/* Big Discord Copy Card */}
          <div className="bg-slate-900 border-3 border-black rounded-2xl p-4 md:p-6 max-w-lg mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#5865F2] border-2 border-black flex items-center justify-center text-white text-2xl shadow">
                👾
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bubble text-slate-400 uppercase font-bold block">
                  Discord Username
                </span>
                <span className="game-text text-xl text-yellow-300">
                  {socials.discordUsername}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyDiscord}
              className="w-full sm:w-auto btn-3d px-5 py-2.5 rounded-xl bg-roblox-cyan hover:bg-cyan-400 text-black font-game text-sm uppercase border-2 border-black font-bold flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>Copy Tag</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Icons Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="btn-3d px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-game text-xs border-2 border-black flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Profile</span>
              </a>
            )}

            {socials.robloxProfile && (
              <a
                href={socials.robloxProfile}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="btn-3d px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-roblox-red font-game text-xs border-2 border-black flex items-center gap-1.5"
              >
                <span className="text-sm">🟥</span>
                <span>Roblox Profile</span>
              </a>
            )}

            {socials.talentHub && (
              <a
                href={socials.talentHub}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="btn-3d px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-roblox-cyan font-game text-xs border-2 border-black flex items-center gap-1.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Talent Hub</span>
              </a>
            )}

            {socials.email && (
              <a
                href={`mailto:${socials.email}`}
                onClick={() => sound.playPop()}
                className="btn-3d px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-300 font-game text-xs border-2 border-black flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Gửi Email</span>
              </a>
            )}
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div className="text-center text-xs font-bubble text-slate-500 space-y-2">
          <p>
            © {new Date().getFullYear()} {profile.displayName}. Built with React, Vite & Tailwind CSS.
          </p>
          <p className="text-[11px] text-slate-600">
            Trang portfolio cá nhân dành cho nhà sáng tạo Roblox. Không trực thuộc hoặc liên kết chính thức với Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
