import React, { Component } from 'react';
import { Header, Hero, Demo, Features, Signup } from './Components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {

    return (
      <div className="container-fluid page-container">
        <Header />
        <Hero />
        {/* <Demo />*/}
        <Features />
        <Signup />
        <ToastContainer />
      </div>
    );
  }
}


export default App;
