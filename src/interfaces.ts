export interface UserData {
	id: number
	avatarUrl: string
	eventsUrl: string
	followersUrl: string
	followingUrl: string
	gravatarId: string
	gistsUrl: string
	htmlUrl: string
	login: string
	nodeId: string
	organizationsUrl: string
	receivedEventsUrl: string
	reposUrl: string
	siteAdmin: boolean
	starredUrl: string
	subscriptionsUrl: string
	type: string
	url: string
}

export interface DetailedUserData {
	login: string
	id: number
	nodeId: string
	avatarUrl: string
	gravatarId: string
	url: string
	htmlUrl: string
	followersUrl: string
	followingUrl: string
	gistsUrl: string
	starredUrl: string
	subscriptionsUrl: string
	organizationsUrl: string
	reposUrl: string
	eventsUrl: string
	receivedEventsUrl: string
	type: string
	siteAdmin: boolean
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: boolean
	bio: string
	publicRepos: string
	publicGists: string
	followers: string
	following: string
	createdAt?: string
	updatedAt: string
}

export interface MapperUserData {
	id: number
	avatar_url: string
	events_url: string
	followers_url: string
	following_url: string
	gravatar_id: string
	gists_url: string
	html_url: string
	login: string
	node_id: string
	organizations_url: string
	received_events_url: string
	repos_url: string
	site_admin: boolean
	starred_url: string
	subscriptions_url: string
	type: string
	url: string
}

export interface MapperDetailedUserData {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: boolean
	bio: string
	public_repos: string
	public_gists: string
	followers: string
	following: string
	created_at?: string
	updated_at: string
}
