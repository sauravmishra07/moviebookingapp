import React from 'react'
import BannerSlider from '../shared/BannerSlider'
import Recommended from '../shared/Recommended'
import LiveEvents from '../shared/LiveEvents'

const Home = () => {
  return (
    <div>
    <BannerSlider/>
    <Recommended/>
    <LiveEvents/>
    </div>
  )
}

export default Home