import React from 'react';

export default function Home() {
    return (
        <div className="home-container">
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col -mt-80 bg-customOffWhite p-8 w-2/3 h-1/5">
                    <h1 className="welcomeHeader text-4xl font-montserrat text-customBlack mb-5 font-bold">Branko Rokov</h1>
                    <p className="welcomeText font-opensans text-customBlack text-2xl mb-7">Full stack developer.</p>
                    <button onClick={() => window.location.replace("/#about")} className="bg-customBlueGray hover:bg-customSlateGray text-white font-bold py-2 px-4 rounded-full welcomeButton font-montserrat">
                        Learn more.
                    </button>
                </div>
            </div>
        </div>
    );
};
