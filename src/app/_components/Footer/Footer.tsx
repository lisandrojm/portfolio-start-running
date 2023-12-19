/* src/app/_components/Navbar/Navbar.tsx */

import '@/_components/Footer/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="m-3">
      <div className="border rounded p-3 my-4 flex justify-between items-end">
        <h1 className="m-1 tertiary__font italic text-3xl">Footer</h1>
        <ul className="flex">
          <li className="m-1 pb-1">
            <Link className="underline" href="/">
              Home
            </Link>
          </li>
          <li className="m-1">
            <Link className="underline" href="/form">
              Form
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
