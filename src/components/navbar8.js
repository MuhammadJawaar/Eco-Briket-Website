import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar8.css';

const Navbar8 = (props) => {
  return (
    <header className="navbar8-container">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links">
            <Link to={props.link1Url}>
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text17 thq-link thq-body-small">
                    Link 1
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to={props.link2Url}>
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar8-text15 thq-link thq-body-small">
                    Link 2
                  </span>
                </Fragment>
              )}
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon04">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links1">
              <Link to={props.link1Url}>
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text17 thq-link thq-body-small">
                      Link 1
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to={props.link2Url}>
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text15 thq-link thq-body-small">
                      Link 2
                    </span>
                  </Fragment>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
};

Navbar8.defaultProps = {
  link1: 'Home',
  link2: 'Media',
  logoSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  link1Url: '/',
  link2Url: '/media',
  logoAlt: 'logo',
};

Navbar8.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  logoAlt: PropTypes.string,
};

export default Navbar8;
