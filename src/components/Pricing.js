import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div>
    {data.map((price) => (

        <section className="section">
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered has-text-success">
            {price.price}
          </h2>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>

    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
