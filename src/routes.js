import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import Home from './views/Home';
import Todos from './views/Todos';

const AppRouter = () => (
	<Provider store={store}>
		<App>
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/todos" exact component={Todos} />
				</div>
			</Router>
		</App>
	</Provider>
);

export default AppRouter;
