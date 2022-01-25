import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <div id="page-top" className="landContainer">
        <div className="topLandingBack">
          <div className="flexCol">
            <div className="headerText">
              <p className="font">INNOVATE</p>  
              <p className="font">ENGINEER</p>  
              <p className="font">DELIVER</p>
            </div>
            <button className="scheduleButton">
              <a href="#contact" className="page-scroll size"><p className="font">Schedule Appointment</p></a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;