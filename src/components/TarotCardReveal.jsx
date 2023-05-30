import Script from 'next/script';
import Image from 'next/image';
import { useState } from 'react';

const cards = ['/fool.png', '/tower.png', '/sun.png'];

export function TarotCardReveal() {
  const [cardSrc, setCardSrc] = useState('/back.png');

  const handleTurnCard = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setCardSrc(randomCard);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl text-white">Unlock the Mysteries</h1>
      <div className="flex items-center justify-center w-full m-6">
        <div className="relative w-64 h-80">
          <Image
            id="myTarot"
            width={640}
            height={894}
            src={cardSrc}
            alt="The Back"
            className="object-cover"
          />
        </div>
      </div>
      <button
        id="turnCard"
        className="my-8 rounded-full bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        onClick={handleTurnCard}
      >
        Reveal your fate
      </button>
    </div>
  );
}
