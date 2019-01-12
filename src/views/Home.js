// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { addTodo } from '../store/actions/todoActions';

type Props = {
	addTodo: Function;
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

const Input = styled.input`
	border: 1px solid #999;
	padding: 10px;
	width: 321px;
	border-radius: 2px;
	outline: none;
	transition: All 0.5s;
	:focus {
		box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
	}
`;

const AddButton = styled.span`
	margin-left: 10px;
	background-color: #666;
	color: #fff;
	border-radius: 2px;
	padding: 9px;
	:active {
		opacity: 0.75;
	}
`;

class Home extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}

	componentDidMount() {
		console.log('PROPS => ', this.props);
	}
	
	addTodo = () => {
		const { value } = this.state;
		this.props.addTodo(value);
		console.log('PROPS => ', this.props);
		this.setState({
			value: '',
		});
	}

	render() {
		return (
			<MainContainer>
				<Container>
					<div style={{ borderBottom: '1px solid #333', paddingBottom: 10, fontSize: 16 }}>
						Home
					</div>
					<br />
					<div>
						New Todo
					</div>
					<br />
					<div>
						<Input
							type="text"
							onChange={(e) => {
								this.setState({
									value: e.target.value,
								});
							}}
							value={this.state.value}
							placeholder="E.g. Jogging"
						/>
						<AddButton onClick={this.addTodo}>
							Add
						</AddButton>
					</div>
				</Container>
				<div style={{ marginTop: 20, color: 'blue', textAlign: 'right' }}>
					<Link to="/todos">
						Go to Todos
					</Link>
				</div>
			</MainContainer>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ addTodo },
)(Home);
