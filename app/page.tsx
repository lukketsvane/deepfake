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
          <div className="w-full h-screen flex flex-col items-center justify-center p-8 bg-black text-white text-left md:text-center md:flex-row">
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
            <div className="flex-1 md:text-left md:pl-8 lg:pr-32">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake &amp; Gay: Stemmer fra fremtiden</h1>
              <p className="text-xl mb-4">av Benning Hergsvåg</p>
              <p className="mb-4">
                Med "Deepfake &amp; Gay" tar Benning Hergsvåg, en toneangivende stemme i norsk poesi, oss med på en reise gjennom den digitale tidsalderens labyrint. Denne grensesprengende samlingen står i skjæringspunktet mellom teknologi og humanitet, og utfordrer oss til å betrakte vår virkelighet gjennom et nytt prisme.
              </p>
              <p className="mb-4">
                Dykk ned i en verden der stemmene til elever ved skuespillerlinjen gir liv til Hergsvågs ord, og formidler en kraftfull og moderne tolkning av poesi. Hver opplesning er en unik forestilling som fanger essensen av Hergsvågs visjonære verk.
              </p>
              <p className="mb-4">
                Opplev "Deepfake &amp; Gay" ikke bare som skrevne ord, men som en levende, pustende kunstform. Bli med på en sonisk utforskning av hva det betyr å være menneske i et stadig mer digitalisert samfunn.
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
          <PoetryPlayer setShowPoetryPlayer={setShowPoetryPlayer} />
        )}
      </main>
    </>
  );
};

export default Page;
