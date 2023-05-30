import Image from 'next/image';

export function Introduction() {
  return (
    <div className="px-6 py-32 bg-t lg:px-8">
      <div className="max-w-3xl mx-auto text-base leading-7 text-white/70">
        <p className="text-base font-semibold leading-7 text-violet-500">
          Welcome to
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Mystic Tarot Chat
        </h1>
        <p className="mt-6 text-xl leading-8">
          Welcome to our mystical realm, where the ancient art of tarot unfolds
          its secrets before you. Step into a world of divination, guidance, and
          enchantment as you embark on a journey of self-discovery.
        </p>
        <div className="max-w-2xl mt-10">
          <p>
            Our gifted Tarot readers await, ready to illuminate the path ahead.
            Whether you seek clarity, insight, or a glimpse into the tapestry of
            your destiny, you’ve come to the right place.
          </p>

          <p className="mt-8">
            Trust in the cards and allow the whispers of the universe to reveal
            their hidden wisdom. Let the tarot be your guiding light as you
            unlock the mysteries that await you. Welcome to our secret sanctuary
            of Tarot readings.
          </p>
          <h2
            id="free-readings"
            className="mt-16 text-2xl font-bold tracking-tight text-white"
          >
            Free Readings
          </h2>
          <p className="mt-6">
            Experience a taste of the mystical realm within the cards with our
            complimentary tarot reading. Let us offer you a brief glimpse into
            their profound wisdom. Share your question or area of focus, and our
            skilled Tarot readers will select a few cards to shed light on your
            path.
          </p>
          <figure className="mt-10 border-l border-violet-600 pl-9">
            <blockquote className="italic font-semibold text-white">
              <p>
                “Mystic Tarot Chat completely transformed my perspective. The
                reading was incredibly accurate and provided profound insights.
                The reader’s intuition and guidance helped me navigate important
                life decisions. Highly recommended!”
              </p>
            </blockquote>
            <figcaption className="flex mt-6 gap-x-4">
              <Image
                className="flex-none w-6 h-6 rounded-full bg-gray-50"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mystic%20Tarot%20Chat/Matthew_Davis_g2ghln.webp"
                width={300}
                height={300}
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">
                  Maria Hill
                </strong>{' '}
                – Matthew Davis
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            While this free reading provides a condensed overview, it still
            offers valuable insights and inspiration, helping you navigate the
            currents of life. Embrace this complimentary gift and discover the
            magic of the tarot.
          </p>
        </div>

        <div className="max-w-2xl mt-16">
          <h2
            id="paid-readings"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Paid Readings
          </h2>
          <p className="mt-6">
            Unlock the full power of the tarot with our personalized paid
            readings, meticulously crafted to illuminate the depths of your
            inquiries. Our skilled Tarot readers will delve into the intricate
            tapestry of the cards, unravelling their secrets to offer you
            profound insights and guidance.
          </p>
          <p className="mt-8">
            Each card will be examined through a carefully tailored spread,
            revealing your past, present, and future intricacies. Our readers
            will interpret the spread’s symbolism, energies, and connections,
            allowing you to understand your circumstances comprehensively.
          </p>
          <p className="mt-8">
            Furthermore, our reader’s intuitive abilities will infuse the
            reading with unique perspectives, highlighting possible hidden
            options and paths. Prepare to embark on a journey of self-discovery,
            illumination, and empowerment as you unlock the mysteries within.
          </p>
        </div>
      </div>
    </div>
  );
}
