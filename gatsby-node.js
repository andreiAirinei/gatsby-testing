const path = require('path');

// Used this one only to generate SLUGS
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;



  // param1 - the object itself
  // param2 - optional filtering function - with undefined you see everything
  // param3 - number of spaces we want to use when printing to the terminal 

  // console.log(JSON.stringify(node, undefined, 4));

  // filter the nodes to get only the MD
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

// In this case, graphql is a function, different than the one used from 'gatsby'
// 1. Get path to template
// 2. Get markdown data
// 3. Create new pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // component - is not the actual component but a path to it
    // path - created dynamically
    // context - object containing stuff that can be passed down to our template
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  });
}