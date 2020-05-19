export default (user: UserData) => {
	return {
		id: user.id,
		avatarUrl: user.avatar_url,
		eventsUrl: user.events_url,
		followersUrl: user.followers_url,
		followingUrl: user.following_url,
		gistsUrl: user.gists_url,
		gravatarId: user.gravatar_id,
		htmlUrl: user.html_url,
		login: user.login,
		nodeId: user.node_id,
		organizationsUrl: user.organizations_url,
		receivedEventsUrl: user.received_events_url,
		reposUrl: user.repos_url,
		siteAdmin: user.site_admin,
		starredUrl: user.starred_url,
		subscriptions_url: user.subscriptions_url,
		type: user.type,
		url: user.url,
	}
}

interface UserData {
	id: Number
	avatar_url: String
	events_url: String
	followers_url: String
	following_url: String
	gravatar_id: String
	gists_url: String
	html_url: String
	login: String
	node_id: String
	organizations_url: String
	received_events_url: String
	repos_url: String
	site_admin: Boolean
	starred_url: String
	subscriptions_url: String
	type: String
	url: String
}
