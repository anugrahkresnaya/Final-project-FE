import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navbar'
import WhyUs from '../components/WhyUs'


export default function Home() {
  return (
    <>
    <Head>
      <title>E-Flight</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Hero />
    <WhyUs />
    <Footer />
    </>
  )
}
