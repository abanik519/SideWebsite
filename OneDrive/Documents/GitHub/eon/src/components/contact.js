import React, { Component } from "react";
import mainLogo from '../assets/eon/Eon_Clear.png';


export class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contactContainer">
          <div className="header3">GET IN TOUCH WITH US TODAY</div>
          <div className="inputContainer">
            <p>Name</p>
            <input className="inputBox" type="fname"/>
            <p>Email</p>
            <input className="inputBox" type="email"/>
            <p>Mobile Number</p>
            <input className="inputBox" type="tel"/>
            <p>Questions or Comments</p>
            <textarea className="inputBox"/>
            <button className="submitButton">SUBMIT</button>
          </div>
          <img className="bottomLogo" src={mainLogo}/>
          <a className="bottomText" href="mailto: contact@eoninnovations.com">contact@eoninnovations.com</a>
          <a className="bottomText" href="tel:+(713)487-6226">Phone: (713)487-6226</a>
        </div>
      </div>
    );
  }
}

export default Contact;