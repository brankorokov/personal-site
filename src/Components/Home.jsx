import React from 'react';

export default function Home() {
    return (
        <section id="home">
            <div className="home-container bg-gradient-to-r from-customBlueGray to-customSlateGray text-white">
                <div className="h-screen flex flex-col justify-center items-center text-center px-4">
                    <div className="bg-customOffWhite p-8 md:p-12 lg:p-16 rounded-lg shadow-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
                        <h1 className="welcomeHeader text-5xl font-montserrat text-customBlack mb-5 font-bold">Branko Rokov</h1>
                        <p className="welcomeText font-opensans text-customBlack text-2xl mb-7">Full Stack Developer</p>
                        <button
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-customBlueGray hover:bg-customSlateGray text-white font-bold py-2 px-6 rounded-full welcomeButton font-montserrat transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
