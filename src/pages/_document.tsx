import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const title = process.env.APP_META_TITLE || 'Next.js Starter'
  const description =
    process.env.APP_META_DESCRIPTION || 'Next.js Starter'
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
