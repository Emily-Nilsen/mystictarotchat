import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1685363896/Mystic%20Tarot%20Chat/favicon_or7g7l.svg"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/asg4jef.css"
        ></link>
      </Head>
      <body className="bg-contain bg-cards lg:bg-cards-extended">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
