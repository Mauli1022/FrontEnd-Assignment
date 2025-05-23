import React from "react";

export default function FormModal({ onClose, onSubmit, setForm, form }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "languages") {
      const updatedLanguages = checked
        ? [...form.languages, value]
        : form.languages.filter((lang) => lang !== value);
      setForm({ ...form, languages: updatedLanguages });
    } else if (name === "agree") {
      setForm({ ...form, agree: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4 sm:mx-auto relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        aria-label="Close modal"
      >
        &times;
      </button>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1 text-center sm:text-left">Get Started Today!</h2>
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Fill in your details and take control of your tasks.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full border border-red-200 bg-red-50 rounded-md px-3 py-2 text-sm"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full border border-red-200 bg-red-50 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Gender</label>
        <div className="flex gap-4 flex-wrap">
          {["Male", "Female"].map((g) => (
            <label
              key={g}
              className={`flex items-center gap-2 border px-4 py-2 
                rounded-md text-sm cursor-pointer ${
                form.gender === g
                  ? "bg-red-50 border-red-300"
                  : "border-red-200 bg-white"
              }`}
            >
              <input
                type="radio"
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={handleChange}
                className="cursor-pointer"
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Language</label>
        <div className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 flex-wrap">
          {["English", "Hindi", "Marathi"].map((lang) => (
            <label
              key={lang}
              className={`flex items-center gap-2 border px-4 py-2 rounded-md text-sm cursor-pointer ${
                form.languages.includes(lang)
                  ? "bg-red-50 border-red-300"
                  : "border-red-200 bg-white"
              }`}
            >
              <input
                type="checkbox"
                name="languages"
                value={lang}
                checked={form.languages.includes(lang)}
                onChange={handleChange}
                className="cursor-pointer"
              />
              {lang}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full border border-red-200 bg-red-50 rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="w-4 h-4 cursor-pointer"
        />
        <label className="text-sm cursor-pointer">
          I agree to the{" "}
          <span className="text-[#FD4B68] font-medium cursor-pointer">
            terms and conditions
          </span>
        </label>
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-[#FD4B68] text-white py-2 rounded-md font-medium text-sm hover:bg-red-600 transition"
      >
        Done
      </button>
    </div>
  );
}
