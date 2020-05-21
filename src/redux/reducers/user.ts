import { handleActions } from 'redux-actions'
import actions from '../actions/users'

export const initialState = {
	users: [],
	isFetching: false,
	error: '',
	page: 1,
	user: {},
}

export default handleActions<any>(
	{
		[actions.get.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.get.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				users: payload.users,
				[payload.page]: payload.users,
			}
		},

		[actions.get.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.setPage]: (state, { payload }) => ({
			...state,
			page: payload.page,
		}),

		[actions.getByName.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.getByName.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				user: payload.user,
			}
		},

		[actions.getByName.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},
	},
	initialState,
)
