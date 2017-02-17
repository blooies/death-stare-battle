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
        <h2 className='action'>give me your best #phelpsface</h2>
        <div className='camera'>
          <input id='uploadImage' type='file' accept='image/*;capture=camera'/>
        </div>
      </div>
    );
  }
}

export default Home;
