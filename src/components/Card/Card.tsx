import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button } from 'semantic-ui-react'
import './Card.css'

type UserData = {
	id: number
	login: string
	htmlUrl: string
	avatarUrl: string
}

const Card: React.FC<UserData> = (props) => {
	return (
		<div key={props.id} className="card-layout">
			<div className="card-content">
				<Link className="user-info" to={`/users/${props.login}`}>
					<img src={props.avatarUrl} alt="" className="user-image" />
					<p>{props.login}</p>
				</Link>
				<a rel="noopener norefferer" target="blank" href={props.htmlUrl}>
					<Button content="User Link" basic />
				</a>
			</div>
			<Divider />
		</div>
	)
}

export default Card
