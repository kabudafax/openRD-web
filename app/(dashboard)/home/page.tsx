import React, { FC } from 'react'
import Hero from './components/Hero'
import AIDemo from './components/AIDemo'
import FeedbackForm from './components/FeedbackForm'
import Features from './components/Features'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Features />
      <AIDemo />
      <FeedbackForm />
    </>
  )
}

export default Home
