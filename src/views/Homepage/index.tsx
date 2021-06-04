import Footer from '../../components/Footer/Footer'
import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainCotent'
import Navigation from '../../components/Navigation/Navigation'



export const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>

  )
}
