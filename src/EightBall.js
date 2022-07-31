import React, { useState } from 'react';

const EightBall = ({ answers }) => {
	const ranAnswer = () => {
		let ranIndx = Math.floor(Math.random() * answers.length);
		return answers[ranIndx];
	};
	const [ answer, setAnswer ] = useState(null);
	const color = {
		positive: 'green',
		uncertain: 'goldenrod',
		negative: 'red'
	};

	ranAnswer();
	console.log(ranAnswer());
	return (
		<div className="EightBall" style={{ backgroundColor: answer === null ? 'black' : answer.color }}>
			<h1 className="EightBall-header">Eightball</h1>
			<p className="EightBall-instructions">Click To Shake</p>
			<button className="EightBall-answer-button" onClick={() => setAnswer(ranAnswer)}>
				Your Answer Awaits
			</button>
			{answer === null ? null : <h2>{answer.msg}</h2>}
		</div>
	);
};

export default EightBall;
