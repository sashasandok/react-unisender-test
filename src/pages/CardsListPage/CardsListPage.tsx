import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions/users'
import { useFetch } from '../../hooks/useFetch'
import CardList from '../../components/CardList/CardList'
import { CardListProps } from '../../types'
import { Container, Pagination } from 'semantic-ui-react'

const UserList: React.FC<CardListProps> = () => {
	useFetch(getUsers)
	const users = useSelector((state: any) => state.user.users)

	return (
		<>
			<Container
				textAlign="justified"
				style={{
					background: 'white',
					paddingTop: '20px',
					minHeight: '70vh',
				}}
			>
				<CardList users={users} />
			</Container>
			<Pagination
				defaultActivePage={1}
				firstItem={null}
				lastItem={null}
				pointing
				secondary
				totalPages={3}
				style={{ marginTop: '25px' }}
			/>
		</>
	)
}

export default UserList
