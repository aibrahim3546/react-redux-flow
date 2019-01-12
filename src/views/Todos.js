// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TodoStoreTypes } from '../store/reducers/todoReducer';

type Props = {
	todoStore: TodoStoreTypes;
}

const MainContainer = styled.div`
	width: 442px;
	margin: 200px auto;
	border-radius: 2px;
`;

const Container = styled.div`
	border: 1px solid #aaa;
	border-radius: 2px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
	padding: 20px;
`;

class Todos extends Component<Props> {
	componentDidMount() {}

	render() {
		const { todoStore } = this.props;
		return (
			<MainContainer>
				<Container>
					<div style={{ borderBottom: '1px solid #333', paddingBottom: 10, fontSize: 16 }}>
						Todos
					</div>
					<br />
					<div>
						{todoStore.todos.length > 0
							? (
								<ul>
									{todoStore.todos.map(each => (
										<li key={each}>
											{each}
										</li>
									))}
								</ul>
							) : (
								<em>No records found.</em>
							)}
					</div>
				</Container>
				<div style={{ marginTop: 20, color: 'blue' }}>
					<Link to="/">
						Go to Home
					</Link>
				</div>
			</MainContainer>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps
)(Todos);
