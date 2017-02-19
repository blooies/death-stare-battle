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
    this.showMedal = this.showMedal.bind(this);
    this.renderWelcome = this.renderWelcome.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  showMedal(params) {
    var medal = params.medal;
    this.userImage = params.image;
    this.setState({
      medal: medal
    })

    // var b64 = "data:image/jpeg;base64," + params.image;
    // var bin = atob(b64.split(',')[1]);
    // var exif = EXIF.readFromBinaryFile(new BinaryFile(bin));
    // alert(exif.Orientation);
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
        <div className='results'>
          <Medal type={this.state.medal}/>
          <Phrase medal={this.state.medal}/>
          <div id='faces'>
            <Image/>
            <Image source={this.userImage}/>
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
