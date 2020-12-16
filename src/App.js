import { React, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Submit from './components/Submit/Submit';
import Displays from './components/Displays/Displays';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import URL from './config';

const App = () => {

  return (
		<div>
			<Header />
			<main>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/submit" exact component={Submit} />
			</main>
		</div>
	);
};

export default App;