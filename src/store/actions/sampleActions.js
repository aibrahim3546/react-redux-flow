// (sample code) When creating new actions just copy and paste this code to get started

import { ADD_TODO } from './types';

export const fetchPosts = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts =>
			dispatch({
				type: ADD_TODO,
				payload: posts
			})
		);
};
