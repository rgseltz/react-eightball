import React from 'react';
import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import answers from './answers';
import './EightBall.css';

const App = () => (
	<div className="App">
		<EightBall answers={answers} />
	</div>
);

export default App;
