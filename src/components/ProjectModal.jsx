import React, { useEffect } from 'react';
import { ExternalLink, X, CheckCircle, Code, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="bg-[#18212e] border-4 border-black rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Blue Header */}
        <div className="bg-gradient-to-r from-roblox-blue via-roblox-cyan to-roblox-blue border-b-4 border-black p-4 flex items-center justify-between sticky top-0 z-10 bg-studs">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥚</span>
            <span className="game-text text-xl md:text-2xl text-white">
              {project.title}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="w-9 h-9 bg-red-500 hover:bg-red-400 text-white rounded-xl border-2 border-black font-game text-xl flex items-center justify-center shadow"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Main Image Showcase */}
          <div className="rounded-2xl border-3 border-black overflow-hidden bg-slate-950 p-2 shadow-inner bg-studs">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[360px] object-contain rounded-xl mx-auto"
              />
            ) : (
              <div className="h-48 flex items-center justify-center text-7xl">
                🥚
              </div>
            )}
          </div>

          {/* Rarity & Role Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border-2 border-black rounded-xl p-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-yellow-400 text-black font-game text-xs rounded-lg border border-black uppercase">
                {project.rarityName || project.rarity}
              </span>
              <span className="font-bubble text-sm text-roblox-cyan font-bold">
                {project.role}
              </span>
            </div>
            {project.stats && (
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                {Object.entries(project.stats).map(([k, v], idx) => (
                  <span key={idx} className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    <b className="text-yellow-400 uppercase">{k}:</b> {v}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="game-text text-lg text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>Mô tả chi tiết</span>
            </h4>
            <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features & Perks */}
          {project.perks && (
            <div>
              <h4 className="game-text text-lg text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Điểm nổi bật kỹ thuật</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-xs font-bubble text-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="game-text text-lg text-white mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-roblox-cyan" />
              <span>Công nghệ sử dụng</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800 border-2 border-slate-700 text-slate-200 font-bubble text-xs rounded-xl font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link Buttons */}
          <div className="pt-4 border-t-2 border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-game text-sm border-2 border-black"
            >
              Đóng
            </button>

            {project.links?.play && (
              <a
                href={project.links.play}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playCoin()}
                className="btn-3d px-6 py-2.5 rounded-xl bg-gradient-to-r from-roblox-cyan to-blue-500 text-black font-game text-sm uppercase border-2 border-black flex items-center gap-2 font-bold"
              >
                <span>Chơi trên Roblox</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
