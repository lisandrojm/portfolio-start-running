import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Fonts test start */}
      <div>
        <h1 className="tertiary__font italic text-3xl">Fonts test</h1>
        <p className={`primary__font`}>Roboto Mono</p>
        <p className={`secondary__font`}>Roboto Flex</p>
        <p className={`tertiary__font`}>Roboto Serif</p>
        <p className={`tertiary__font font-bold`}>Roboto Serif bold</p>
        <p className={`tertiary__font italic`}>Roboto Serif italic</p>
        <p className={`tertiary__font italic font-bold uppercase`}>Roboto Serif italic bold uppercase</p>
      </div>
      {/* Links test */}
      <div className="border rounded p-3 my-4">
        <h1 className="tertiary__font italic text-3xl">Links</h1>
        <ul className="flex flex-col">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
