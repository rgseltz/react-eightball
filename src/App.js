import React from 'react';
import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import answers from './answers';

const App = () => (
	<div className="App">
		<EightBall answers={answers} />
	</div>
);

export default App;
