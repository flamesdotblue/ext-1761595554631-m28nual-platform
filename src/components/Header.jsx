import React from 'react';
import { Search, Bell } from 'lucide-react';

function StatusBar() {
  return (
    <div className="h-[50px] w-full flex items-center justify-between px-4" style={{ color: '#FFFFFF' }}>
      <div className="text-white" style={{ fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 16 }}>9:41</div>
      <div className="flex items-center gap-2 text-white">
        <div className="w-4 h-[10px] bg-white rounded-sm" />
        <div className="w-4 h-3 border border-white rounded-sm" />
        <div className="w-6 h-3 border border-white rounded-sm relative">
          <div className="absolute right-0 top-0 h-full bg-white" style={{ width: '70%' }} />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="w-full" style={{ backgroundColor: '#121629' }}>
      <StatusBar />
      <div className="h-[140px] w-full px-4 flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span
              className="text-white"
              style={{ fontFamily: 'Logotype Regular, Inter, system-ui', fontSize: 20, fontWeight: 700 }}
            >
              Hello, Emily!
            </span>
            <span
              className="mt-1"
              style={{ color: '#F5F5F5', fontFamily: 'Bingo Regular, Inter, system-ui', fontSize: 13 }}
            >
              Shams, Rabat Street, Abu Dhabi, UAE
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="p-2 rounded-full"
            style={{ color: '#ed7621', filter: 'drop-shadow(0 0 6px rgba(237,118,33,0.65))' }}
          >
            <Search size={26} />
          </div>
          <div
            className="p-2 rounded-full"
            style={{ color: '#ed7621', filter: 'drop-shadow(0 0 6px rgba(237,118,33,0.65))' }}
          >
            <Bell size={26} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{
          background: 'linear-gradient(90deg, #ed7621 0%, #cf3527 100%)'
        }} />
      </div>
    </div>
  );
}
