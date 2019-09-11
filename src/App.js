import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Sample from './components/Sample';
import Contact from './components/Contact';

import './App.css';

class App extends Component {

  render() {
    return (
          <div className="App">
            <Navbar />
              <Welcome/>
                <Experience/>
              <Sample/>
              <Contact/>
          </div>
    );
  }
}

export default App;
