'use client';
import React, { useState, useEffect, useRef } from 'react';

const PoetryPlayer: React.FC = () => {
  const [poemIndex, setPoemIndex] = useState(0);
  const poemTitles = ['Deepfake', 'Virtuelle Refleksjoner'];
  const poems = ['/poems/poem1.txt', '/poems/poem2.txt'];
  const [poemContent, setPoemContent] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const fetchPoemContent = async (path: string) => {
    const response = await fetch(path);
    const text = await response.text();
    setPoemContent(text);
  };

  const playNextPoem = () => {
    const nextIndex = (poemIndex + 1) % poems.length;
    setPoemIndex(nextIndex);
  };

  useEffect(() => {
    fetchPoemContent(poems[poemIndex]);
  // Include poems in the dependency array
  }, [poemIndex, poems]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [poemContent, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="flex w-full h-screen bg-black text-white p-4">
      <button 
        onClick={toggleOverlay} 
        className="md:hidden fixed top-4 right-4 z-20 text-3xl"
      >
        {showOverlay ? '✕' : '☰'}
      </button>
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 p-4 transition-transform transform ${showOverlay ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-1/6 md:fixed md:top-0 md:left-0 md:h-full md:bg-opacity-80`}>
        <ul className="text-white">
          {poemTitles.map((title, index) => (
            <li
              key={title}
              className={`cursor-pointer p-2 ${poemIndex === index ? 'bg-white text-black' : ''}`}
              onClick={() => {
                setPoemIndex(index);
                setShowOverlay(false);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center ml-[16.666667%] md:ml-1/6">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mb-4">{poemTitles[poemIndex]}</h1>
        </div>
        <div className="max-h-full w-full md:max-w-2xl p-6 overflow-y-auto hide-scrollbar">
          <p className="text-lg whitespace-pre-line leading-relaxed">{poemContent}</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="mt-4 px-4 py-2 bg-black text-white border border-white rounded hover:bg-white hover:text-black focus:outline-none"
          >
            {isPlaying ? '⏸' : '▶️'}
          </button>
          <button
            onClick={playNextPoem}
            className="mt-4 px-4 py-2 bg-black text-white border border-white rounded hover:bg-white hover:text-black focus:outline-none"
          >
            Neste Dikt
          </button>
        </div>
        <audio
          ref={audioRef}
          onEnded={playNextPoem}
          autoPlay
          src={`/audio/poem${poemIndex + 1}.mp3`}
        ></audio>
      </div>
    </div>
  );
};

export default PoetryPlayer;
