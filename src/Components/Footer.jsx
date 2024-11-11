import React from 'react';

export default function Footer() {
  return (
    <footer className="h-screen flex flex-col justify-center items-center bg-customPeach text-customDarkGray">
      <div className="text-center">
        <h2 className="text-5xl font-montserrat mb-4">Contact Me</h2>
        <p className="text-xl font-opensans mb-8">Feel free to reach out for collaborations or just a friendly chat.</p>
        <div className="flex flex-col items-center space-y-4">
          <a href="mailto:branko@example.com" className="text-2xl font-bold text-customBlueGray hover:text-customSlateGray">branko@example.com</a>
          <a href="https://www.linkedin.com/in/branko" className="text-2xl font-bold text-customBlueGray hover:text-customSlateGray">LinkedIn</a>
          <a href="https://github.com/branko" className="text-2xl font-bold text-customBlueGray hover:text-customSlateGray">GitHub</a>
        </div>
      </div>
    </footer>
  );
}