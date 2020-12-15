import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
        image1 : file(relativePath: { eq: "patient_reviews.jpg" }) {
          childImageSharp {
            fluid (maxWidth:500, maxHeight: 500)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} 
  render={data=> (    
      <div class="row featurette" id="Reviews">
        <div class="col-md-7">
          <h2 class="featurette-heading">Patient <span class="text-muted">Reviews</span></h2>
          <p class="lead"></p>
        </div>
        <div class="col-md-5">
          <Img fluid={data.image1.childImageSharp.fluid}/>
        </div>
      </div>
  )}
/>
);
