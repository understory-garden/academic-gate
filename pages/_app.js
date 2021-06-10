import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/lzn3ixl.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
