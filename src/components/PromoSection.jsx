import React from 'react';
import Spline from '@splinetool/react-spline';

function PromoBanner() {
  return (
    <div className="w-full px-4 mt-4">
      <div className="w-full overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-4 min-w-max">
          <div
            className="w-[360px] h-[130px] rounded-[14px] relative"
            style={{
              background: 'linear-gradient(90deg, #ed7621 0%, #cf3527 100%)',
              boxShadow: '0 6px 18px rgba(237,118,33,0.25)'
            }}
          >
            <div className="absolute inset-0 rounded-[14px]" style={{ boxShadow: '0 0 22px rgba(255,255,255,0.28)' }} />
            <div className="absolute top-2 right-2 bg-white text-[#121629] text-[11px] font-semibold px-2 py-1 rounded-full"
              style={{ fontFamily: 'Bingo Regular, Inter, system-ui' }}
            >
              HOT DEAL
            </div>
            <div className="absolute inset-0 flex">
              <div className="w-[60%] h-full p-4 flex flex-col justify-center">
                <div
                  className="text-white"
                  style={{ fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 22, fontWeight: 800 }}
                >
                  🎾 Book Courts & Win Big!
                </div>
                <div
                  className="text-white/95 mt-1"
                  style={{ fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 14 }}
                >
                  Get 20% OFF + Earn Rewards
                </div>
              </div>
              <div className="w-[40%] h-full relative">
                <img
                  alt="Sports equipment"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-[140px] h-[110px] object-contain"
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>

          <div
            className="w-[360px] h-[130px] rounded-[14px] relative"
            style={{
              background: 'linear-gradient(90deg, #ed7621 0%, #cf3527 100%)',
              boxShadow: '0 6px 18px rgba(237,118,33,0.25)'
            }}
          >
            <div className="absolute top-2 right-2 bg-white text-[#121629] text-[11px] font-semibold px-2 py-1 rounded-full"
              style={{ fontFamily: 'Bingo Regular, Inter, system-ui' }}
            >Limited</div>
            <div className="absolute inset-0 flex">
              <div className="w-[60%] h-full p-4 flex flex-col justify-center">
                <div
                  className="text-white"
                  style={{ fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 22, fontWeight: 800 }}
                >
                  🏏 Weekend Tournaments
                </div>
                <div
                  className="text-white/95 mt-1"
                  style={{ fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 14 }}
                >
                  Register now and save 15%
                </div>
              </div>
              <div className="w-[40%] h-full relative">
                <img
                  alt="Cricket gear"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-[140px] h-[110px] object-contain"
                  src="https://images.unsplash.com/photo-1659081427664-be2a556ea019?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmlja2V0JTIwZ2VhcnxlbnwwfDB8fHwxNzYxNTk1NjY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryIcon({ bg, children, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[75px] h-[75px] rounded-full flex items-center justify-center"
        style={{ background: bg, boxShadow: '0 6px 16px rgba(237,118,33,0.18)' }}
      >
        {children}
      </div>
      <div
        className="mt-2"
        style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 11 }}
      >
        {label}
      </div>
    </div>
  );
}

function QuickCategories() {
  return (
    <div className="w-full bg-white mt-4">
      <div className="px-4 py-3 flex items-center justify-between">
        <div
          className=""
          style={{ color: '#121629', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 18, fontWeight: 800 }}
        >
          Explore Sports
        </div>
        <button
          className=""
          style={{ color: '#ed7621', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 14 }}
        >
          View All
        </button>
      </div>
      <div className="px-4 overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-4 min-w-max pb-3 relative">
          {/* Tennis */}
          <CategoryIcon bg="#ed7621">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#FFFFFF" strokeWidth="3" fill="none" />
              <path d="M10 20c6 0 10-6 14-6s8 6 14 6" stroke="#FFFFFF" strokeWidth="3" fill="none" />
            </svg>
          </CategoryIcon>

          {/* Football */}
          <CategoryIcon bg="#cf3527">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#FFFFFF" strokeWidth="3" fill="none" />
              <polygon points="24,12 30,18 28,28 20,28 18,18" fill="#FFFFFF" />
            </svg>
          </CategoryIcon>

          {/* Basketball */}
          <CategoryIcon bg="#121629">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#ed7621" strokeWidth="3" fill="none" />
              <path d="M4 24h40M24 4v40" stroke="#ed7621" strokeWidth="3" />
              <path d="M10 38c6-6 6-22 0-28M38 10c-6 6-6 22 0 28" stroke="#ed7621" strokeWidth="3" fill="none" />
            </svg>
          </CategoryIcon>

          {/* Cricket */}
          <CategoryIcon bg="linear-gradient(145deg,#ed7621,#ff9150)">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <rect x="26" y="8" width="6" height="28" rx="2" transform="rotate(20 26 8)" fill="#FFFFFF" />
              <circle cx="16" cy="28" r="4" fill="#FFFFFF" />
            </svg>
          </CategoryIcon>

          {/* Badminton */}
          <CategoryIcon bg="linear-gradient(145deg,#cf3527,#ff6a50)">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path d="M10 28l8-12 4 2-8 12-4-2z" fill="#FFFFFF" />
              <path d="M18 34l10-8 2 3-9 7-3-2z" fill="#FFFFFF" />
              <circle cx="30" cy="36" r="3" fill="#FFFFFF" />
            </svg>
          </CategoryIcon>

          {/* Swimming */}
          <CategoryIcon bg="#121629">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path d="M6 30c4 0 6-4 10-4s6 4 10 4 6-4 10-4 6 4 10 4" stroke="#ed7621" strokeWidth="3" fill="none" />
              <circle cx="16" cy="20" r="4" fill="#ed7621" />
            </svg>
          </CategoryIcon>
          <div className="absolute left-1/2 -bottom-1 translate-x-[-50%] flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#ed7621' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromoSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-[220px] w-full">
        <Spline scene="https://prod.spline.design/1MH5ijGQRnLRtVUF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none h-[220px]" style={{
        background:
          'radial-gradient(70% 60% at 50% 0%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.15) 100%)'
      }} />
      <div className="relative -mt-[140px]">
        <PromoBanner />
        <QuickCategories />
      </div>
    </div>
  );
}
