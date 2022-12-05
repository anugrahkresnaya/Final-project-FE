import React from 'react'
import Head from 'next/head'
import Footer from '../components/home/Footer'
import Hero from '../components/home/Hero'
import Navigation from '../components/home/Navbar'
import WhyUs from '../components/home/WhyUs'
import Benefits from '../components/home/Benefits'
import BgImage from '../components/home/BgImage'


export default function Home() {
  return (
    <>
    <Head>
      <title>E-Flight</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    {/* <BgImage /> */}
    <Hero />
    <WhyUs />
    <Benefits />
    <Footer />
    </>
  )
}
