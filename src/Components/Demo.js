import React, { Component } from 'react'
import { useDropzone } from 'react-dropzone'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import googleIcon from '../images/google-icon.png';

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Demo extends Component {



  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;



    function Basic(props) {
      const { acceptedFiles, getRootProps, getInputProps, isDragAccept, onDropAccepted } = useDropzone();

      const files = acceptedFiles.map(file => (
        <div>
          <p>Thank you for uploading {file.path} to knowly, as for now we are working hard to make everything working. You can sign up when we are releasing the beta.</p>
          <a href="#" className="btn btn--basic">Sign up</a>
        </div>
      ));


      return (
        <section className="container">
          <div {...getRootProps({ className: 'demo__dropFile d-flex align-items-center justify-content-center' }) }>
            <input {...getInputProps() } />
            <p>Drag 'n' drop some your csv here, or click to select the csv</p>
          </div>
          <aside>
            {files}
          </aside>
        </section>
      );
    }

    return (
      <div className="demo container my-5">
        <div class="row">
          <div className="col">
            <div className="demo__header text-center">
              {user ? (
                <h1>Thanks {user.displayName}</h1>
              ) : (<h1>Login to check the demo</h1>)}
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            {user ? (
              <div>
                <Basic
                  onDropAccepted={() => this.onDropAccepted()} />
              </div>

            ) : (
                <div className="demo__login d-flex justify-content-center">
                  <a onClick={signInWithGoogle} href="#" className="btn btn--outline">
                    Login with google
                        <img className="pl-2" src={googleIcon} />
                  </a>
                </div>
              )}
          </div>
        </div>
      </div >
    )
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Demo);