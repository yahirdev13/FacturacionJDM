import React from 'react'
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/Footer'

import '../client/contactanosStyle.css'


import img from '../../images/banner.png'

export default function ContactanosScreen() {

  return (
    <div>
      <Navbar />
      <div class="hero" id="hero">
        <h1 class="hero__title">Fill Murray</h1>
        <p class="hero__tagline">never fear the scroll</p>

        <div class="mouse" aria-hidden="true">
          <span class="mouse__wheel"></span>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/392/Apple_logo_black.svg.png" alt="the trademark of apple inc." />
        </div>
      </div>
      <Footer />
    </div>
  )
}


const styles = {
  banner: {
    width: "100%",
    height: "auto",
  },
  img: {
    width: "100%",
  },
}