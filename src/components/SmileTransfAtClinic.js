import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
 <StaticQuery
    query={graphql`
    query {
        image0 : file(relativePath: { eq: "smile-transformation-0.jpg" }) {
          childImageSharp {
            fluid (maxWidth:500, maxHeight: 500)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1 : file(relativePath: { eq: "GummySmile_Before.jpg" }) {
          childImageSharp {
            fluid (maxWidth:150, maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 : file(relativePath: { eq: "GummySmile_After.jpg" }) {
          childImageSharp {
            fluid (maxWidth:150, maxHeight: 150)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 : file(relativePath: { eq: "SmileArc_Before.jpg" }) {
          childImageSharp {
            fluid (maxWidth:150, maxHeight: 150)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4 : file(relativePath: { eq: "SmileArc_After.jpg" }) {
          childImageSharp {
            fluid (maxWidth:150, maxHeight: 150)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `}
  render={data=> (
      <div class="row featurette" id="Smile-Transformations">
              <div class="col-md-12">
        <h2 class="featurette-heading">Smile Transformations<span class="text-muted text-lowercase text-hide"> At Clinic</span></h2>
  
          <div class="row">        
            <div class="col-lg-4">
                <Img fluid={data.image1.childImageSharp.fluid} 
                className="rounded"/>
                <h2>Smile</h2>
                <p>Before</p>
            </div>
            <div class="col-lg-4">
            <Img fluid={data.image2.childImageSharp.fluid}
            className="rounded"/>
                <h2>Smile</h2>
                <p>After</p>
            </div>
            <div class="col-lg-4">
                <h2>Treating a gummy smile</h2>
                <p>A smile with gingival excess, also known as a ‘gummy’ smile, can distract from the natural beauty of the teeth and face. </p>
            </div>
            <div class="col-lg-4">
                <Img fluid={data.image3.childImageSharp.fluid}
                className="rounded"/>
                <h2>Smile</h2>
                <p>Before</p>
            </div>
            <div class="col-lg-4">
                <Img fluid={data.image4.childImageSharp.fluid}
                className="rounded"/>
                <h2>Smile</h2>
                <p>After</p>
            </div>
            <div class="col-lg-4">
                <h2>Smile arc</h2>
                <p>An important aspect of a beautiful smile is the smile arc. A smile arc is created when the curve of the teeth follows the curve of the lower lip, creating a naturally beautiful and flowing smile.</p>
            </div>
          </div>
        </div>
      </div>
  )}
/>
);
