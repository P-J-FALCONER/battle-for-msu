import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import { Player } from 'video-react'
import '../../../node_modules/video-react/dist/video-react.css' // import css
import video_1_poster from '../../img/video_1_poster.png'
import video_2_poster from '../../img/video_2_poster.png'

export default class BlogIndexPage extends React.Component {
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
            <h1>Testimonials</h1>
          </div>
          <div className="columns">
            <div className="column is-12">
              <Player
                playsInline
                poster={video_1_poster}
                src="https://battle-for-msu-swim-dive.s3.amazonaws.com/msu_video_1.mp4"
              />
              <span></span>
              <Player
                playsInline
                poster={video_2_poster}
                src="https://battle-for-msu-swim-dive.s3.amazonaws.com/msu_video_2.mp4"
              />
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
