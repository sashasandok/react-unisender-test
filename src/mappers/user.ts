import { MapperUserData } from '../interfaces'

export default (user: MapperUserData) => {
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
