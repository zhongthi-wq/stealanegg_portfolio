import React from 'react';
import { ShoppingBag, Check, ShieldAlert, Sparkles, Clock, Coins, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ShopCommission({ commissionData, onOrderClick }) {
  const { packages, termsOfService, currencyRates } = commissionData;

  return (
    <section id="shop" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-roblox-green text-black border-3 border-black rounded-xl font-game text-sm uppercase shadow-sm mb-3">
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Official Commission Rates</span>
          </div>
          <h2 className="game-text-lg text-4xl md:text-5xl text-white mb-2">
            COMMISSION SHOP
          </h2>
          <p className="font-bubble text-slate-300 text-base md:text-lg max-w-xl mx-auto">
            {currencyRates}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#18212e] border-4 border-black rounded-3xl p-6 shadow-stud-card relative flex flex-col justify-between transition-all duration-200 ${
                pkg.popular 
                  ? 'ring-4 ring-roblox-pink scale-105 z-10' 
                  : 'hover:-translate-y-1'
              }`}
            >
              {/* Stud Texture */}
              <div className="absolute inset-0 bg-studs opacity-20 pointer-events-none" />

              {/* Popular Flag */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-roblox-pink to-rose-600 text-white font-game text-xs tracking-wider uppercase px-4 py-1 rounded-full border-2 border-black shadow flex items-center gap-1">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                {/* Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg border-2 font-game text-xs uppercase ${pkg.color}`}>
                    {pkg.tier}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bubble text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-roblox-cyan" />
                    <span>{pkg.deliveryTime}</span>
                  </div>
                </div>

                {/* Package Name */}
                <h3 className="game-text text-2xl text-white mb-4">
                  {pkg.name}
                </h3>

                {/* Price Display (Robux + Fiat) */}
                <div className="bg-slate-900 border-2 border-black rounded-2xl p-4 mb-6 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-yellow-300 game-text text-3xl mb-1">
                    <Coins className="w-6 h-6 text-yellow-400" />
                    <span>{pkg.priceRobux}</span>
                  </div>
                  <div className="font-bubble text-xs text-slate-400 font-bold">
                    {pkg.priceFiat}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm font-sans text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5 flex-shrink-0 border border-emerald-500/40">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <a
                href="#contact"
                onClick={() => {
                  sound.playPop();
                  onOrderClick && onOrderClick(pkg);
                }}
                className={`w-full btn-3d py-3 rounded-2xl text-black font-game text-sm uppercase tracking-wider border-3 border-black text-center font-bold block ${pkg.btnColor}`}
              >
                Đặt hàng gói này 🚀
              </a>
            </div>
          ))}
        </div>

        {/* Terms of Service (ToS) Box */}
        <div className="bg-[#151c27] border-4 border-black rounded-3xl p-6 md:p-8 shadow-stud-card relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-black border-2 border-black flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="game-text text-xl md:text-2xl text-yellow-300">
                TERMS OF SERVICE (ĐIỀU KHOẢN NHẬN VIỆC)
              </h3>
              <p className="text-xs font-bubble text-slate-400">
                Vui lòng đọc kỹ trước khi thuê dịch vụ để đảm bảo quyền lợi đôi bên
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {termsOfService.map((tos, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border-2 border-black rounded-xl p-3 flex items-start gap-2.5 text-xs md:text-sm font-sans text-slate-300"
              >
                <span className="font-game text-roblox-cyan text-sm">#{idx + 1}</span>
                <span>{tos}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
