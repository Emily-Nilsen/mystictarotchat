import Image from 'next/image';

export function Introduction() {
  return (
    <div className="px-6 pb-32 bg-t lg:px-8">
      <div className="max-w-3xl mx-auto text-base leading-7 text-white/70">
        <section id="welcome">
          <p className="text-base font-semibold leading-7 text-violet-500">
            Welcome to
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mystic Tarot Chat
          </h1>
          <p className="mt-6 text-xl leading-8">
            Welcome to our mystical realm, where the ancient art of tarot
            unfolds its secrets before you. Step into a world of divination,
            guidance, and enchantment as you embark on a journey of
            self-discovery.
          </p>
          <div className="max-w-2xl mt-10">
            <p>
              Our gifted Tarot readers await, ready to illuminate the path
              ahead. Whether you seek clarity, insight, or a glimpse into the
              tapestry of your destiny, you’ve come to the right place.
            </p>

            <p className="mt-8">
              Trust in the cards and allow the whispers of the universe to
              reveal their hidden wisdom. Let the tarot be your guiding light as
              you unlock the mysteries that await you. Welcome to our secret
              sanctuary of Tarot readings.
            </p>

            <h2
              id="free-readings"
              className="mt-16 text-2xl font-bold tracking-tight text-white"
            >
              What to Expect from a Tarot Reading
            </h2>
            <p className="mt-6">
              Delve into the depths of self-discovery and gain profound insights
              through a personalized tarot reading. Our skilled Tarot readers
              will carefully interpret the cards, shedding light on your past,
              present, and potential future. Discover hidden aspects of
              yourself, gain clarity on important matters, and find guidance in
              navigating life’s complexities.
            </p>
            <figure className="mt-10 border-l border-violet-600 pl-9">
              <blockquote className="italic font-semibold text-white">
                <p>
                  “Mystic Tarot Chat completely transformed my perspective. The
                  reading was incredibly accurate and provided profound
                  insights. The reader’s intuition and guidance helped me
                  navigate important life decisions. Highly recommended!”
                </p>
              </blockquote>
              <figcaption className="flex mt-6 gap-x-4">
                <Image
                  className="flex-none w-6 h-6 rounded-full bg-gray-50"
                  src="/Matthew_Davis.webp"
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
              A tarot reading can provide inspiration, validation, and new
              perspectives, empowering you to make informed choices and embrace
              your true path.
            </p>
          </div>
        </section>

        <section id="readings">
          <div className="max-w-2xl mt-16">
            <h2
              id="paid-readings"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Readings
            </h2>
            <p className="mt-6">
              Unlock the transformative power of the tarot with our insightful
              readings. Our experienced Tarot readers will guide you through the
              intricate tapestry of the cards, unravelling their secrets to
              offer profound insights and guidance.
            </p>
            <p className="mt-8">
              Each card is carefully examined, revealing the intricacies of your
              unique journey. Our readers will interpret the spread’s symbolism,
              energies, and connections, providing you with a comprehensive
              understanding of your circumstances.
            </p>
            <p className="mt-8">
              Prepare to embark on a journey of self-discovery, illumination,
              and empowerment as you unlock the mysteries within. Book a reading
              today, and let the wisdom of the tarot illuminate your path.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
