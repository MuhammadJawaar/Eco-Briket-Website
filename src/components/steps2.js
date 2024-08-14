import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          {/* Menggantikan header section dengan video YouTube */}
          <div className="steps2-video">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${props.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      1
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      jemur dan Keringkan feses sapi hingga kadar airnya hanya tersisa 1%
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      2
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Haluskan feses sapi hingga menjadi bertekstur serbuk halus yang paling halus
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      3
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Sangrai feses hingga berubah menjadi sampel yang berwarna kehitaman
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      4
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Buatlah perekat dengan mencampurkan air dan tepung kanji/tapioca dengan Perbandingan air : tapioka (1:3)
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      5
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                    Campurkan sampel briket dengan larutan tapioka hingga rata dan Cetak/bentuk sampel sesuai selera
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      6
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Keringkan briket kurang lebih 2 hari dan briket siap untuk digunakan
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

Steps2.defaultProps = {
  step4Title: undefined,
  step2Description: undefined,
  step3Title: undefined,
  step1Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
  step1Description: undefined,
  step2Title: undefined,
  videoId: 'dQw4w9WgXcQ', // ID video YouTube default
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step2Description: PropTypes.element,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  videoId: PropTypes.string, // Menambahkan prop untuk ID video YouTube
}

export default Steps2
