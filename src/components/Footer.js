import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
    <StaticQuery
       query={graphql`
       query {
       image1: file(relativePath: { eq: "tooth.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 10, maxHeight: 10) {
             ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `} 
     render={data=> (     

          <footer class="container">
            <p class="float-right"><a href="#top">Back to top</a></p>
            <p>&copy; Bhadrannavar Dental Clinic 2020 &middot; <a href="http://anyonecancode.in/" >  made by anybodycancode</a> </p>
          </footer>
     )}
   />
   );