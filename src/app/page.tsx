"use client";
import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("OPEN_AI_API_KEY", apiKey);
    setApiKey("");
    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen bg-purple-400 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-12 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-6 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center text-purple-400 mb-4 ">
            Code Assistant
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide ">
            Add your Open AI api key to enjoy all the services without any issue
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Api key"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 text-black"
          />
          <button
            className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
      <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-0 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-2 left-10 transform rotate-45 hidden md:block"></div>
    </main>
  );
}
