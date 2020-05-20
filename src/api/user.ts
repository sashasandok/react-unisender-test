import { get } from './apiClient'

export default {
	getUsers: () => get('users', {}),
	getUserByName: (name: string) => get(`users/${name}`, {}),
}
