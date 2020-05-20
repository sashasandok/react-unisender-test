import React from 'react'
import { UserData } from '../../interfaces'
import Card from '../Card/Card'
import './CardList.css'

type CardListProps = {
	users: UserData[]
}

const CardList: React.FC<CardListProps> = (props) => {
	return (
		<div className="card-list">
			{props.users.map((user: UserData) => (
				<Card
					key={user.id}
					id={user.id}
					login={user.login}
					htmlUrl={user.htmlUrl}
					avatarUrl={user.avatarUrl}
				/>
			))}
		</div>
	)
}

export default CardList
