import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 KKN Tim 2 Undip Bandungan</span>
            </div>
            <div className="footer4-footer-links">
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text07 thq-body-small">
                      Kebijakan Privasi
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text06 thq-body-small">
                      Ketentuan Penggunaan
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text09 thq-body-small">
                      Kebijakan Cookie
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoAlt: 'Logo Eco Briket',
  link1: undefined,
  link2: undefined,
  termsLink: undefined,
  privacyLink: undefined,
  link5: undefined,
  cookiesLink: undefined,
  link4: undefined,
  link3: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Footer4.propTypes = {
  logoAlt: PropTypes.string,
  link1: PropTypes.element,
  link2: PropTypes.element,
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
  link5: PropTypes.element,
  cookiesLink: PropTypes.element,
  link4: PropTypes.element,
  link3: PropTypes.element,
  logoSrc: PropTypes.string,
}

export default Footer4
