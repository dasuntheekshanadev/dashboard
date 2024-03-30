import React from 'react';



const AboutUs = () => {
  // Define team members data
  const teamMembers = [
    { name: 'Wanni Chathubhaashini PLY ID:10899246' },
    { name: 'Ranasinghage Sithumini  PLY ID:10899373' },
    { name: 'Gamage Wijesekara  PLY ID:10899386'}, 
    { name: 'Balasooriya Bandara  PLY ID:10899242' },
    { name: 'Goniya M Aponsu  PLY ID:10898734'},
    {name: 'Rajakaruna P Bandara  PLY ID:10900320'}
  ];

  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-900 min-h-screen flex flex-col text-white">
      <h1 className="text-2xl font-bold p-4">Meet Our Team</h1>
      <p className="font-bold text-2xl text-center text-gray-200 px-6 py-4">
        We are a team of passionate developers working on a university project - A Eldery Monitoring System. Our aim is to create a smart environment that enhances convenience, security, and energy efficiency for Eldery People.
      </p>
      <div className="flex-grow flex justify-center items-center flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-sm mx-4 mb-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <p className="text-gray-800 text-lg font-semibold">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
