import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { getUsers } from './redux/actions/users'
import { useFetching } from './hooks/useFetch'

const App: React.FC = () => {
	useFetching(getUsers)
	const users = useSelector((state: any) => state.user.users)

	return (
		<div className="app">
			{users.map((user: any) => {
				return (
					<div key={user.id}>
						{user.id}.{user.login}
					</div>
				)
			})}
		</div>
	)
}

export default App
