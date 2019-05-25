import React, { Component } from 'react';
import { Header, Hero, Demo, Features, Signup } from './Components';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Hero />
        <Demo />
        <Features />
        <Signup />
      </div>
    );
  }
}


export default App;
