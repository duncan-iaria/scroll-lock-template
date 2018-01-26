import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//STYLES
import './App.css';

//COMPONENTS
import ContentContainer from '../components/shared/ContentContainer/ContentContainer';

class App extends Component {
	render() {
		return (
			<Router>
				<ContentContainer/>
			</Router>
		);
	}
}

export default App;
