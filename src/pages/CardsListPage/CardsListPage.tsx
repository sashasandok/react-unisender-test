import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers, setPage } from '../../redux/actions/users'
import { useFetch } from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import CardList from '../../components/CardList/CardList'
import { CardListProps } from '../../types'
import { Container, Pagination } from 'semantic-ui-react'

const UserList: React.FC<CardListProps> = () => {
	const dispatch = useDispatch()

	useFetch(getUsers)

	const data = useSelector((state: any) => {
		return {
			users: state.user.users,
			page: state.user.page,
		}
	})
	const { users, page } = data

	const onPaginationChange = (e: any, { activePage }: any) => {
		dispatch(setPage({ page: activePage }))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

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
				<CardList users={users[page]} />
			</Container>
			<Pagination
				activePage={page}
				onPageChange={onPaginationChange}
				totalPages={5}
				style={{ marginTop: '25px' }}
			/>
		</>
	)
}

export default UserList
