import React, {Component} from 'react';
import Navbar from './components/Navbar';
import About from "./components/About";
import Experience from "./components/Experience";
import Sample from './components/Sample';
import Contact from './components/Contact';
import Quote from './components/Quote';

import './App.css';

class App extends Component {

  render() {
    return (
          <div className="App">
            <Navbar />
              <Quote/>
              <div className="Content">
                  <About/>
                    <Experience/>
                  <Sample/>
                  <Contact/>
              </div>
          </div>
    );
  }
}

export default App;
