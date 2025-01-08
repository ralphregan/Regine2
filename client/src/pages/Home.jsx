import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testtimonials from '../components/Testtimonials'
import GenerateBTN from '../components/GenerateBTN'


const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testtimonials/>
      <GenerateBTN/>
    </div>
  )
}

export default Home
