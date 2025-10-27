import React from 'react';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[1080px] bg-white" style={{ minHeight: '2340px' }}>
        <Header />
        <PromoSection />
        <MainContent />
        <div className="h-[90px]" />
        <BottomNav />
      </div>
    </div>
  );
}
