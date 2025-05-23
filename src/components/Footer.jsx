import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0A1B39] border-t px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg">
              <img src="/logo.svg" alt="logo" className="w-[170px] h-[100px]" />
            </div>
          </div>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest features and updates delivered to you.
          </p>
          <form className="flex items-center gap-2 mb-2">
            <input
              type="email"
              placeholder="Your email here"
              className="border border-gray-300 px-3 py-2 rounded-md w-full max-w-[220px] text-sm"
            />
            <button
              type="submit"
              className="bg-[#FD4B68] text-white px-4 py-2 rounded-md text-sm"
            >
              Join
            </button>
          </form>
          <p className="text-xs text-gray-500">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src="/Facebook.svg" className="text-[#FD4B68]" /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <img src="/Instagram.svg" className="text-[#FD4B68]" /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <img src="/X.svg" className="text-[#FD4B68]" /> X
            </li>
            <li className="flex items-center gap-2">
              <img src="/LinkedIn.svg" className="text-[#FD4B68]" /> LinkedIn
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
