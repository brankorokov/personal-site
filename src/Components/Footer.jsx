import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-customPeach text-customDarkGray py-8">
      <div className="text-center">
        <p className="text-center text-xl font-bold mb-4">Branko Rokov© 2024</p>
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com/brankorokov" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-700 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/branko-rokov/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-700 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:brankorokov@outlook.com" className="text-2xl hover:text-gray-700 transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}