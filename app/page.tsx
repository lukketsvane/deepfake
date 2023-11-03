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
        <title>Deepfake: Benning Hergsvåg</title>
        <link rel="icon" href="/path/to/your/custom-icon.ico" />
        {/* Additional SEO configurations can be added here */}
      </Head>

      <main className="min-h-screen bg-gray-100">
        {!showPoetryPlayer ? (
          <div className="w-full h-screen flex flex-col items-center justify-center p-8 bg-black text-white md:flex-row">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <div className="relative" style={{ width: '100%', maxWidth: '200px' }}>
                <Image
                  src="/images/cover.jpg"
                  alt="Cover"
                  layout="responsive"
                  width={500}
                  height={750}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left md:pl-8 lg:pr-32">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake &amp; Gay</h1>
              <p className="text-xl mb-4">av Benning Hergsvåg</p>
              <p className="mb-4">
                Opplev den nyeste diktsamlingen fra Benning Hergsvåg, en prominent figur i norsk poesi. &quot;Deepfake &amp; Gay&quot; utforsker nåtidens kultur og den digitale æraens ambivalens, lest opp av elever ved skuespillerlinjen.
              </p>
              <p>
                Bli med på en reise gjennom en serie tankevekkende dikt som avdekker hvordan teknologi kan fordreie vår forståelse av virkeligheten, og utfordrer leseren til å anerkjenne og verdsette kompleksiteten i vår moderne eksistens.
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
