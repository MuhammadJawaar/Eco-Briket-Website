import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text08 thq-heading-2">
                    Hubungi Kami
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text07 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text06 thq-heading-3">
                    Alamat: Jl. Contoh No. 123, Kota Contoh
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text10 thq-body-large">
                    Kunjungi kantor kami untuk informasi lebih lanjut
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text11 thq-heading-3">
                    Telepon: 0812-3456-7890
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text09 thq-body-large">
                    Hubungi kami melalui telepon untuk pertanyaan atau pesanan
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1631864032142-b6b44ef28f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Gambar Alamat Kantor',
  location1: undefined,
  content1: undefined,
  heading1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1630349575347-89fde96c7e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Gambar Telepon Kontak',
  location2Description: undefined,
  location1Description: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
