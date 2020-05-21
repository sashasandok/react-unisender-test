import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserByName, setUser } from '../../redux/actions/users'
import { useFetch } from '../../hooks/useFetch'
import DetailedCard from '../../components/DetailedCard/DetailedCard'
import { DetailedCardProps } from '../../types'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DetailedCardPage: React.FC<DetailedCardProps> = (props: any) => {
	const dispatch = useDispatch()

	const userName = props.match.params.username as string
	useFetch(() => getUserByName(userName))
	const user = useSelector((state: any) => state.user.user)

	return (
		<>
			<Container
				textAlign="justified"
				style={{
					background: 'lightgray',
					padding: '80px 130px',
					minHeight: '92vh',
				}}
			>
				<Link to="/" onClick={() => dispatch(setUser({}))}>
					to home
				</Link>
				<DetailedCard user={user} />
			</Container>
		</>
	)
}

export default DetailedCardPage
