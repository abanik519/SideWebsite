import React, { Component } from 'react';
import image01 from '../assets/eon/pexels-thisisengineering-3912364.jpg';
import image02 from '../assets/eon/pexels-thisisengineering-3861949.jpg';

export class capabilities extends Component {
  render() {
    return (
        <div id="capabilities">
          <div className='capabilitiesContainer'>
            <div className='header2'>Capabilities</div>
            <div className='imageRow'>
              <img className='images' src={image01} />
              <img className='images' src={image02} />
              <img className='images' src={image01} />
              <img className='images' src={image02} />
            </div>
            <div className='textBox'>
              <p className='title2'>Carbon Composite Manufacturing and Testing</p>
              <li>Manufacturing Process and Services: Bladder Molding, Room Temp Vacuum Bagging, Resin Infusion, Modified Close Mold, Compression Molding, Composite Machining, Bonding & Assembly Services </li>
              <li>From Development to Production: Product Selection, Design and Engineering, Prototyping, Tooling, Analysis </li>
              <li>Qualification Testing </li>
            </div>
            <div className='textBox'>
              <p className='title2'>3D Printing</p>
              <li>EOS M290 3D Printing: “Machine Operation & Data Preparation EOS M 290” </li>
              <li>Photon Mono X Stereolithography (SLA) Printer: Print Bed: 192 x 120 x 245 mm </li>
            </div>
            <div className='textBox'>
              <p className='title2'>Metrology</p>
              <li>Common machine shop measurement tools (Certified Calipers, levels, weigh scales etc.) </li>
              <li>FARO Quantum S Romer Arm </li>
              <li>FARO Vantage S6 Laser Tracker</li>
              <li>FARO CAM2 Measure Arm/Tracker Certification</li>
            </div>
          </div>
      </div>
    )
  }
}

export default capabilities