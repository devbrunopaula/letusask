import React from 'react'

import './App.scss'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateRoom from './pages/CreateRoom'
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/rooms/new' component={CreateRoom} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	)
}

export default App
