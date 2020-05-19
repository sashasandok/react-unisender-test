import { createActions } from 'redux-actions'
import apiData from '../../api/user'
import userMapper from '../../mappers/user'

const getActions = createActions<any>({
	request: (x) => x,
	complete: (x) => x,
	error: (x) => x,
}) as any

export default getActions

export const getUsers = () => async (dispatch: any) => {
	dispatch(getActions.request())

	try {
		const data = await apiData.getUsers()
		const users = data.map(userMapper)
		dispatch(
			getActions.complete({
				users,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(getActions.error(e.message))
	}
}
