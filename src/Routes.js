import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Displays from './components/Displays/Displays';
import Submit from "./components/Submit/Submit"
import Error from './components/Error/Error';

const authGuard = (Component) => () => {
	return localStorage.getItem('token') ? (
		<Component />
	) : (
		<Redirect to='/login' />
	);
};

const Routes = (props) => (
	<Router {...props}>
		<Switch>
			<Route path='/login'>
				<Login />
			</Route>

			<Route path='/register'>
				<Register />
			</Route>

			<Route path='/receipts' render={authGuard(Displays)}></Route>

			<Route exact path='/'>
				<Redirect to='/receipts' />
			</Route>

			<Route path='/submit' render={authGuard(Submit)}></Route>

			<Route exact path='/submit'>
				<Redirect to='/submit' />
			</Route>

			<Route path='*'>
				<Error />
			</Route>
		</Switch>
	</Router>
);
export default Routes;
