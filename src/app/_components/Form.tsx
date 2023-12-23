/* src/app/_components/Form.tsx */
'use client';

import styles from '@/_styles/_components/Form.module.css';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isola px-6 lg:px-8">
      <div className="mx-auto uppercase max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">
          {' '}
          Let&apos;s go <br />
          to the point
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-6 max-w-xl sm:mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div>
              <input type="text" name="name" id="name" autoComplete="organization" className="block w-full border-0 px-3.5 py-2 bg-transparent text-orange shadow-sm ring-1 ring-inset ring-white placeholder:text-white placeholder:uppercase focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" placeholder="Name" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div>
              <input type="email" name="email" id="email" autoComplete="email" className="block w-full -md border-0 px-3.5 py-2 bg-transparent text-orange shadow-sm ring-1 ring-inset ring-white placeholder:text-white placeholder:uppercase focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" placeholder="Email" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div>
              <textarea name="message" id="message" rows={4} className="block w-full -md border-0 px-3.5 py-2 bg-transparent text-orange shadow-sm ring-1 ring-inset ring-white placeholder:text-white placeholder:uppercase focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" placeholder="Message" defaultValue={''} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full -md bg-transparent border border-orange px-3.5 py-2.5 text-center text-sm font-semibold text-orange uppercase shadow-sm hover:bg-orange hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
