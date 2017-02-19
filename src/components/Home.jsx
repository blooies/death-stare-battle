import React, { Component } from 'react';
import Medals from './Medals.jsx';
import Medal from './Medal.jsx';
import Uploader from './Uploader.jsx';
import Phrase from './Phrase.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medal: null
    }
    this.showMedal = this.showMedal.bind(this);
    this.renderWelcome = this.renderWelcome.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  showMedal(params) {
    this.setState({
      medal: params.medal
    })
    this.userImage = params.image;
    console.log(this.state.medal)
  }

  renderWelcome() {
    return (
      <div>
        <div className='header'>
          <h2>Death Stare Battle</h2>
        </div>
        <Medals numberOfMedals={40}></Medals>
        <h2 className='action'>give me your best #phelpsface</h2>
        <Uploader onSubmit={this.showMedal}/>
      </div>
    );
  }

  renderResult() {
    if (this.state.medal) {
      return (
        <div>
          <Medal type={this.state.medal}/>
          <Phrase medal={this.state.medal}/>
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
