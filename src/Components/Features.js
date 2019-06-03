import React, { Component } from 'react'
import { FeatureCard } from './index';
import Insta from '../images/instagram.png';
import Twitch from '../images/twitch.png';
import Youtube from '../images/youtube.png';
import report from '../images/report.png';

class Features extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <h2>Insight examples for different platforms</h2>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <FeatureCard
              image={Youtube}
              title="Video comment report"
              desc="Download an example report below"
              imageReport={report} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <FeatureCard
              image={Insta}
              title="Post comment report"
              desc="Download an example report below"
              imageReport={report} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <FeatureCard
              image={Twitch}
              title="Stream comment report"
              desc="Download an example report below"
              imageReport={report} />
          </div>
        </div>
      </div>
    )
  }
}

export default Features;