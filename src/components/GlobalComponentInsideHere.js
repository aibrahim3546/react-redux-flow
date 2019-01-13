// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {}

class GlobalComponentInsideHere extends Component<Props> {
	componentDidMount() {}

	render() {
		return (
			<div>
				<div>GlobalComponentInsideHere</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(GlobalComponentInsideHere);
