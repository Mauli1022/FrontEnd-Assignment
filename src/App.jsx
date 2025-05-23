import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import SubmissionTable from './components/SubmissionTable';

export default function App() {
  const [userData, setUserData] = useState([]);

  console.log(userData);

  return (
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection setUserData={setUserData} />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeroComponent />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {
          userData && userData.length > 0 ? <SubmissionTable data={userData} /> : null
        }
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
