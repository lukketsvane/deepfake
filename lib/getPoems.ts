'use client'; // Add this line to mark the module for client-side rendering

import fs from 'fs';
import path from 'path';

export function getStaticProps() {
  const poemsDirectory = path.join(process.cwd(), 'poems');
  const filenames = fs.readdirSync(poemsDirectory);
  const poems = filenames.map((filename) => {
    const filePath = path.join(poemsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  });

  return {
    props: {
      poems,
    },
  };
}
