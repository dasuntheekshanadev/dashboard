import React from 'react';
import DHT from './DHT';
import MotionSensor from './MotionSensor';
import SmokeLevelDisplay from './SmokeDetector';

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-900 min-h-screen flex flex-col text-white">
      <div className="py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Smart Home Dashboard</h1>
        <p className="text-lg">Monitor your home environment with real-time data from various sensors.</p>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <DHT />
            <p className="text-white mt-4 text-xl font-semibold">DHT Sensor</p>
            {/* Additional details */}
            <p className="text-gray-300">Temperature: 25°C</p>
            <p className="text-gray-300">Humidity: 50%</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <MotionSensor />
            <p className="text-white mt-4 text-xl font-semibold">Motion Sensor</p>
            {/* Additional details */}
            <p className="text-gray-300">Motion Detected: Yes</p>
            <p className="text-gray-300">Last Triggered: </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <SmokeLevelDisplay />
            <p className="text-white mt-4 text-xl font-semibold">Smoke Detector</p>
            {/* Additional details */}
            <p className="text-gray-300">Smoke Level: Low</p>
            <p className="text-gray-300">Status: Normal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
