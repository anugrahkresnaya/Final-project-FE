import Head from 'next/head'
import Hero from '../components/Hero'
import Navigation from '../components/Navbar'


export default function Home() {
  return (
    <>
    <Head>
      <title>E-Flight</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Hero />
    </>
  )
}
