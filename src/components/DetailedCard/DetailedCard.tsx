import React from 'react'
import { DetailedCardProps } from '../../types'
import moment from 'moment'
import './DetailedCard.css'

const DetailedCard: React.FC<DetailedCardProps> = (props) => {
	return (
		<>
			{props.user && (
				<div className="detailed-user">
					<img src={props.user.avatarUrl} alt="" />
					<div className="user-detailed-info">
						<p className="user-name">{props.user.name}</p>
						<p className="user-location">{props.user.location}</p>
						<p className="user-date">
							From {moment(props.user.createdAt).format('DD/MM/YYYY')}
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default DetailedCard
