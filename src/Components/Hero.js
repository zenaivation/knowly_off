import React, { Component } from 'react'
import { useDropzone } from 'react-dropzone'
import heroImg from '../images/hero-img.png';
import pdf from '../images/insight-sample.pdf';
class Hero extends Component {


  render() {

    function Basic(props) {
      const { acceptedFiles, getRootProps, getInputProps, isDragAccept, onDropAccepted } = useDropzone();

      const files = acceptedFiles.map(file => (
        <div className="text-center mt-3">
          <p>Thank you for uploading {file.path} to <strong>knowly</strong>, for now we are working hard to make everything running. Please check out our sample or sign up for the beta if you are interested in this functionality.</p>
          <a href={pdf} download className="btn btn--basic">Download example</a>
        </div>
      ));


      return (
        <div style={{ widht: '100%' }}>
          <div {...getRootProps({ className: 'demo__dropFile d-flex align-items-center justify-content-center' }) }>
            <input {...getInputProps() } />
            <p>Drag 'n' drop a CSV here, or click to select a CSV on your local system</p>
          </div>
          {files}
        </div>
      );
    }

    return (
      <div className="hero container">
        <div className="row">
          <div className="col">
            <div className="hero__content">
              <h1>You can't read every comment. But what if you could?</h1>
              <p>Get valuable insights from your commenting audience. Get actionable data from your comments with the power of Machine Learning. Related for creators.</p>
              <img src={heroImg} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="hero__image d-flex justify-content-center">
              <Basic
                onDropAccepted={() => this.onDropAccepted()} />
            </div>
          </div>
        </div>
        {/* <div className="row my-5">
          <div className="col">
            <div className="hero__cta d-flex justify-content-center">
              <a href="#" className="btn btn--basic">Demo</a>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Hero;