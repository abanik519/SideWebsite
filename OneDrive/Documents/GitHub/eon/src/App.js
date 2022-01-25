import React, { Component } from 'react';
import './styles/App.css';
import './styles/navigation.css';
import './styles/header.css';
import './styles/engineering.css';
import './styles/capabilities.css';
import './styles/collaborators.css';
import './styles/faq.css';
import './styles/slideshow.css';
import './styles/contact.css';


import Navigation from './components/navigation';
import Header from './components/header';
import Engineering from './components/engineering';
import Capabilities from './components/capabilities';
import Contact from './components/contact';

export class App extends Component {

  render() {
    return (
      <div style={{overflow: "hidden"}}>
        <Navigation />
        <Header />
        <Engineering />
        <Capabilities/>
        <Contact/>
      </div>
    )
  }
}

export default App;