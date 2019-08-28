import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Quote from './components/Quote';

import './App.css';
import Welcome from "./components/Welcome";
import Experience from "./components/Experience";

class App extends Component {

  render() {
    return (
          <div className="App">
            <Navbar />
            <Quote/>
              <Layout>
                <Welcome/>
                <br/>
                <Experience/>
              </Layout>
          </div>
    );
  }
}

export default App;
