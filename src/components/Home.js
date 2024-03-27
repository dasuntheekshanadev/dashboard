import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/back.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard"); 
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center animate-fadeIn"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-800 animate-bounce">
        Welcome to Your Smart Home Hub
      </h1>
      <div
        className="p-8 rounded-lg max-w-lg shadow-lg animate-slideIn"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))",
        }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Manage and control your smart home devices with ease. Get real-time
          insights and automate your home tasks.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            Monitor temperature, humidity, and energy usage.
          </li>
          <li className="mb-2">
            Control lighting, heating, and cooling systems.
          </li>
          <li className="mb-2">Set schedules and automate tasks.</li>
          <li className="mb-2">Receive notifications and alerts.</li>
        </ul>
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
