import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../config/firebaseConfig';
import { IoAlertCircleSharp } from 'react-icons/io5'; // Import an icon library for alerts

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FirebaseDataDisplay = () => {
  const [humidity, setHumidity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [heartRate, setHeartRate] = useState({ IR: null, BPM: null, AvgBPM: null });
  const [fallDetectionStatus, setFallDetectionStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref();
      dbRef.child('DHT').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setHumidity(data.humidity);
          setTemperature(data.temperature);
        }
      });

      dbRef.child('HeartRate').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setHeartRate({
            IR: data.IR,
            BPM: data.BPM,
            AvgBPM: data.AvgBPM
          });
        }
      });

      dbRef.child('FallDetection').on('value', (snapshot) => {
        const fallStatus = snapshot.val();
        if (fallStatus !== null && fallStatus !== undefined) {
          setFallDetectionStatus(fallStatus ? "Fall detected" : "No fall detected");
        }
      });
    };

    fetchData();

    // Clean up the listener when component unmounts
    return () => {
      firebase.database().ref().off();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-stone-900 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Elderly Monitoring System</h2>
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Environment Data:</p>
            <div className="mb-2 flex justify-between items-center">
              <p className="text-gray-600">Humidity:</p>
              <p className="text-gray-600">{humidity}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Temperature:</p>
              <p className="text-gray-600">{temperature}</p>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-lg font-semibold mt-6 mb-4">Health Data:</h2>
            <div className="mb-2">
              <p className="text-gray-600">Infrared (IR) Sensor:</p>
              <p className="text-gray-600">{heartRate.IR}</p>
            </div>
            <div className="mb-2">
              <p className="text-gray-600">Beats Per Minute (BPM):</p>
              <p className="text-gray-600">{heartRate.BPM}</p>
            </div>
            <div>
              <p className="text-gray-600">Average BPM:</p>
              <p className="text-gray-600">{heartRate.AvgBPM}</p>
            </div>
            <div className="mb-2 flex items-center">
              <p className="text-gray-600">Fall Detection:</p>
              {fallDetectionStatus && (
                <div className="flex items-center ml-2">
                  <IoAlertCircleSharp className="text-red-500 mr-1" /> 
                  <p className="text-red-500">{fallDetectionStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseDataDisplay;
