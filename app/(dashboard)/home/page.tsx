import React, { FC } from 'react'
import Hero from './components/Hero'
import AIDemo from './components/AIDemo'
import FeedbackForm from './components/FeedbackForm'
import Features from './components/Features'
import RSSExapmle from './components/RSSExapmle'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Features />
      <AIDemo />
      <RSSExapmle />
      <FeedbackForm />
    </>
  )
}

export default Home
