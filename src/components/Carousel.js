import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';

export default () => (
 <StaticQuery
    query={graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    
    image2: file(relativePath: { eq: "dentist-dentistry.jpg" }) {
      childImageSharp {
        fluid (quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "dentist-timings.jpg" }) {
      childImageSharp {
        fluid (quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }

    image1: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid (quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `} 
  render={data=> (
      <Carousel interval={2000} id="top">
        <Carousel.Item>
          <Img fluid={data.image1.childImageSharp.fluid}/>
          <div class="container">
              <div class="carousel-caption text-left">
                <h1>BHADRANNAVAR DENTAL CLINIC</h1>
                <h3>Banahatti</h3>
                <h4>Dr. Savita Rajkumar Bhadrannavar, BDS (Pune)</h4>
                <p><a class="btn btn-lg btn-primary" href="#Appointment" role="button">Get Appointment</a></p>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.image2.childImageSharp.fluid}/>
          <div class="container">
              <div class="carousel-caption">
                <h1>Contact Information</h1>
                <h3>Bhadrannavar Dental Clinic</h3>
                  <p>Veerabhadreshwar Temple Road,
                  Mangalwar Peth,
                  Banahatti - 587311</p>
                <p>Phone: (+91) 701 901 5046</p>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.image3.childImageSharp.fluid}/>
          <div class="container">
              <div class="carousel-caption text-right font-color">
                <h1>Clinic Timing</h1>
                <p>[Timing]</p>
              </div>
            </div>
        </Carousel.Item>
      </Carousel>
  )
}
/>
);