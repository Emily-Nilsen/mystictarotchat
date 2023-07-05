import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Head from 'next/head';

const tiers = [
  {
    name: '30 minutes',
    id: 'tier-30-minutes',
    href: '#reading',
    priceMonthly: '$39',
    description: '30 Minute Full Reading',
    features: [
      'In-depth insights into your life’s questions',
      'Personalised guidance for key areas of focus',
      'Clear and concise answers within 30 minutes',
    ],
  },
  {
    name: '60 minutes',
    id: 'tier-60-minutes',
    href: '#reading',
    priceMonthly: '$74',
    description: '60 Minute Full Reading',
    features: [
      'Comprehensive exploration of past, present, and future',
      'Detailed analysis of your life’s journey',
      'Extended session for in-depth clarity and guidance',
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>
          Tarot Reading Pricing: Affordable Rates for Personalised Insights and
          Guidance
        </title>
        <meta
          name="description"
          content="Unlock personalized tarot readings with affordable pricing for enlightening guidance."
        />
        <link
          rel="canonical"
          href="https://mystictarotchat.com/pricing"
          key="canonical"
        />
      </Head>
      <div className="overflow-hidden bg-gray-900 isolate">
        <div className="px-6 pt-24 mx-auto text-center max-w-7xl pb-96 sm:pt-32 lg:px-8">
          <div className="max-w-4xl mx-auto pt-28 sm:pt-40">
            <p className="text-base font-semibold leading-7 text-violet-400">
              Illuminate your Path with a
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              tarot reading
            </h1>
          </div>
          <div className="relative mt-6">
            <p className="max-w-2xl mx-auto text-lg leading-8 text-white/60">
              Experience the magic of a 30 minute personalised tarot reading
              with one of our experienced readers or delve deeper with a
              comprehensive 60 minute full reading.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root pb-24 bg-t sm:pb-32">
          <div className="-mt-80">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="flex flex-col justify-between p-8 shadow-xl bg-gray-950 rounded-3xl ring-1 ring-gray-900/10 sm:p-10"
                  >
                    <div>
                      <h3
                        id={tier.id}
                        className="text-base font-semibold leading-7 text-violet-600"
                      >
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline mt-4 gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-white">
                          {tier.priceMonthly}
                        </span>
                        {/* <span className="text-base font-semibold leading-7 text-gray-600">
                        /month
                      </span> */}
                      </div>
                      <p className="mt-6 text-base leading-7 text-white/70">
                        {tier.description}
                      </p>
                      <ul
                        role="list"
                        className="mt-10 space-y-4 text-sm leading-6 text-white/70"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="flex-none w-5 h-6 text-violet-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="mt-8 block rounded-full bg-violet-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition duration-150 ease-in-out"
                    >
                      Connect with a reader
                    </a>
                  </div>
                ))}
                {/* <div className="flex flex-col items-start p-8 gap-x-8 gap-y-6 rounded-3xl ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-violet-600">
                    Discounted
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-violet-600 ring-1 ring-inset ring-violet-200 hover:ring-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
