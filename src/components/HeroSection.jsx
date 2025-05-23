import React, { useState } from "react";
import FormModel from "./FormModal";
import SuccessModal from "./SuccessModal";

export default function HeroSection({ setUserData }) {
  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
    agree: false,
  };

  const [form, setForm] = useState(initialState);
  const [shoFormModel, setShowFormModel] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setUserData((prev) => [...prev, form]);
    setShowFormModel(false);
    setShowSuccessModal(true);
    setForm(initialState);
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-xl text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#170F49] font-bold leading-snug">
          Simplify Your Life with Our
          <br />
          <span className="block">Todo App</span>
        </h2>
      </div>

      <p className="max-w-2xl text-center text-[#6F6C90] text-base sm:text-lg leading-relaxed mb-8 font-['Roboto']">
        Stay organized and boost your productivity with our intuitive todo website.
        <br />
        Experience a modern approach to task management that fits your lifestyle.
      </p>

      <div className="w-full max-w-md flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <button
          onClick={() => setShowFormModel(true)}
          className="w-full sm:w-auto bg-[#FF3E54] text-white text-base font-medium px-8 py-3 rounded-full"
        >
          Get Started
        </button>
        <button className="w-full sm:w-auto text-[#FF3E54] border border-[#FF3E54] text-base font-['DM_Sans'] px-8 py-3 rounded-full">
          Learn More
        </button>
      </div>

      {shoFormModel && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <FormModel
            setForm={setForm}
            form={form}
            onSubmit={onSubmit}
            onClose={() => setShowFormModel(false)}
          />
        </div>
      )}
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      <div className="w-full flex flex-col lg:flex-row gap-6 mb-10 max-w-[1170px]">
        <div className="flex-[2] min-h-[550px] bg-[#FF3E54] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 space-y-4">
              <div className="text-5xl sm:text-6xl">Organize.</div>
              <div className="text-5xl sm:text-6xl">Achieve.</div>
              <div className="text-5xl sm:text-6xl">Relax.</div>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 font-['Roboto']">
              Turn clutter into clarity, chaos into control, and dreams into done.
              Bold visions into market success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-white text-[#FF3E54] px-6 py-3 rounded-full font-semibold">
              Get Started Today
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-semibold">
              Discover Features
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-[600px] rounded-2xl relative overflow-hidden">
          <img
            src="/Background-Image.png"
            alt="Freddie Halvorson"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>

          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-2xl font-semibold leading-tight">
                <span className="opacity-45">Your Tasks</span>
                <br />
                <span className="font-bold">Our Tools.</span>
              </p>
              <div className="flex gap-2 mt-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 border border-white/50 rounded-full"></span>
                <span className="w-2 h-2 border border-white/50 rounded-full"></span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold text-sm sm:text-base">Freddie Halvorson</p>
                <p className="text-xs sm:text-sm text-white/80">
                  Chief Productivity Enthusiast
                </p>
              </div>
              <button className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src="/Play.svg" alt="Play" />
              </button>
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl cursor-pointer">
              &lt;
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl cursor-pointer">
              &gt;
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1170px] flex flex-wrap justify-center sm:justify-between items-center gap-4 mt-4 px-4 py-4 bg-white text-purple-600 font-semibold text-sm sm:text-base rounded-lg">
        {[
          { name: "Google", icon: "/Google.svg" },
          { name: "Facebook", icon: "/facebook-1.svg" },
          { name: "YouTube", icon: "/youtube-1.svg" },
          { name: "Pinterest", icon: "/Pintrest.svg" },
          { name: "Twitch", icon: "/Twitch.svg" },
        ].map(({ name, icon }) => (
          <span key={name} className="flex items-center space-x-2">
            <img
              src={icon}
              alt={name}
              className="w-[80px] sm:w-[100px] md:w-[116.1px] h-auto"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
