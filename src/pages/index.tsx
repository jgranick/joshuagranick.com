import * as React from "react"

const Index = ({ data, location }) => {
  return (
    <meta http-equiv="refresh" content="0; url='https://linkedin.com/in/joshuagranick'" />
  );
}

export default Index;


// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import Gallery from '@browniebroke/gatsby-image-gallery'

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   // const posts = data.allMarkdownRemark.nodes
//   const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

//   console.log(data.allFile);
//   // if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <Gallery images={images} />
//         <br/>
//       </Layout>
//     )
//   // }

//   // return (
//   //   <Layout location={location} title={siteTitle}>
//   //     <Bio />
//   //     <ol style={{ listStyle: `none` }}>
//   //       {posts.map(post => {
//   //         const title = post.frontmatter.title || post.fields.slug

//   //         return (
//   //           <li key={post.fields.slug}>
//   //             <article
//   //               className="post-list-item"
//   //               itemScope
//   //               itemType="http://schema.org/Article"
//   //             >
//   //               <header>
//   //                 <h2>
//   //                   <Link to={post.fields.slug} itemProp="url">
//   //                     <span itemProp="headline">{title}</span>
//   //                   </Link>
//   //                 </h2>
//   //                 <small>{post.frontmatter.date}</small>
//   //               </header>
//   //               <section>
//   //                 <p
//   //                   dangerouslySetInnerHTML={{
//   //                     __html: post.frontmatter.description || post.excerpt,
//   //                   }}
//   //                   itemProp="description"
//   //                 />
//   //               </section>
//   //             </article>
//   //           </li>
//   //         )
//   //       })}
//   //     </ol>
//   //   </Layout>
//   // )
// }

// export default BlogIndex

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Portfolio" />

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: {frontmatter: {date: ASC}}, limit: 1000) {
//       nodes {
//         id
//         fields {
//           slug
//         }
//       }
//     }
//     allFile(sort: { fields: [name], order: ASC }, filter: { relativeDirectory: { eq: "gallery" } }) {
//       edges {
//         node {
//           childImageSharp {
//             thumb: gatsbyImageData(
//               width: 270
//               height: 270
//               placeholder: BLURRED
//             )
//             full: gatsbyImageData(layout: FULL_WIDTH)
//           }
//         }
//       }
//     }
//   }
// `
