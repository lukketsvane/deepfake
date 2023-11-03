'use client'; // Add this line to mark the module for 
// page.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import PoetryPlayer from './PoetryPlayer';

const Page: React.FC = () => {
  const [showPoetryPlayer, setShowPoetryPlayer] = useState(false);

  return (
    <>
      <Head>
        <title>Poetry Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        {!showPoetryPlayer ? (
          <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-black text-white">
            <div className="flex-1 flex justify-center mb-4 md:mb-0">
              <img src="/images/cover.jpg" alt="Cover" />
            </div>
            <div className="flex-1 text-center md:text-left md:pr-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake & Gay</h1>
              <p className="text-xl mb-4">Benning Hergsvåg</p>
              <p className="mb-4">Benning Hergsvåg, en markant stemme i norsk poesi, fortsetter å utforske samtidskulturen med sin nyeste diktsamling "Deepfake". Hergsvåg, som debuterte med "Newfoundland" og har etablert seg med flere kritikerroste samlinger, tar i "Deepfake" for seg den digitale tidsalders tvetydighet.</p>
              <p>
                Med skarpt blikk avdekker han hvordan teknologi kan forvrenge vår oppfattelse av virkeligheten. "Deepfake" er en kraftfull samling som utfordrer leseren til å gjenkjenne og verdsette vår tids sammensatte realiteter.
              </p>
              <button
                onClick={() => setShowPoetryPlayer(true)}
                className="mt-8 px-6 py-4 bg-black text-white border border-white rounded hover:bg-white hover:text-black focus:outline-none"
              >
                Ta meg til poesien
              </button>
            </div>
          </div>
        ) : (
          <PoetryPlayer />
        )}
      </main>
    </>
  );
};

export default Page;
