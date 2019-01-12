import { ADD_TODO } from '../actions/types';

export interface TodoStoreTypes {
  todos: Array<String>;
}

const initialState = {
	todos: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
	case ADD_TODO:
		state.todos.push(action.payload);
		return {
			...state,
		};
	default:
		return state;
	}
};
