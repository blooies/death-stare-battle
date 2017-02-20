import React, { Component } from 'react';
import Medals from './Medals.jsx';
import Medal from './Medal.jsx';
import Uploader from './Uploader.jsx';
import Phrase from './Phrase.jsx';
import Image from './Image.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medal: null
    }
    this.updateResult = this.updateResult.bind(this);
    this.renderWelcome = this.renderWelcome.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
  }

  updateResult(params) {
    this.userImage = params.image;
    this.setState({
      medal: params.medal
    })
    this.setState({
      orientation: params.orientation
    })
    this.hideLoader();
  }

  hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('root').style.opacity = 1;
  }

  renderWelcome() {
    return (
      <div>
        <div className='header'>
          <h2>Death Stare Battle</h2>
        </div>
        <Medals numberOfMedals={40}></Medals>
        <Medals view='phone-view' numberOfMedals={3}></Medals>
        <h2 className='action'>give me your best #phelpsface</h2>
        <Uploader onSubmit={this.updateResult} />
      </div>
    );
  }

  renderResult() {
    if (this.state.medal) {
      return (
        <div className='results'>
          <Medal type={this.state.medal}/>
          <Phrase medal={this.state.medal}/>
          <div id='faces'>
            <Image/>
            <Image source={this.userImage} orientation={this.state.orientation}/>
          </div>
          <Uploader />
        </div>
      )
    }

  }
  render() {
    return (
      <div>
        <div style={{display: this.state.medal ? 'none' : 'block'}}>
          {this.renderWelcome()}
        </div>
        <div style={{display: this.state.medal ? 'block' : 'none'}}>
          {this.renderResult()}
        </div>
      </div>
    )
  }
}

export default Home;