import React, { Component } from 'react';
import Medals from './Medals.jsx';
import Uploader from './Uploader.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h2>Death Stare Battle</h2>
        </div>
        <Medals numberOfMedals={40}></Medals>
        <h2 className='action'>give me your best #phelpsface</h2>
        <Uploader/>
      </div>
    );
  }
}

export default Home;
