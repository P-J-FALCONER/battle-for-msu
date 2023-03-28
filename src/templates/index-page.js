import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ImageGallery from '../components/ImageGallery';

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
    {/* <div
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
    </div> */}
    <section className="section section--gradient">
      <div className="container">

        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
              <div className="column is-12 has-text-centered">
                <h1><a href='https://us06web.zoom.us/j/81741307905?pwd=VGNPZWlmMmxqZGdtRFdpY0tUbnBwdz09'>Join Our Zoom Call March 28th at 8:00pm Eastern To Learn More!</a></h1>
                    <img width="400" height="500" src="https://battle-for-msu-swim-dive.s3.amazonaws.com/Give+Green+Day.png"></img>
                    <h2>After almost 2.5 years of work, MSU's University Advancement Office,
                      which oversees donations to Michigan State, has been directed by the President to collect
                      official pledges toward the reinstatement of both Men's and Women's Swimming and Diving teams.
                      Our understanding is that several lead donors have given us a great head start toward a viable
                      reinstatement milestone and validating our original pledges will get us close. With the recent
                      political climate at MSU we believe our window of opportunity is NOW, so let’s join the University
                      and #GiveGreen this week for Spartan Swimming and Diving!</h2>
                  </div>
                  <div className="column is-12">
                  <h2><a href="https://battle-for-msu-swim-dive.s3.amazonaws.com/Conditional+pledge+form+-+Swim+and+Dive.pdf">Official MSU Pledge Form (Click to Download)</a></h2>
                  <h2><a href="https://battle-for-msu-swim-dive.s3.amazonaws.com/EXAMPLE+PLEDGE.pdf">Example Pledge Form (Click to Download)</a></h2>
                  <h3>Please do not provide credit card info or send checks with this form. This is for MSU to validate support.</h3>
                  <h2>Pledge FAQ</h2>
                  <img src="https://battle-for-msu-swim-dive.s3.amazonaws.com/Pledge+Form+FAQ.png"></img>
                  </div>
                  {/* <div className="column is-12">
                  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSyVvGczELipPfPv51eO97vQThJMxT_qBf9fR1rfFqaTRY77oEuK0a4lqYxWjMUcUykIOBuVGOWKtNt/embed?start=false&loop=false&delayms=10000" frameborder="0" width='100%' height='500' allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title="Proposal"></iframe>
                  </div> */}
                {/* <div className="columns">
                  <div className="column is-12">
                    <h2>
                    <a style={{
          'font-size': '0.8rem'
        }} class='button is-success is-large is-fullwidth' href='https://www.change.org/battleforspartanswimanddive'>Sign Petition to Reinstate Our Program!</a>
                    </h2>
                  </div>
                </div> */}

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
