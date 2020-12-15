import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query =  graphql`
{
  file(relativePath: {eq: "dentist-dentistry.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const HeroAddr = () => {
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
        <div class="carousel-caption font-color">
          <h1>Contact Information</h1>
          <h3>Bhadrannavar Dental Clinic</h3>
            <p>Veerabhadreshwar Temple Road,
            Mangalwar Peth,
            Banahatti - 587311</p>
          <p>Phone: (+91) 701 901 5046</p>
          {/* <!--<p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>--> */}
        </div>
      </div>    
      </div>
  </header>
}

export default HeroAddr
