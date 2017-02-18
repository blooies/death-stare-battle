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
		var self = this;
		var file = e.target.files[0];
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.addEventListener('loadend', function(response) {
			var base64 = fileReader.result.split(',')[1];
			self.predict(base64);
		})
	}
	predict(image) {
		var self = this;
		this.app.models.predict(this.modelId, [image]).then(
            function(response) {
                var result = response.outputs[0].data.concepts;
                var medal = self.determineMedal(result);
                console.log("here")
                self.props.onSubmit(medal);
                console.log("here2")
            },
            function(error) {
                console.log("ERROR", error)
            }
        )
	}
	determineMedal(response) {
		var medal = {value: 0}
        for (var i=0; i<response.length; i++) {
            medal = response[i].value > medal.value ? response[i] : medal;
        }

        return medal.name;
	}
}

export default Uploader;