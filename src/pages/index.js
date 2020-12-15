import React from "react"
import { Helmet } from "react-helmet"
import Carousel from "../components/Carousel"
import Header from "../components/Header"
import Specialists from "../components/Specialists"

import "../styles/bootstrap.min.css"
import "../styles/carousel.css"

import AboutClinic from "../components/AboutClinic"
import Treatments from "../components/Treatments"
import AboutMe from "../components/AboutMe"
import SmileTransfAtClinic from "../components/SmileTransfAtClinic"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// import js file

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bhadrannavar Denat Clinic</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>

      <Header />
        
      <main>
            <Carousel />  
            <div class="container marketing">
            <Specialists />
            <hr class="featurette-divider" />

            <AboutClinic />
            <hr class="featurette-divider" />

            <AboutMe />
            <hr class="featurette-divider" />

            <Treatments />
            <hr class="featurette-divider" />

            <SmileTransfAtClinic />  
            <hr class="featurette-divider" />
            
            <Contact /> 
            <Footer />
          </div>
      </main>
    </div>
  )
}

