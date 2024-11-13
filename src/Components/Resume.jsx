import React from 'react';
import ResumeCard from './ResumeCard';

export default function Resume() {
  const technologies = [
    {
      logo: '/NET core.png',
      name: '.NET Core',
      details: '3+ Years'
    },
    {
      logo: '/NET.png',
      name: '.NET',
      details: '3+ Years'
    },
    {
      logo: '/Oracle.png',
      name: 'Oracle',
      details: '3+ Years'
    },
    {
      logo: '/PLSQL.png',
      name: 'PL/SQL',
      details: '3+ Years'
    },
    {
      logo: '/Bootstrap.png',
      name: 'Bootstrap',
      details: '3+ Years'
    },
    {
      logo: '/Git.png',
      name: 'Git',
      details: '3+ Years'
    },
    {
      logo: '/HTML-CSS-JS-Logo.png',
      name: 'HTML/CSS/JS',
      details: '3+ Years'
    },
    {
      logo: '/Azure.png',
      name: 'Azure',
      details: '2+ Years'
    },
    {
      logo: '/Blazor.png',
      name: 'Blazor',
      details: '<1 Year'
    },
    {
      logo: '/Tailwind CSS.png',
      name: 'Tailwind CSS',
      details: '<1 Year'
    },
    {
      logo: '/React.png',
      name: 'React',
      details: '<1 Year'
    },
  ];

  return (
    <section id="resume" className="resume-container bg-gray-100 text-gray-900 p-4 pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="flex flex-row flex-wrap md:flex-row md:flex-wrap justify-center items-center">
        {technologies.map((tech, index) => (
          <ResumeCard key={index} logo={tech.logo} name={tech.name} details={tech.details} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/Branko_Rokov_Resume_Oct2024.pdf" // Ensure this path is correct
          download="Branko_Rokov_Resume_Oct2024.pdf"
          className="bg-customOrange hover:bg-customSlateGray text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}