import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
        <div class="logo">
            <div class="logoname">
                <img src="assets/media/AW_LOGO.png" alt="" />
            </div>
            <div class= "user-links">
                <a class="instagram" href="https://www.instagram.com/wattsanimation" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/instagram.svg" alt="instagram"/>
                </a>
                <a class="vimeo" href="https://vimeo.com/antwatts89" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/vimeo.svg" alt="vimeo"/>
                </a>
                <a class="youtube" href="https://www.youtube.com/channel/UCPjc3i-eRkkEE88tXbFyz-Q" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/youtube.svg" alt="youtube"/>
                </a>
                <a class="artstation" href="https://www.artstation.com/antwatts89" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/artstation.svg" alt="artstation"/>
                </a>
                <a class="linkedin" href="https://www.linkedin.com/in/anthony-watts-53784615" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/linkedin.svg" alt="linkedin"/>
                </a>
            </div>
        </div>
        <div class="background">
        </div>
        <video playsinline autoplay loop muted poster="assets/media/home_01.jpg" id="videoBG">
            <source src="assets/media/home.webm" type="video/webm"/>
        </video>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default HomeIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
