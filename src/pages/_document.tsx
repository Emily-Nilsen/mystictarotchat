import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
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
