import React from 'react';
import { InView } from 'react-intersection-observer';

export default function About() {
  return (
    <section id="about" className="bg-customPeach text-customDarkGray pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="p-3">
          <img
            src="/ProfilePhoto.png"
            alt="Sample"
            className="home-img rounded-full w-60 md:w-80 max-w-80 xl:mr-32"
          />
        </div>
        <div className="home-description max-w-2xl mx-4">
          <div className="flex flex-col items-center md:items-end px-4">
            <h2 className="text-5xl my-3 font-montserrat text-customDarkGray">About Me<span className="text-customBlueGray">.</span></h2>
            <hr className="border-t-2 border-customBlueGray w-52 my-4" />
          </div>
          <div className="px-4 font-opensans leading-relaxed md:text-xl">
            <p className="mb-6">
              My name is Branko. I'm a .NET Developer who has spent my career learning how to effectively design, create, and maintain full stack applications
              using .NET Core and .NET Framework. I also have experience with Blazor, ASP.NET, and Bootstrap.
            </p>
            <p className="mb-6 md:mb-12">
              Along with all things .NET, I have experience with REST APIs, Azure, PL/SQL, Git, and Oracle. I'm always looking to learn new technologies and expand my knowledge.
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
