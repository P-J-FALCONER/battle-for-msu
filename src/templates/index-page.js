import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRollIndex from '../components/BlogRollIndex'
import ImageGallery from '../components/ImageGallery';

const handleDragStart = (e) => e.preventDefault();

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
              <div className="columns">
                  <div className="column is-12">
                    <h1 className="has-text-weight-semibold is-size-2 has-text-centered">
                      Battle for Spartan Swimming and Diving
                    </h1>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h2>
                    <a class='button is-success is-large is-fullwidth' href='https://gofund.me/21dc0498'>Help Support our Battle! Visit Our GoFundMe</a>
                    </h2>
                  </div>
                </div>
          
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                <div className="column is-12">
                    <h2 >
                    <a class='button is-success is-large is-fullwidth' href='https://linktr.ee/battleforspartanswimanddive'>Useful Links</a>
                    </h2>
                  </div>
                  </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <h1>The Team Behind The Battle</h1>
                    <ImageGallery />
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Testimonials
                  </h3>
                  <BlogRollIndex />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/testimonials">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
