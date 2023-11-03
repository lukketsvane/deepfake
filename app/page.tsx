'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
          <div className="w-full h-screen flex flex-col items-center justify-center p-8 bg-black text-white md:flex-row">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              {/* Rounded corners added to the Image component */}
              <div className="relative" style={{ width: '100%', maxWidth: '500px' }}>
                <Image src="/images/cover.jpg" alt="Cover" width={500} height={750} className="rounded-lg" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake &amp; Gay</h1>
              <p className="text-xl mb-4">av Benning Hergsvåg</p>
              <p className="mb-4">
                "Deepfake & Gay" er den nyeste diktsamlingen fra Benning Hergsvåg, en prominent figur i norsk poesi. Med denne samlingen fortsetter han sin undersøkelse av nåtidens kultur, med et spesielt fokus på den digitale æraens ambivalens.
              </p>
              <p>
                I "Deepfake & Gay" avdekker Hergsvåg med en skarp observasjonsevne hvordan teknologi kan fordreie vår forståelse av virkeligheten. Dette er en tankevekkende samling som inviterer leseren til å anerkjenne og verdsette kompleksiteten i vår moderne eksistens.
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
