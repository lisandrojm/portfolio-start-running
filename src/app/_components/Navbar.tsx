/* components/Navbar.tsx */

import Link from 'next/link';

export default function Home() {
  return (
    <nav className="m-3">
      <div className="border rounded p-3 my-4 flex justify-between items-end">
        <h1 className="m-1 tertiary__font italic text-3xl">Navbar</h1>
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
    </nav>
  );
}
