/* src/app/_components/Form.tsx */
'use client';

import styles from '@/_styles/_components/Form.module.css';
import { useState } from 'react';
import { Button, Input, Textarea } from '@/_components/_ui';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto uppercase max-w-md">
        <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">
          {' '}
          Let&apos;s go <br />
          to the point
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-6 max-w-md sm:mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div>
              <Input placeholder="Name" type="text" name="name" id="name" autoComplete="organization" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div>
              <Input placeholder="Email" type="email" name="email" id="email" autoComplete="email" required />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div>
              <Textarea placeholder="Message" defaultValue={''} name="message" id="message" rows={5} />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}
