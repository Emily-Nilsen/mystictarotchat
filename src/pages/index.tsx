import Image from 'next/image';
import Head from 'next/head';
import { HomeHero } from '@/components/HomeHero';

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
      <main className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-slate-950">
          <Image
            priority
            fill
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mystic%20Tarot%20Chat/tarot_cards_backdrop_vcf3oo.webp"
            alt="Tarot cards collage"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />
        </div>
        <HomeHero />
      </main>
    </>
  );
}
