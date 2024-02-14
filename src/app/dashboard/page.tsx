"use client";
import React, { useState, useEffect } from "react";
import RootLayout from "../layout";
import axios from "axios";

const Dashboard = () => {
  const [apiKey, setApiKey] = useState("");
  const [response, setResponse] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Retrieve the API key
    const apiKey = localStorage.getItem("OPEN_AI_API_KEY");
    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  const callOpenAI = async () => {
    const result = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "user",
            content: userInput,
          },
        ],
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    console.log("🚀 ~ callOpenAI ~ result:", result);
    setResponse(result.data.choices[0].text);
  };
  return (
    <RootLayout showAppBar={true}>
      <section className="w-100 h-full	 px-4 flex flex-col bg-white  ">
        <section className="h-4/5	">
          <p>{response}</p>
        </section>
        <section className=" h-min	mt-6 border rounded-xl bg-gray-50 mb-3">
          <textarea
            className="w-full bg-gray-50 p-2 rounded-xl focus:outline-none text-black"
            placeholder="Type your wan to  hear..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="flex items-center justify-between p-2">
            <button className="h-6 w-6 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
            <button
              onClick={callOpenAI}
              className="bg-purple-600 text-white px-6 py-2 rounded-xl"
            >
              Add
            </button>
          </div>
        </section>
      </section>
    </RootLayout>
  );
};

export default Dashboard;
