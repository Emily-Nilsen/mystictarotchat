import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { HomeHero } from '@/components/HomeHero';
import { Introduction } from '@/components/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mystic Tarot Chat - Online Tarot Card Readings for Insight and
          Guidance
        </title>
        <meta
          name="description"
          content="Unveil your future with Mystic Tarot Chat's online tarot card readings. Gain guidance now!"
        />
        <link
          rel="canonical"
          href="https://www.mystictarotchat.com/"
          key="canonical"
        />
      </Head>
      <main>
        <HomeHero />
        <Introduction />
      </main>

      <Script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        widget-id="lMHaZB"
      ></Script>
    </>
  );
}
