import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query =  graphql`
{
  file(relativePath: {eq: "hero-img.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const HeroIntro = () => {
  const {
    file : {
      childImageSharp: 
      {
        fluid
      }
    }
  } = useStaticQuery(query)

  return <header className="hero">
      <div>
      <Image fluid={fluid} className="hero-img" />
        <div class="container">
          <div class="carousel-caption text-left font-color">
            <h1>BHADRANNAVAR DENTAL CLINIC</h1>
            <h3>Banahatti</h3>
            <h4>Dr. Savita Rajkumar Bhadrannavar, BDS (Pune)</h4>
            <p><a class="btn btn-lg btn-primary" href="#Appointment" role="button">Get Appointment</a></p>
          </div>
        </div>      
      </div>
  </header>
}

export default HeroIntro
