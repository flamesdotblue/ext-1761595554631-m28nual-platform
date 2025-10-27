import React from 'react';
import { Play, ShoppingCart, MapPin, GraduationCap, Star } from 'lucide-react';

function CardBase({ children }) {
  return (
    <div
      className="w-[170px] h-[200px] rounded-[16px] overflow-hidden relative"
      style={{ boxShadow: '0px 4px 14px rgba(237,118,33,0.15)' }}
    >
      {children}
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {/* CARD 1 - Let's Play */}
      <CardBase>
        <img
          src="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1200&auto=format&fit=crop"
          alt="Tennis match"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(237,118,33,0.25) 0%, rgba(237,118,33,0.15) 100%)'
        }} />
        <div className="absolute top-3 left-3">
          <div style={{ color: '#FFFFFF', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 800 }}>Let\'s Play</div>
          <div className="mt-1" style={{ color: '#FFFFFF', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 11 }}>Book Courts Easily</div>
        </div>
        <button
          className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#ed7621', filter: 'drop-shadow(0 0 8px rgba(237,118,33,0.7))' }}
        >
          <Play color="#FFFFFF" size={20} />
        </button>
      </CardBase>

      {/* CARD 2 - Let's Shop */}
      <CardBase>
        <img
          src="https://images.unsplash.com/photo-1715692668201-b1ca3e0d2d0d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcG9ydHMlMjBtYWxsfGVufDB8MHx8fDE3NjE1OTU2NjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
          alt="Sports mall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(207,53,39,0.20) 0%, rgba(207,53,39,0.12) 100%)'
        }} />
        <div className="absolute top-3 left-3">
          <div style={{ color: '#FFFFFF', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 800 }}>Let\'s Shop</div>
          <div className="mt-1" style={{ color: '#FFFFFF', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 11 }}>Top Brands, Best Deals</div>
        </div>
        <button
          className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#cf3527', filter: 'drop-shadow(0 0 8px rgba(207,53,39,0.7))' }}
        >
          <ShoppingCart color="#FFFFFF" size={20} />
        </button>
      </CardBase>

      {/* CARD 3 - Let's Visit */}
      <CardBase>
        <img
          src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1200&auto=format&fit=crop"
          alt="Sports clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 h-20" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)' }} />
        <div className="absolute top-3 left-3">
          <div style={{ color: '#121629', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 800 }}>Let\'s Visit</div>
          <div className="mt-1" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 11 }}>Trusted Sports Clinics</div>
        </div>
        <button
          className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#ed7621', filter: 'drop-shadow(0 0 8px rgba(237,118,33,0.7))' }}
        >
          <MapPin color="#FFFFFF" size={20} />
        </button>
      </CardBase>

      {/* CARD 4 - Let's Learn */}
      <CardBase>
        <img
          src="https://images.unsplash.com/photo-1685541000527-662e48d677a3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmlja2V0JTIwY29hY2hpbmd8ZW58MHwwfHx8MTc2MTU5NTY2NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
          alt="Cricket coaching"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(237,118,33,0.20) 0%, rgba(237,118,33,0.12) 100%)'
        }} />
        <div className="absolute top-3 left-3">
          <div style={{ color: '#FFFFFF', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 800 }}>Let\'s Learn</div>
          <div className="mt-1" style={{ color: '#FFFFFF', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 11 }}>Expert Coaching</div>
        </div>
        <button
          className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#cf3527', filter: 'drop-shadow(0 0 8px rgba(207,53,39,0.7))' }}
        >
          <GraduationCap color="#FFFFFF" size={20} />
        </button>
      </CardBase>
    </div>
  );
}

function SuggestBanner() {
  return (
    <div className="w-full px-4 mt-4">
      <div
        className="w-[360px] h-[120px] rounded-[14px] overflow-hidden relative"
        style={{
          background: 'linear-gradient(90deg, #ed76211A, #cf35271A)',
          boxShadow: '0 0 0 1px rgba(237,118,33,0.20), 0 10px 20px rgba(237,118,33,0.12)'
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#ed7621' }} />
        <div className="absolute inset-0 p-4 flex">
          <div className="w-[65%] pr-2">
            <div style={{ color: '#ed7621', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 22, fontWeight: 800 }}>Let\'s Suggest</div>
            <div className="mt-1" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 14 }}>Recommend & Get Rewarded</div>
            <div className="mt-1" style={{ color: '#A8A8A8', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 10 }}>Know a great venue? Share it with us!</div>
          </div>
          <div className="w-[35%] relative">
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[120px] h-[90px]">
              <svg viewBox="0 0 200 150" width="120" height="90">
                <defs>
                  <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2ecc71" />
                    <stop offset="100%" stopColor="#1abc9c" />
                  </linearGradient>
                </defs>
                <g transform="skewY(-6)">
                  <rect x="10" y="20" width="180" height="110" rx="8" fill="url(#fieldGrad)" />
                  <rect x="10" y="20" width="180" height="110" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                  <line x1="100" y1="20" x2="100" y2="130" stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx="100" cy="75" r="10" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                  <rect x="10" y="50" width="20" height="50" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                  <rect x="170" y="50" width="20" height="50" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                  <rect x="8" y="18" width="4" height="114" fill="#ed7621" />
                  <rect x="188" y="18" width="4" height="114" fill="#ed7621" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedVenues() {
  const venues = [
    {
      img: 'https://images.unsplash.com/photo-1508098679541-3de69d39a7c7?q=80&w=1200&auto=format&fit=crop',
      name: 'Central Sports Arena',
      rating: '4.8',
      distance: '1.2 km'
    },
    {
      img: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1200&auto=format&fit=crop',
      name: 'Greenfield Tennis Club',
      rating: '4.7',
      distance: '2.0 km'
    },
    {
      img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
      name: 'Skyline Football Turf',
      rating: '4.9',
      distance: '2.8 km'
    }
  ];

  return (
    <div className="w-full px-4 mt-5">
      <div style={{ color: '#121629', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 18, fontWeight: 800 }}>Popular Near You</div>
      <div className="mt-3 overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-4 min-w-max pb-2">
          {venues.map((v, i) => (
            <div key={i} className="w-[140px] h-[160px] rounded-[12px] overflow-hidden bg-white" style={{ boxShadow: '0px 6px 16px rgba(237,118,33,0.12)' }}>
              <div className="w-full h-[90px] relative">
                <img src={v.img} alt={v.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="px-2 pt-2">
                <div className="truncate" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 13 }}>{v.name}</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1" style={{ color: '#ed7621' }}>
                    <Star size={14} fill="#ed7621" color="#ed7621" />
                    <span style={{ fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 12 }}>{v.rating}</span>
                  </div>
                  <div style={{ color: '#7A7F9A', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 12 }}>{v.distance}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="w-full" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="px-4 pt-4">
        <div style={{ color: '#121629', fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 800 }}>
          What Do You Want to Do?
        </div>
        <FeatureGrid />
      </div>
      <SuggestBanner />
      <FeaturedVenues />
    </div>
  );
}
