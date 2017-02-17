import React, { Component } from 'react';
import Medals from './Medals.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h2>Death Stare Battle</h2>
        </div>
        <Medals numberOfMedals={40}></Medals>
        <div className='action'></div>
        <div className='camera'></div>
      </div>
    );
  }
}

export default Home;
