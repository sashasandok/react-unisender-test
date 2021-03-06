import { createActions } from 'redux-actions'
import apiData from '../../api/user'
import userMapper from '../../mappers/user'
import userDetailedMapper from '../../mappers/detailedUser'
import { divideToPages } from '../../utils/paging'

export const PAGE_COUNT = 5

const actions = createActions<any>({
	get: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	getByName: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	setPage: (x) => x,
	setUser: (x) => x,
}) as any

export default actions

export const getUsers = () => async (dispatch: any) => {
	dispatch(actions.get.request())

	try {
		const data = await apiData.getUsers()
		const users = data.map(userMapper)
		const pages = divideToPages(users, PAGE_COUNT)

		dispatch(
			actions.get.complete({
				users: pages,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(actions.get.error(e.message))
	}
}

export const getUserByName = (name: string) => async (dispatch: any) => {
	dispatch(actions.getByName.request())

	try {
		const userData = await apiData.getUserByName(name)
		const user = userDetailedMapper(userData)

		dispatch(
			actions.getByName.complete({
				user,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(actions.getByName.error(e.message))
	}
}

export const setPage = ({ page }: any) => async (dispatch: any) => {
	dispatch(actions.setPage({ page }))
}

export const setUser = (data: any) => async (dispatch: any) => {
	dispatch(actions.setUser({ user: data }))
}
