import React from 'react'

import Layout from '../../components/Layout'
import Media from '../../components/Media'

export default class MediaPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/team_room.jpg')`,
          }}
        ></div>
        <div className="container">
          <div className="content">
            <h1>Media & Press Releases</h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <Media />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
