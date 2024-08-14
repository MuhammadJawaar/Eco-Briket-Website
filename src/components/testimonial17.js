import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text21 thq-heading-2">
                  Testimonial
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text17 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text16 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text22 thq-body-small">
                            CEO of Green Solutions
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text20 thq-body-small">
                        I have been using Eco Briket for my business and the
                        results have been amazing. It is a sustainable and
                        efficient solution for our energy needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text23 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Environmental Activist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text18 thq-body-small">
                        Eco Briket has truly made a difference in reducing waste
                        and promoting eco-friendly practices. I highly recommend
                        it to everyone.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            David Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Sustainable Living Advocate
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text14 thq-body-small">
                        Using Eco Briket has been a game-changer for me. Not
                        only is it good for the environment, but it also burns
                        efficiently and provides great heat.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text19 thq-body-large">
                            Sarah Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            Green Energy Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text25 thq-body-small">
                        I switched to Eco Briket for my home heating needs and I
                        couldn&apos;t be happier. It&apos;s clean, easy to use,
                        and supports a sustainable future.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1422568374078-27d3842ba676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of David Lee',
  review3: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1651359583018-c33a287f2530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
  author1Name: undefined,
  content1: undefined,
  author1Alt: 'Image of John Doe',
  author4Alt: 'Image of Sarah Johnson',
  review2: undefined,
  author4Name: undefined,
  review1: undefined,
  author2Alt: 'Image of Jane Smith',
  heading1: undefined,
  author1Position: undefined,
  author2Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1504834636679-cd3acd047c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  review4: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1543569128-1221ed287623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  author3Position: undefined,
}

Testimonial17.propTypes = {
  author3Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.element,
  author1Src: PropTypes.string,
  author2Position: PropTypes.element,
  author1Name: PropTypes.element,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author2Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Position: PropTypes.element,
  author2Name: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  review4: PropTypes.element,
  author2Src: PropTypes.string,
  author3Name: PropTypes.element,
  author3Position: PropTypes.element,
}

export default Testimonial17
