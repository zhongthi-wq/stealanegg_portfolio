import React from 'react';
import { Code, Boxes, Palette, Cpu, Layout, Database, Sparkles, Award } from 'lucide-react';
import { sound } from '../utils/audio';

const iconMap = {
  Code: Code,
  Boxes: Boxes,
  Palette: Palette,
  Cpu: Cpu,
  Layout: Layout,
  Database: Database,
  Sparkles: Sparkles,
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-cyan text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <Award className="w-4 h-4 text-black" />
            <span>Developer Arsenal</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            DEV SKILLS & ENGINES
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            Công nghệ, công cụ và quy trình làm việc được chuẩn hóa cho dự án Roblox chuyên nghiệp
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;
            return (
              <div
                key={index}
                onMouseEnter={() => sound.playPop()}
                className="bg-[#18212e] border-4 border-black rounded-2xl p-5 shadow-stud-card relative overflow-hidden group hover:-translate-y-1 transition-all duration-200"
              >
                {/* Stud Texture Pattern */}
                <div className="absolute inset-0 bg-studs opacity-25 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-black flex items-center justify-center text-black shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Skill Details */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="game-text text-lg text-white group-hover:text-roblox-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <span className="px-2 py-0.5 bg-black/60 border border-slate-700 text-yellow-300 font-game text-[10px] rounded uppercase">
                        {skill.level}
                      </span>
                    </div>

                    <span className="text-xs font-bubble text-slate-400 font-bold block mb-3">
                      Category: {skill.category}
                    </span>

                    {/* Visual Progress Stud Line */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((levelStep) => (
                        <div
                          key={levelStep}
                          className={`h-2.5 flex-1 rounded-sm border border-black ${
                            levelStep <= (skill.level === 'Master' ? 5 : skill.level === 'Expert' ? 4 : 3)
                              ? 'bg-gradient-to-r from-roblox-cyan to-roblox-green shadow-sm'
                              : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-3 border-black rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚙️</span>
            <div>
              <span className="game-text text-lg text-white">
                Quy trình phát triển: Rojo + Git + VS Code + Roblox Studio
              </span>
              <p className="text-xs font-bubble text-slate-400">
                Quản lý mã nguồn theo tiêu chuẩn ngành, dễ dàng làm việc nhóm hoặc bàn giao source code an toàn.
              </p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-black/80 border border-roblox-cyan text-roblox-cyan font-mono text-xs rounded-lg">
            Version Control: Git Ready
          </div>
        </div>
      </div>
    </section>
  );
}
