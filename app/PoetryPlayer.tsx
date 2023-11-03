'use client';
import React, { useState, useEffect, useRef } from 'react';

const PoetryPlayer: React.FC = () => {
  const [poemIndex, setPoemIndex] = useState(0);
  const [introPlayed, setIntroPlayed] = useState(false);
  const poemTitles = ['Deepfake', 'Virtuelle Refleksjoner', 'Fragmenter', 'Usikker', 'Spiderman'];
  const poems = ['/poems/poem1.txt', '/poems/poem2.txt', '/poems/poem3.txt', '/poems/poem4.txt', '/poems/poem5.txt'];
  const [poemContent, setPoemContent] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const introAudioRef = useRef<HTMLAudioElement>(null);

  // Function to fetch poem content
  const fetchPoemContent = async (path: string) => {
    const response = await fetch(path);
    const text = await response.text();
    setPoemContent(text);
  };

  // Function to play the next poem
  const playNextPoem = () => {
    const nextIndex = (poemIndex + 1) % poems.length;
    setPoemIndex(nextIndex);
    setIsPlaying(true);
    if (nextIndex === 0) {
      setIntroPlayed(false);
    }
  };

  // Effect to fetch poem content when poemIndex changes
  useEffect(() => {
    fetchPoemContent(poems[poemIndex]);
  }, [poemIndex]);

  // Effect to handle playing and pausing the audio
  useEffect(() => {
    if (isPlaying && introPlayed) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, introPlayed]);

  // Effect to play intro when necessary
  useEffect(() => {
    if (poemIndex === 0 && !introPlayed) {
      setIsPlaying(false);
      introAudioRef.current?.play();
    }
  }, [poemIndex, introPlayed]);

  // Function to toggle play and pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle the end of the intro
  const onIntroEnd = () => {
    setIntroPlayed(true);
    setIsPlaying(true);
  };

  // Function to set the poem index and manage audio state
  const selectPoem = (index: number) => {
    setPoemIndex(index);
    setIsPlaying(false);
    setIntroPlayed(index === 0 ? false : true);
    // Reset the audioRef source to ensure the new poem audio loads
    if (audioRef.current) {
      audioRef.current.src = `/audio/poem${index + 1}.mp3`;
    }
  };

  return (
    <div className="flex w-full h-screen bg-black text-white p-4">
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 p-4 transition-transform transform ${introPlayed ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-1/6 md:fixed md:top-0 md:left-0 md:h-full md:bg-opacity-80`}>
        <ul className="text-white">
          {poemTitles.map((title, index) => (
            <li
              key={title}
              className={`cursor-pointer p-2 ${poemIndex === index ? 'bg-white text-black' : ''}`}
              onClick={() => selectPoem(index)}
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
          ref={introAudioRef}
          onEnded={onIntroEnd}
          src="/audio/intro.mp3"
        ></audio>
        <audio
          ref={audioRef}
          onEnded={playNextPoem}
          src={`/audio/poem${poemIndex + 1}.mp3`}
        ></audio>
      </div>
    </div>
  );
};

export default PoetryPlayer;
