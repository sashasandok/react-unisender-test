import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CardsListPage from '../pages/CardsListPage/CardsListPage'
import DetailedCardPage from '../pages/DetailedCardPage/DetailedCardPage'
import NotFound from '../components/NotFound/NotFound'

import './App.css'

const App: React.FC = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={CardsListPage} />
					<Route exact path="/users/:username" component={DetailedCardPage} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
