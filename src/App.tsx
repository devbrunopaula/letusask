import './App.scss'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateRoom from './pages/CreateRoom'
import {AuthContextProvider} from './contexts/AuthContext'

function App() {
	return (
		<Router>
			<AuthContextProvider>
				<Switch>
					<Route exact path='/rooms/new' component={CreateRoom} />
					<Route exact path='/' component={Home} />
				</Switch>
			</AuthContextProvider>
		</Router>
	)
}

export default App
