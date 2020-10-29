import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item) => (
              <section className="section">
              <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                {item.year}
              </h2>
              <ul>
                {item.stats.map((stat) => (
                  <li key={stat} className="is-size-5">
                    {stat}
                  </li>
                ))}
              </ul>
            </section>

    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
