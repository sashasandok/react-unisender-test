import { handleActions } from 'redux-actions'
import getActions from '../actions/users'

export const initialState = {
	users: [],
}

export default handleActions<any>(
	{
		[getActions.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[getActions.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				users: payload.users,
			}
		},

		[getActions.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},
	},
	initialState,
)
