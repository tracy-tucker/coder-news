# 🗞 Coder News 🗞 | Extra! Extra! Read all about it!

<!-- CHANGE IMAGE LOGO -->
<!--<img src="https://res.cloudinary.com/tracyt/image/upload/v1643381970/spark-fitness-logo_yk99gu.jpg" width="244" alt="Spark Fitness logo">-->

VISIT THE [SITE LIVE](https://coder-news-online.netlify.app "Coder News")

### OVERVIEW

<!-- HOME screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644674243/coder-news-home_yitofr.png" width="600" alt="Coder News Home screenshot">

Welcome to 🗞 **Coder News** 🗞 - a blog designed with the developer in mind.

⚙️ **Purpose:** On the surface, this blog looks like any other functioning site for a blogger. The difference is in the setup! This blog is designed with the Gatsby MDX Plugin. This expands the opportunity for a developer to incorporate JSX within the markdown.

<!-- BLOG QUICK VIEW goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644883217/coder-news-quick-view_iv3ilh.png" width="600" alt="Quick view of blogs">

<!--DISCUSS THE BLOG QUICK VIEW -->
⚙️ **Blog View:** The home screen is retrieving data on three posts, based on publish **DATE**. This quick view is organized to retrieve quick information about the posts, such as an **EXCERPT**, the **CATEGORY**, the estimated **READ TIME**, and provides a **LINK** for further reading.

<!-- RECENT POSTS and CATEGORIES screenshots goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644885581/coder-news-recent-posts_tnsiu1.png" width="300" alt="Recent Posts component"> <img src="https://res.cloudinary.com/tracyt/image/upload/v1644885593/coder-news-categories-comp_quyj5w.png" width="300" alt="Categories components">

<!--DISCUSS THE HOME LAYOUT AND FILTERS -->
⚙️ **A Quick Glance:** In the above screenshot, you can see the sophistication of the layout. These side components on the home page retrieve **POSTS** data to offer the user two different avenues for viewing content - **RECENT POSTS** that give the viewer a little sneak preview on five of the most recent posts, and **CATEGORIES** that filter the posts based on the assigned category.

<!-- FULL POSTS screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644885216/coder-news-counter_ttbals.png" width="200" alt="Post Counter"> <img src="https://res.cloudinary.com/tracyt/image/upload/v1644885271/coder-news-styling-example_vutfu9.png" width="200" alt="Post Styling"> <img src="https://res.cloudinary.com/tracyt/image/upload/v1644885226/coder-news-videos_tlyijn.png" width="200" alt="Post Videos">

<!--DISCUSS THE POSTS PAGE HERE-->
⚙️ **POSTS:** A click on a post will bring you to a dynamic template that lists the full content for that post. Posts contain examples of either React components incorporated into the blog, or an example of global styling that has been incorporated within the `root-mdx.js` file.

<!-- FULL CATEGORIES screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644882886/coder-news-categories_v0zdk1.png" width="600" alt="Category Details">

<!--DISCUSS THE CATEGORIES PAGE HERE-->
⚙️ **Categories:** A click on a category will bring you to a dynamic template that lists only posts within that specific category. Similar to the home page layout, the template is retrieving a blog **IMAGE**, **TITLE**, associated **CATEGORY**, and a **LINK** for continued reading.

<!--NEWSLETTER SCREENSHOT-->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644884569/coder-news-newsletter_osd12q.png" width="600" alt="Category Details">

<!--ADD NEWSLETTER EXPLAINED-->
⚙️ **Other Pages:** Feel free to try out the **_NEWSLETTER_** submission form. This utilizes Netlify Forms to execute the action method and to keep a record of each submission entry. 

### BEHIND THE SCENES

<!-- React and GraphQL logos goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1643137654/react-gatsby-graphql-logos_r1m3ux.png" width="300" alt="React, Gatsby and GraphQL logos">

🗞 **Coder News** 🗞 is made possible by utilizing the Javascript library, **_REACT_**, combined with the sophistication of the framework, **_GATSBY_** - a powerful static site generator.

🗞 **Coder News** 🗞 communicates with the data by utilizing the query language, GraphQL. Components throughout the project invoke queries requesting specific data objects that then get destructured and called to render iterated lists of information.

<!-- GATSBY NODE API screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644677610/coder-news-gatsby-node-api_bwfvhq.png" width="600" alt="Gatsby Node API example">

<!--TALK ABOUT GATSBY NODE API-->
This project is integrated with the Gatsby Node API in order to create the **_POSTS_** and **_CATEGORIES_** pages. This execution will insert the newly created pages into the schema, which  then creates pages for the frontend and for running queries within components.

<!-- ROOT-MDX screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644677297/coder-news-root-mdx-shot_fu8pj2.png" width="600" alt="root-mdx example">

<!--EXPLAIN ROOT-MDX-->
To give the blog developer flexibility, the Gatsby MDX plugin was utilized for this project. This allows MDX pages to embed JSX within the markdown (hence the `MDXProvider` export), and to provide a more interactive blog post for the user.
The Gatsby MDX plugin was also used to incorporate global styling for a few HTML elements within this project, such as `h2`, `h4`, `inlineCode`, `blockquote` and `pre`.

<!-- Netlify screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1643137925/netlify-logo_lf8cts.png" width="200" alt="Netlify logo">

🗞 **Coder News** 🗞 is connected to the web hosting infrastructure, Netlify. Through this project's Github repository, Netlify selects the best CDN and distributes the content on its own microservices. This creates a pre-built, faster loading website.

<!-- CODE FILES screenshot goes here -->
<img src="https://res.cloudinary.com/tracyt/image/upload/v1644676346/coder-news-src-shot_k4a15q.png" width="300" alt="Src shot"/>

⚙️ **Where to Go from Here:** Freely explore all files within the folders and files in the Github repo. If so inclined, feel free to clone this repository. Be sure to install all dependencies. All example posts are included within this project.

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
