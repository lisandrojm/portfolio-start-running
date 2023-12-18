/* src/app/(routes)/[...not_found]/layout.tsx */

import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import '@/_styles/globals.css';
import Navbar from '@/_components/Navbar';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

interface Icons {
  icon: string;
  apple: string;
  shortcut: string;
  sizes: {
    apple: number[];
    android: number[];
    favicon: number[];
  };
}

interface OpenGraphImage {
  url: string;
  alt: string;
}

interface Author {
  name: string;
}

interface HttpEquiv {
  'X-UA-Compatible'?: string;
}

export const metadata: Metadata & {
  icons: Icons;
  authors: Author;
  url: string;
  image: string;
  charset: string;
  httpEquiv?: HttpEquiv;
  msapplicationTapHighlight: string;
  msapplicationTileColor: string;
  msapplicationTileImage: string;
} = {
  title: 'lisandrojm 🎯',
  description: 'Lisandro Martinez. Argentinian Full-Stack Dev. Developer based in Argentina.',
  authors: { name: 'Lisandro Martinez' },
  icons: {
    icon: '/favicon.ico?v=4',
    apple: '/apple-touch-icon.png?v=4',
    shortcut: '/apple-touch-icon.png',
    sizes: {
      apple: [57, 60, 72, 76, 114, 120, 144, 152, 180],
      android: [192],
      favicon: [32, 96, 16],
    },
  },
  url: 'https://lisandrojm.vercel.app',
  image: 'https://lisandrojm.vercel.app/_assets/img/cover-share.webp',
  charset: 'utf-8',
  httpEquiv: {
    'X-UA-Compatible': 'IE.edge',
  },
  manifest: '/site.webmanifest',
  msapplicationTapHighlight: 'no',
  robots: 'noodp',
  msapplicationTileColor: '#ffffff',
  msapplicationTileImage: '/ms-icon-144x144.png', // Agregado para msapplicationTileImage
  openGraph: {
    images: [
      {
        url: 'https://lisandrojm.vercel.app/_assets/img/cover-share.webp',
        alt: 'lisandrojm 🎯',
      },
    ] as OpenGraphImage[],
    title: 'lisandrojm 🎯',
    description: 'Lisandro Martinez. Argentinian Full-Stack Dev. Developer based in Argentina.',
    url: 'https://lisandrojm.vercel.app',
  },
  twitter: {
    card: 'summary',
    site: 'https://lisandrojm.vercel.app',
    title: 'lisandrojm 🎯',
    description: 'Lisandro Martinez. Argentinian Full-Stack Dev. Developer based in Argentina.',
    images: [
      {
        url: 'https://lisandrojm.vercel.app/_assets/img/cover-share.webp',
        alt: 'lisandrojm 🎯',
      },
    ] as OpenGraphImage[],
  },
  metadataBase: new URL('https://lisandrojm.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
