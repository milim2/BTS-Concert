import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured  from './components/featured';
import ConcInfo from './components/concInfo';
import Highlight from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px', background:'skyblue'}}>
        <Header/>
        <Featured/>
        <ConcInfo/>
        <Highlight/>
      </div>
    );
  }
}

export default App;
