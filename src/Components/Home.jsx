import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
    return (
        <section id="home">
            <div className="home-container bg-gradient-to-r from-customBlueGray to-customSlateGray text-white">
                <div className="h-screen flex flex-col justify-center items-center text-center px-4">
                    <div className="flex flex-col justify-center items-center -mt-56 animation">
                        <h1 className="text-8xl md:text-9xl font-montserrat font-bold firstName">Branko</h1>
                        <p className="lastName last-name text-8xl md:text-9xl font-montserrat">Rokov</p>
                        <p className="text-xl md:text-2xl font-opensans mt-6 sub-title">Full Stack Developer</p>
                        <FaArrowCircleDown onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="fade-in-and-pulse text-6xl mt-12 text-customOrange cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
}
