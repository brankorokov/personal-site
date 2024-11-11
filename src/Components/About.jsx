import React from 'react';
import { InView } from 'react-intersection-observer';

export default function About() {
  return (
    <section id="about" className="bg-customPeach text-customDarkGray pt-20">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="p-3">
          <img
            src="src/assets/images/ProfilePhoto.png"
            alt="Sample"
            className="home-img rounded-full max-w-80"
          />
        </div>
        <div className="home-description">
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-5xl my-3 font-montserrat text-customDarkGray">About Me<span className="text-customBlueGray">.</span></h2>
            <hr className="border-t-2 border-customBlueGray w-52 my-4" />
          </div>
          <div className="px-4 text-xl font-opensans">
            <p className="mb-3">
              My name is Branko. I'm a .NET Developer who has spent my career learning how to effectively design, create, and maintain full stack applications
              using .NET Core and .NET Framework.
            </p>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div ref={ref} className="inline-block">
                  <p className={`font-doto font-bold text-3xl text-customDarkGray ${inView ? 'typewriter' : ''}`}>
                    I love to code...
                  </p>
                </div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}
