import React from "react";

export default function SuccessModal({ onClose }){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="text-4xl mb-4">❤️</div>

        <h2 className="text-lg font-bold mb-1">Thank you for connect with us.</h2>
        <p className="text-sm text-gray-600 mb-5">
          Our team will contacting with you soon
        </p>

        <button
          onClick={onClose}
          className="bg-[#FD4B68] text-white px-6 py-2 rounded-md font-medium w-full"
        >
          Done
        </button>
      </div>
    </div>
  );
};

