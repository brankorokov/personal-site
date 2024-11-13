import React from 'react';

export default function ResumeCard({ logo, name, details }) {
  return (
    <div className="resume-container resume-card relative w-24 h-24 md:w-48 md:h-48 m-2">
      <div className="resume-card-front absolute inset-0 flex flex-col justify-center items-center bg-white p-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
        <img src={logo} alt={name} className="w-16 md:w-24 mb-1" />
        <p className="hidden md:block md:text-lg font-bold font-montserrat">{name}</p>
      </div>
      <div className="resume-card-back absolute inset-0 flex flex-col justify-center items-center bg-gray-800 text-white p-2 rounded-lg shadow-lg opacity-0 transition-opacity duration-500 ease-in-out">
        <div className="flex flex-col justify-between items-center">
          <p className="text-xs md:hidden font-montserrat">{name}</p>
          <p className="text-sm md:text-lg font-opensans">{details}</p>
        </div>
      </div>
    </div>
  );
}