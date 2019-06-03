import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyc1rvSQz8HDN9rU' }).base('appdKlXuWHlq0MUwe');

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = () => {
    base('Emails').create({ "Email": this.state.value }, (err, record) => {
      if (err) {
        this.setState({ message: "Something went wrong" });
        toast.error("Something went wrong try again");
      }
      this.setState({ message: "Thanks we'll get back to you soon!" });
      toast.success("Thanks we'll get back to you soon!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
  }


  render() {
    return (
      <div className="footer">
        <p>Subscirbe for beta</p>
        <div className="footer__form">
          <input value={this.state.value} onChange={(event) => this.handleChange(event)} type="text" placeholder="johndoe@gmail.com" />
          <button className="btn btn--outline-white" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Signup;