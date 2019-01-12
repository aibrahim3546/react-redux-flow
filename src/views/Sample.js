// @flow

// (sample code) When creating new page just copy and paste this code to get started

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {}

class Sample extends Component<Props> {
	componentDidMount() {}

	render() {
		return (
			<div>
				<div>Sample</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sample);
