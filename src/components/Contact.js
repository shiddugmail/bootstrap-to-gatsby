import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
        image1: file(relativePath: { eq: "patient-appointment.jpg" }) {
          childImageSharp {
            fluid (maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} 
  render={data=> (    
    <div class="row featurette" id="Appointment">
      <div class="col-lg-7 order-md-2">
        <p class="lead"><iframe title = "Contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLScIwya9snAn3xeY8w4na7mHs_UFu0MgYvNx7aEIUPooAFSSEg/viewform?embedded=true" width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></p>
        
      </div>
      <div class="col-md-5 order-md-1">
        <Img fluid={data.image1.childImageSharp.fluid}/>
      </div>
    </div>
  )}
/>
);