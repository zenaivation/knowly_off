import React, { Component } from 'react'
import { FeatureCard } from './index';
import Insta from '../images/insta_csv.png';
import Twitch from '../images/twitch_csv.png';
import Youtube from '../images/youtube_csv.png';
import report from '../images/report.jpg';
import youtubeReport from '../images/youtube_report.jpg';
import instaReport from '../images/insta_report.jpg';
import twitchReport from '../images/twitch_report.jpg';
import instaPDF from '../images/insta_pdf.pdf';
import youtubePDF from '../images/youtube_pdf.pdf';
import twitchPDF from '../images/twitch_pdf.pdf';

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
              imageReport={youtubeReport}
              link={youtubePDF} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <FeatureCard
              image={Insta}
              title="Post comment report"
              desc="Download an example report below"
              imageReport={instaReport}
              link={instaPDF} />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <FeatureCard
              image={Twitch}
              title="Stream comment report"
              desc="Download an example report below"
              imageReport={twitchReport}
              link={twitchPDF} />
          </div>
        </div>
      </div>
    )
  }
}

export default Features;