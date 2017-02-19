import React, { Component } from 'react';

class Phrase extends Component {
	constructor(props) {
		super(props);
		this.gold = [
			"congrats, you've mastered the phelps face. #phelpsface",
			"even darth vader would be scared of you.",
			"stop looking at me. you're giving me goosebumps.",
			"i think you deserve your own meme.",
			"even michael phelps cant compare.",
			"do you kiss your mother with that kind of face?",
			"you stare would make babies cry."
		]

		this.silver = [
			"scary. but could use a little more work.",
			"you're on your way to becoming the death stare master.",
			"need a bit more twisting in the face. try again.",
			"scary, but easily forgettable.",
			"you're almost there..let it all out.",
			"not quite #phelpsface level.",
			"good shot, but next time more angry."
		]

		this.bronze = [
			"seriously? is that the best you got?",
			"you need a little bit more practice.",
			"is life all unicorns and rainbows to you?",
			"go back to playing with telly tubbies.",
			"your stare would make babies laugh.",
			"less happy. more angry.",
			"you call that a death stare...?"
		]

		this.getRandomPhrase = this.getRandomPhrase.bind(this);
	}

	getRandomPhrase(medal) {
		let numberOfChoices = this[medal].length;
		let randomNum = Math.floor(Math.random() * numberOfChoices);
		let phrase = this[medal][randomNum];
		return phrase;
	}
	render() {
		return (
			<h2>{this.getRandomPhrase(this.props.medal)}</h2>
		)
	}
}

export default Phrase;