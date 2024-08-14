import React, { Fragment } from 'react'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text6 thq-heading-1">
                  Promosi Eco Briket dari Kotoran Sapi
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text4 thq-body-large">
                Eco briket merupakan inovasi pembuatan briket dengan bahan bakar padat ramah lingkungan yang terbuat dari
                kotoran sapi yang dipadatkan.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
        </div>
      </div>
      <div className="hero17-content1">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image7Alt: 'Hero Image',
  image7Src: 'https://i.ibb.co.com/HgQW9Hc/Whats-App-Image-2024-08-14-at-08-06-56.jpg',
  image8Alt: 'Hero Image',
  image8Src: 'https://i.ibb.co.com/ct9HcQY/Whats-App-Image-2024-08-14-at-08-06-55-1.jpg',
  image9Alt: 'Hero Image',
  image9Src: 'https://i.ibb.co.com/Sw4NHnW/Whats-App-Image-2024-08-14-at-08-06-55.jpg',
  content1: undefined,
  heading1: undefined,
}

Hero17.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image7Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image9Src: PropTypes.string,
}

export default Hero17
