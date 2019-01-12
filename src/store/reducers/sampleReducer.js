// (sample code) When creating new reducer just copy and paste this code to get started

import { ADD_TODO } from '../actions/types';

const initialState = {
	items: [],
	item: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
	case ADD_TODO:
		return {
			...state,
			items: action.payload,
		};
	default:
		return state;
	}
};
