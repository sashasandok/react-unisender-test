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
				<a
					rel="noopener norefferer"
					target="_blank"
					href={props.htmlUrl}
					className="user-info"
				>
					<img src={props.avatarUrl} alt="" className="user-image" />
					<p>{props.login}</p>
				</a>
				<Link to={`/users/${props.login}`}>
					<Button content="User Info" basic />
				</Link>
			</div>
			<Divider />
		</div>
	)
}

export default Card
