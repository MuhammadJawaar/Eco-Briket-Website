import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text2 thq-heading-2">
                      Ramah Lingkungan
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text5 thq-body-small">
                      Eco briket terbuat dari kotoran sapi yang merupakan bahan
                      bakar ramah lingkungan.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text thq-heading-2">Efisien</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4 thq-body-small">
                      Menghasilkan panas yang tinggi dan tahan lama, membuatnya
                      menjadi pilihan bahan bakar yang efisien.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text3 thq-heading-2">
                      Mudah Didapatkan
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Bahan baku kotoran sapi mudah didapatkan, sehingga
                      produksi eco briket dapat dilakukan secara berkelanjutan.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1ImgAlt: 'Gambar Eco Briket Ramah Lingkungan',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1693569444434-85aa71939cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature2ImgAlt: 'Gambar Eco Briket Efisien',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1716324136547-abed78b5c024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature3ImgAlt: 'Gambar Kotoran Sapi Sebagai Bahan Baku',
  feature1Title: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
}

Features25.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features25
