import { get } from './apiClient'

export default {
	getUsers: () => get('users', {}),
}
