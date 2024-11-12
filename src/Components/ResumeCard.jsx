import React from 'react';

export default function ResumeCard({ logo, name, details }) {
  return (
    <div className="resume-container resume-card relative w-56 h-56 md:w-48 md:h-48 m-4">
      <div className="resume-card-front absolute inset-0 flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
        <img src={logo} alt={name} className="w-24 h-24 mb-2" />
        <p className="text-lg font-bold">{name}</p>
      </div>
      <div className="resume-card-back absolute inset-0 flex flex-col justify-center items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg opacity-0 transition-opacity duration-500 ease-in-out">
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
}