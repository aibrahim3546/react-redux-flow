import { ADD_TODO } from './types';

export const addTodo = (val) => dispatch => {
	dispatch({
		type: ADD_TODO,
		payload: val,
	});
};

