// @flow

import React, { Component } from 'react';

import './App.css';

type Props = {
	children: React.ReactNode
};

class App extends Component<Props> {
	componentDidMount() {}

	render() {
		const { children } = this.props;
		return <div className="App">{children}</div>;
	}
}

export default App;
