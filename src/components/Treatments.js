import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
 <StaticQuery
    query={graphql`
    query {
        image1 : file(relativePath: { eq: "tooth.png" }) {
          childImageSharp {
            fluid (maxWidth:600, maxHeight: 725)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `} 
  render={data=> (    
      <div class="row featurette" id="Treatments">
        <div class="col-md-7">
            <h2 class="featurette-heading">Dental Care Treatment <span class="text-muted">At Our Clinic</span></h2>
            <p class="lead">
            <ul>
                <li>Root Canal Treatment (ಹಲ್ಲಿನ ಬೇರುನಾಳ ಚಿಕಿತ್ಸೆ)</li>
                <li>GIC Filling (ಹಲ್ಲುಗಳಿಗೆ ಸಿಮೆಂಟ್ ತುಂಬುವದು)</li>
                <li>Silver Filling (ಹಲ್ಲುಗಳಿಗೆ ಬೆಳ್ಳಿ ತುಂಬುವದು)</li>
                <li>Light Cure Composite Treatment (ಕಾಂಪೋಜಿಟ್ ಚಿಕಿತ್ಸೆ)</li>
                <li>Ultrasonic Scaling (ಹಲ್ಲುಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸುವದು)</li>
                <li>Fixed Crowns & Bridges (ಶಾಶ್ವತ ಹಲ್ಲುಗಳ ಅಳವಡಿಕೆ)</li>
                <li>Removable Partial Denture (ಪ್ಲಾಸ್ಟಿಕ್ ಹಲ್ಲುಗಳ ಅಳವಡಿಕೆ)</li>
                <li>Post & Core Treatment (ಮುರಿದ ಹಲ್ಲುಗಳ ಚಿಕಿತ್ಸೆ)</li>
                <li>Complete Denture (ಹಲ್ಲಿನ ಸೆಟ್ಟುಗಳ ತಯಾರಿಕೆ)</li>
                <li>Orthodontic Treatment (ವಕ್ರದಂತ ಚಿಕಿತ್ಸೆ)</li>
                <li>Cosmetic Dental Treatment (ಸುರೂಪದಂತ ಚಿಕಿತ್ಸೆ)</li>
                <li>Pedodontics (ಚಿಕ್ಕಮಕ್ಕಳ ದಂತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆರೋಗ್ಯ ಶಿಕ್ಷಣ)</li>
                <li>Surgical Extractions (ಅಕ್ಕಲದ ಹಲ್ಲನ್ನು ಶಸ್ತ್ರ ಚಿಕಿತ್ಸೆಯ ಮೂಲಕ ತೆಗೆಯುವದು)</li>
            </ul>
            </p>
        </div>
        <div class="col-md-5 vertical center">
            <Img fluid={data.image1.childImageSharp.fluid}/>
        </div>
      </div>
  )}
/>
);
