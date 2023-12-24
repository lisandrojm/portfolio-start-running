/* src/app/_components/Navbar.tsx */

import Link from 'next/link';
import styles from '@/_styles/_components/Navbar.module.css';
import ThemeSwitcher from '@/_components/ThemeSwitcher';
export default function Navbar() {
  return (
    <nav className={`${styles.navbar} m-3`}>
      <div className="border rounded p-3 my-4 flex justify-between items-center">
        <h1 className="m-1 tertiary__font italic text-3xl">Navbar</h1>
        <ul className="flex">
          <li className="m-1 flex items-center">
            <Link className="underline text-white" href="/">
              Home
            </Link>
          </li>
          <li className="m-1 mr-4 flex items-center">
            <Link className="underline text-white" href="/form">
              Form
            </Link>
          </li>
          <ThemeSwitcher />
        </ul>
      </div>
    </nav>
  );
}
