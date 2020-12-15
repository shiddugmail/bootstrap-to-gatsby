import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
    image1: file(relativePath: { eq: "dentist-icon.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "dr-dayanand-huddar.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "dentist-icon.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `} 
  render={data=> (     
      <div>
        <h2 class="text-center">Visiting Specialists</h2>
        <div class="row">        
            <div class="col-lg-4">
                <Img fluid={data.image1.childImageSharp.fluid} className="rounded-circle"/>
                <h2>Dr. Nikhil Biradar</h2>
                <p>Orthodontics</p>
            </div>
            <div class="col-lg-4">
            <Img fluid={data.image2.childImageSharp.fluid}
            className="rounded-circle"/>
                <h2>Dr. Huddar</h2>
                <p>Prosthodontist</p>
            </div>
            <div class="col-lg-4">
                <Img fluid={data.image3.childImageSharp.fluid}
                className="rounded-circle"/>
                <h2>Dr. Sanadi</h2>
                <p>Oral Surgeon</p>
            </div>
        </div>
      </div> 
  )}
/>
);