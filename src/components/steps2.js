import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './steps2.css';

const Steps2 = (props) => {
  // Create the Google Drive embed URL
  const googleDriveUrl = `https://drive.google.com/file/d/${props.videoId}/preview`;

  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          {/* Replace header section with Google Drive video */}
          <div className="steps2-video">
            <iframe
              width="100%"
              height="315"
              src={googleDriveUrl}
              title="Google Drive video player"
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
                      Jemur dan keringkan feses sapi hingga kadar airnya hanya tersisa 1%
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
                      Buatlah perekat dengan mencampurkan air dan tepung kanji/tapioca dengan perbandingan air: tapioka (1:3)
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step5Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      5
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step5Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Campurkan sampel briket dengan larutan tapioka hingga rata dan cetak/bentuk sampel sesuai selera
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step6Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      6
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step6Description ?? (
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
  );
};

Steps2.defaultProps = {
  step1Title: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step5Title: undefined,
  step6Title: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step3Description: undefined,
  step4Description: undefined,
  step5Description: undefined,
  step6Description: undefined,
  videoId: '1Vh3oSSaQgdnTeWnf6Csedh7OElyMqvRV', // Default Google Drive file ID
};

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step5Title: PropTypes.element,
  step6Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
  step5Description: PropTypes.element,
  step6Description: PropTypes.element,
  videoId: PropTypes.string, // Google Drive file ID
};

export default Steps2;
