import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text2 thq-heading-2">
                      Daur Ulang Kotoran Sapi
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text4 thq-body-small">
                      Eco briket ini dibuat dari kotoran sapi yang telah
                      diproses secara higienis.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text thq-heading-2">
                      Efisien dan Praktis
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text5 thq-body-small">
                      Mudah Digunakan
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text3 thq-heading-2">
                      Bahan Baku Terbarukan
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1 thq-body-small">
                      Ramah Lingkungan
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature2Title: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Bahan Baku Terbarukan',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1692286375229-7511455115f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImgAlt: 'Mudah Digunakan',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1718169394391-535f4dc1e72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Eco Briket dari Kotoran Sapi',
}

Features24.propTypes = {
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
}

export default Features24
