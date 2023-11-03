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
        <title>Deepfake: Benning Hersvåg - Lytt til Skuespillerlinjens Opplesning</title>
        <link rel="icon" href="/path/to/your/custom-icon.ico" />
        {/* Additional SEO configurations can be added here */}
        <meta name="description" content="Opplev Benning Hersvågs nyeste diktsamling 'Deepfake & Gay' gjennom stemmene til elever ved skuespillerlinjen. En unik sonisk utforskning av moderne eksistens." />
        <meta property="og:title" content="Deepfake: Benning Hersvåg" />
        <meta property="og:description" content="Lytt til elever ved skuespillerlinjen formidle Benning Hersvågs 'Deepfake & Gay', en tankevekkende utforskning av den digitale tidsalder." />
        <meta property="og:image" content="/images/cover.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        {!showPoetryPlayer ? (
          <div className="w-full h-screen flex flex-col items-center justify-center p-8 bg-black text-white md:flex-row">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <div className="relative w-2/5 max-w-xs md:max-w-sm md:w-full">
                <Image src="/images/cover.jpg" alt="Cover" layout="fill" className="rounded-lg" />
              </div>
            </div>
            <div className="flex-1 text-left md:pr-20 md:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake &amp; Gay</h1>
              <p className="text-xl mb-4">av Benning Hersvåg</p>
              <p className="mb-4">
                "Deepfake &amp; Gay" er den nyeste diktsamlingen fra Benning Hersvåg, en fremtredende skikkelse innen moderne norsk poesi. Denne samlingen utforsker dyptgående nåtidens kulturelle dynamikker og teknologiens innvirkning på vår virkelighet.
              </p>
              <p>
                Oppdag "Deepfake &amp; Gay" gjennom stemmene til elever ved skuespillerlinjen, og la deg omslutte av den soniske dybden i Hersvågs poesi. Bli med på en reise gjennom komplekse følelser og skarpe innsikter som definerer vår tid.
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
