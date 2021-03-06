import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Displays from './components/Displays/Displays';
import Detail from "./components/Detail/Detail"
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
			<Route exact path='/login'>
				<Login />
			</Route>

			<Route exact path='/register'>
				<Register />
			</Route>

			<Route exact path='/receipts' render={authGuard(Displays)}></Route>

			<Route exact path='/'>
				<Redirect to='/receipts' />
			</Route>

			<Route exact path='/submit' render={authGuard(Submit)}></Route>

			<Route exact path='/submit'>
				<Redirect to='/submit' />
			</Route>

			<Route exact path='/receipts/:id/' render={(routerProps) => {
				return <Detail match={routerProps.match} />
			} }></Route>

			<Route path='*'>
				<Error />
			</Route>
		</Switch>
	</Router>
);
export default Routes;

// // https://codeburst.io/to-handle-user-authentication-with-reactjs-2f565e7e0d63
