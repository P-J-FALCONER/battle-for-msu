import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/team_room.jpg')`,
          }}
        >
        </div>
        <div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>
                Testimonials
              </h1>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
