import React, { Component } from 'react';

class Image extends Component {
	constructor(props) {
		super(props);
		this.default = 'phelpsface.png';
	}
	render() {
		var image;
		if (this.props.source) {
			image = 'data:image/gif;base64,' + this.props.source;
		} else {
			image = this.default;
		}
		return (
			<div className='image-result'>
				<img src={image}/>
			</div>
		)
	}
}

export default Image;