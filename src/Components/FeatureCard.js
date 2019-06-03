import React, { Component } from 'react'

class FeatureCard extends Component {
  render() {
    return (
      <div className="featureCard">
        <div className="featureCard__icon">
          <img src={this.props.image} />
        </div>
        <div className="featureCard__content">
          <div className="featureCard__title">
            <h4>{this.props.title}</h4>
          </div>
          <div className="featureCard__desc">
            <p>{this.props.desc}</p>
          </div>
          <div className="featureCard__link">
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default FeatureCard;
