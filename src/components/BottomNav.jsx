import React from 'react';
import { Home, Calendar, User, MoreHorizontal } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1080px] h-[70px] bg-white flex items-center justify-around" style={{ boxShadow: '0 -6px 18px rgba(18,22,41,0.06)' }}>
      <div className="flex flex-col items-center">
        <Home size={26} color="#ed7621" />
        <div className="mt-1 text-[10px]" style={{ color: '#ed7621', fontFamily: 'Bingo Regular, Inter, system-ui' }}>Home</div>
        <div className="w-8 h-0.5 mt-1 rounded-full" style={{ backgroundColor: '#ed7621' }} />
      </div>
      <div className="flex flex-col items-center">
        <Calendar size={26} color="#121629" />
        <div className="mt-1 text-[10px]" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui' }}>Bookings</div>
      </div>
      <div className="flex flex-col items-center">
        <User size={26} color="#121629" />
        <div className="mt-1 text-[10px]" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui' }}>Profile</div>
      </div>
      <div className="flex flex-col items-center">
        <MoreHorizontal size={26} color="#121629" />
        <div className="mt-1 text-[10px]" style={{ color: '#121629', fontFamily: 'Bingo Regular, Inter, system-ui' }}>More</div>
      </div>
    </div>
  );
}
