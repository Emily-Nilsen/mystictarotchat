import Image from 'next/image';
import { HomeHero } from '@/components/HomeHero';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-slate-950">
        <Image
          fill
          src="/tarot-cards-backdrop.webp"
          alt="Tarot cards collage"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />
      </div>
      <HomeHero />
    </main>
  );
}

// Mystic Tarot Chat - Online Tarot Card Readings for Insight and Guidance
// Unveil your future with Mystic Tarot Chat's online tarot card readings. Gain guidance now!
