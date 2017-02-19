import React, { Component } from 'react';
var Clarifai = require('clarifai');

class Uploader extends Component {
	constructor(props) {
		super(props);
		this.modelId = 'deathstares';
		this.app = new Clarifai.App(
        	'U-JMo15gzgwrvCFNSYzlFLjQG6rbm_eBcRnRSYV-',
        	'uvjBXpZQnk73lGWXmbUyZdgcZ4mjSnSMyX497LEv'
    	);
    	this.uploadPhoto = this.uploadPhoto.bind(this);
    	this.predict = this.predict.bind(this);
    	this.determineMedal = this.determineMedal.bind(this);
	}
	render() {
		return (
			<div id='camera'>
				<label 
					htmlFor='uploadImage' 
					id='custom-upload'>
				</label>
				<input 
					id='uploadImage' 
					type='file' 
					accept='image/*;capture=camera'
					onChange={this.uploadPhoto}/>
			</div>
		)
	}
	uploadPhoto(e) {
		let self = this;
		let file = e.target.files[0];
		let fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.addEventListener('loadend', function(response) {
			let base64 = fileReader.result.split(',')[1];
			self.predict(base64);
		})
	}
	predict(image) {
		let self = this;
		this.app.models.predict(this.modelId, [image]).then(
            function(response) {
                let result = response.outputs[0].data.concepts;
                let medal = self.determineMedal(result);
                self.props.onSubmit({
                	medal: medal,
                	image: image
                });
            },
            function(error) {
                console.log("ERROR", error)
            }
        )
	}
	determineMedal(response) {
		let medal = {value: 0}
        for (var i=0; i<response.length; i++) {
            medal = response[i].value > medal.value ? response[i] : medal;
        }

        return medal.name;
	}
}

export default Uploader;