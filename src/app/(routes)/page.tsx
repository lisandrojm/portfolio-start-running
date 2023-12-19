/* src/app/(routes)/page.tsx */

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  /* loading testing */
  /*   await new Promise((resolve) => setTimeout(resolve, 3000)); */

  return (
    <main className="flex flex-col items-center justify-between">
      {/* Fonts test */}
      <div className="border rounded p-3 my-1 mb-3">
        <h1 className="tertiary__font italic text-3xl">Home</h1>
      </div>
      <div className="border rounded p-3 my-1">
        <h1 className="tertiary__font italic text-3xl">Fonts</h1>
        <p>Roboto Mono</p>
        <p className={`secondary__font`}>Roboto Flex</p>
        <p className={`tertiary__font`}>Roboto Serif</p>
        <p className={`tertiary__font font-bold`}>Roboto Serif bold</p>
        <p className={`tertiary__font italic`}>Roboto Serif italic</p>
        <p className={`tertiary__font italic font-bold uppercase`}>Roboto Serif italic bold uppercase</p>
      </div>
    </main>
  );
}
