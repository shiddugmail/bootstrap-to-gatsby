import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
        image1: file(relativePath: { eq: "aboutclinic.jpg" }) {
          childImageSharp {
            fluid (maxWidth: 500, maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "dentist-icon.jpg" }) {
          childImageSharp {
            fluid (maxWidth: 500, maxHeight: 500 , quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} 
  render={data=> (    
    <div class="row featurette" id="About-Clinic">
      <div class="col-md-7">
        <h2 class="featurette-heading" >Welcome to the <span class="text-muted">Our Clinic</span></h2>
        <p class="lead"><b>Since 2012, Bhadrannavar Dental Clinic</b> offers a comprehensive set of oral healthcare,
          leverages best-in-class equipment, and utilizes the latest 
          pain-management technology and provide affordable healthcare of the highest quality.</p>
      </div>
      <div class="col-md-5">
        <Img fluid={data.image1.childImageSharp.fluid}/>
      </div>
    </div>
  )}
/>
);