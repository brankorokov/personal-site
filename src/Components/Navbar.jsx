import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const navLinks = {
    home: 'Home',
    about: 'About',
    resume: 'Resume',
  };

  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-customOrange h-14 mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <p className="text-4xl font-montserrat">
            BR
          </p>
        </div>
        <div className="hidden md:flex items-center h-full">
          {Object.keys(navLinks).map((key) => (
            <div key={key} className="cursor-pointer bg-customOrange w-auto px-2 mx-1 h-full flex items-center transition ease-in-out delay-0 hover:text-customLightOrange">
              <p>{navLinks[key]}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleMobileNav}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>
      {mobileNav && (
        <div className="cursor-pointer bg-customOrange w-full flex flex-col items-end py-4 md:hidden">
          {Object.keys(navLinks).map((key) => (
            <div key={key} className="w-full py-2 pr-6 text-right ease-in-out delay-0 hover:text-customLightOrange transition">
              <p>{navLinks[key]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
