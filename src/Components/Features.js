import React, { Component } from 'react'
import { FeatureCard } from './index';
import UspIcon from '../images/usp-icon.png';
class Features extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <h1>What we do best</h1>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-md-6">
            <FeatureCard
              image={UspIcon}
              title="Insight"
              desc="Gives you a good insight of what your fans want from you" />
          </div>

          <div className="col-md-6">
            <FeatureCard
              image={UspIcon}
              title="Discover"
              desc="Discover new thing you could do" />
          </div>
        </div>
      </div>
    )
  }
}

export default Features;