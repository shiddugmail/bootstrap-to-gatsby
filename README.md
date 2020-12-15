<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Porting an HTML Site to Gatsby
</h1>

<h2> referred the step by step guide in this <a href="https://www.gatsbyjs.com/docs/porting-an-html-site-to-gatsby/"> gatsby docs </a> of gatsby and this page contains most of the steps from the same page. </h2>
This guide focuses on the parts of Gatsby that are applicable to a static website. For a more comprehensive walk through Gatsby’s features check out the Gatsby tutorial. By following the example on this page, you will complete the key stages of porting an HTML website to Gatsby and establish your Gatsby development workflow.

Note: This guide can also be used to migrate a section of a site, to be served next to existing files. Pay extra attention to the section on hosting for guidance.

Getting Started
Here is the structure of an example static HTML/CSS website that this guide will walk through porting:


Assumptions
The example site uses global CSS files (style.css and normalize.css); styling structures like Sass architectures or CSS-in-JS can be accommodated but will not be covered here.

No client-side JavaScript (e.g jQuery etc.) is on the example site. If your site includes client-side JavaScript libraries and functionality, Gatsby may conflict with it at build time if not handled or removed when porting. Learn more about Debugging HTML Builds.

Development environment
Gatsby generates websites and web applications for production through a compilation and build process, and it also has tools optimized for local development. To set up the Gatsby CLI and development environment (if you haven’t already) check out Part Zero of the Gatsby tutorial.

Gatsby Project
Now that you are set up, you can use the Gatsby and npm CLI tools in your terminal to get this site ported! Make a new project using the Gatsby hello world starter with the following command:

Copy code to clipboard
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
You should now have a folder called gatsby-site containing a basic Gatsby application. Open the new folder in your code editor and cd (change directory) into the folder in your terminal to continue:

Copy code to clipboard
cd gatsby-site
The /src folder contains most of the front-end code for the Gatsby site. In the Gatsby build process, every component file in the /src/pages folder will automatically create an HTML page. In your new Gatsby application, the only page created is from the index page component in /src/pages/index.js:

/gatsby-site/src/pages/index.js
Copy/gatsby-site/src/pages/index.js: copy code to clipboard
import React from "react"
export default function Home() {
  return <div>Hello world!</div>
}
Run the development server with gatsby develop in the command line to see the website in your browser.

Copycopy code to clipboard
gatsby develop
You can now visit the page running in your browser at http://localhost:8000. Hello Gatsby! 👋

Porting index.html
Here is /index.html from the example site structure above:

/website-domain/who/index.html
Copy/website-domain/who/index.html: copy code to clipboard
<html lang="en">
  <head>
    <title>Taylor's Tidy Trees</title>
    <link href="/assets/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/assets/normalize.css" />
    <link rel="stylesheet" type="text/css" href="/assets/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-color logo-text">Taylor's Tidy Trees</a>
      <nav>
        <ul>
          <li><a href="/about.html">About</a></li>
          <li><a href="/services/index.html">Services</a></li>
          <li><a href="/who/index.html">Who We Are</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Welcome To Taylor's Tidy Trees</h1>
      <h2>We care about trees of all kinds!</h2>
    </main>
  </body>
</html>
In the following sections, you’ll convert this block of HTML into its equivalent code in Gatsby.

Continue the steps as in https://www.gatsbyjs.com/docs/porting-an-html-site-to-gatsby/

