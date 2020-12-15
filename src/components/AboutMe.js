import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
        image1: file(relativePath: { eq: "dentist-icon.jpg" }) {
          childImageSharp {
            fluid (maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} 
  render={data=> (    
    <div class="row featurette" id="About-Doctor">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Dr. Savita Rajkumar Bhadrannavar,<span class="text-muted"> BDS (Pune)</span></h2>
        <p class="lead">Clinical  Dentistry</p>
      </div>
      <div class="col-md-5 order-md-1">
        <Img fluid={data.image1.childImageSharp.fluid}/>
      </div>
    </div>
  )}
/>
);