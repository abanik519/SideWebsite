import React, { Component } from 'react';
import image01 from '../assets/eon/nik-biziuk-hJ4JxDJkRUw-unsplash.jpg';
import image02 from '../assets/eon/pexels-shane-aldendorff-924675.jpg';
import image03 from '../assets/eon/daniel-smyth-njf81CyLZEQ-unsplash.jpg';


export class engineering extends Component {
  render() {
    return (
      <div id="technical-expertise">
        <div className='engineeringContainer'>
          <div className='header'>Technical Expertise</div>
          <div className='flexRow'>
            <div className='serviceContainer'>
              <p className='title'>Mechanical Design and Simulation</p>
              <div className='imageContainer'>
                <img src={image01} className='image'/>
              </div>
              <div className='textContainer'>
                <p>We specialize in complex component and system design for various technologies allowing efficient development and seamless integration.</p>
                </div>
            </div>
            <div className='serviceContainer'>
              <p className='title'>Manufacturing Engineering</p>  
              <div className='imageContainer'>
                <img src={image03} className='image'/>
              </div>
              <div className='textContainer'>
                <p>Prior experience in the machine shop and partnership with local machinists allow us to design part for manufacturing.</p>
              </div>
            </div>
          </div>
          <div className='flexRow'>
            <div className='serviceContainer'>
              <p className='title'>Test and Analysis</p>
              <div className='imageContainer'>
                <img src={image01} className='image'/>
              </div>
              <div className='textContainer'>
                <p>We develop test and verification programs from analysis to validation.</p>
                </div>
            </div>
            <div className='serviceContainer'>
              <p className='title'>3D Printing and Prototyping</p>  
              <div className='imageContainer'>
                <img src={image02} className='image'/>
              </div>
              <div className='textContainer'>
                <p>Access to Stereolithograpghy (SLA) printer(s) for plastic and Direct Metal Laser Sintering (DMLS) allows us to evolve from concept design to prototype.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default engineering