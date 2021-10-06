import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateRoom from './pages/CreateRoom'
import {AuthContextProvider} from './contexts/AuthContext'
import Room from './pages/Room'
import DefaultLayout from './layout/DefaultLayout'

function App() {
	return (
		<Router>
			<AuthContextProvider>
				<Switch>
					<Route exact path='/rooms/new' component={CreateRoom} />
					{/* <Route exact path='/rooms/:id' component={Room} /> */}
					<Route exact path='/' component={Home} />
					<DefaultLayout exact path='/rooms/:id' component={Room} />
				</Switch>
			</AuthContextProvider>
		</Router>
	)
}

export default App
