const path = require('path')

exports.createPages = async ({graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    result.data.allMdx.nodes.forEach(({frontmatter: { slug } }) => {
        //
    })
}