import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />

        <meta property="og:title" content="Drink Recipes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodriolivares.vercel.app/" />
        <meta property="og:image" content="/meta_image.jpg" />
        <meta property="og:description" content="Drink recipes and ingredients, with diverse filters to search them" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Drink Recipes" />
        <meta name="twitter:url" content="https://rodriolivares.vercel.app/" />
        <meta name="twitter:site" content="@RodriOlivares02" />
        <meta name="twitter:description" content="Drink recipes and ingredients, with diverse filters to search them" />
        <meta name="twitter:image" content="/meta_image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
