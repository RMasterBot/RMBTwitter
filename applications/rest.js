/**
 * REST API
 * @param {Twitter} twitter
 * @constructor
 */
function Rest(twitter) {
  this.twitter = twitter;
}

Rest.prototype.getAccountSettings = function(callback) {
  var params = {
    method: 'GET',
    path: 'account/settings.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getAccountVerifyCredentials = function(callback) {
  var params = {
    method: 'GET',
    path: 'account/verify_credentials.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getApplicationRateLimitStatus = function(callback) {
  var params = {
    method: 'GET',
    path: 'application/rate_limit_status.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getBlocksIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'blocks/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getBlocksList = function(callback) {
  var params = {
    method: 'GET',
    path: 'blocks/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getCollectionsEntries = function(callback) {
  var params = {
    method: 'GET',
    path: 'collections/entries.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getCollectionsList = function(callback) {
  var params = {
    method: 'GET',
    path: 'collections/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getCollectionsShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'collections/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getDirectMessages = function(callback) {
  var params = {
    method: 'GET',
    path: 'direct_messages.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getDirectMessagesSent = function(callback) {
  var params = {
    method: 'GET',
    path: 'direct_messages/sent.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getDirectMessagesShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'direct_messages/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFavoritesList = function(callback) {
  var params = {
    method: 'GET',
    path: 'favorites/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFollowersIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'followers/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFollowersList = function(callback) {
  var params = {
    method: 'GET',
    path: 'followers/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendsIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'friends/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendsList = function(callback) {
  var params = {
    method: 'GET',
    path: 'friends/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendshipsIncoming = function(callback) {
  var params = {
    method: 'GET',
    path: 'friendships/incoming.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendshipsLookup = function(callback) {
  var params = {
    method: 'GET',
    path: 'friendships/lookup.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendshipsNoRetweetsIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'friendships/no_retweets/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendshipsOutgoing = function(callback) {
  var params = {
    method: 'GET',
    path: 'friendships/outgoing.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getFriendshipsShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'friendships/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getGeoId = function(callback) {
  var params = {
    method: 'GET',
    path: 'geo/id/place_id.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getGeoReverseGeocode = function(callback) {
  var params = {
    method: 'GET',
    path: 'geo/reverse_geocode.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getGeoSearch = function(callback) {
  var params = {
    method: 'GET',
    path: 'geo/search.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getHelpConfiguration = function(callback) {
  var params = {
    method: 'GET',
    path: 'help/configuration.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getHelpLanguages = function(callback) {
  var params = {
    method: 'GET',
    path: 'help/languages.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getHelpPrivacy = function(callback) {
  var params = {
    method: 'GET',
    path: 'help/privacy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getHelpTos = function(callback) {
  var params = {
    method: 'GET',
    path: 'help/tos.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsList = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsMembers = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/members.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsMembersShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/members/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsMemberships = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/memberships.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsOwnerships = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/ownerships.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsStatuses = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/statuses.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsSubscribers = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/subscribers.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsSubscribersShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/subscribers/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getListsSubscriptions = function(callback) {
  var params = {
    method: 'GET',
    path: 'lists/subscriptions.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getMutesUsersIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'mutes/users/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getMutesUsersList = function(callback) {
  var params = {
    method: 'GET',
    path: 'mutes/users/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getProjects = function(callback) {
  var params = {
    method: 'GET',
    path: 'projects.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getSavedSearchesList = function(callback) {
  var params = {
    method: 'GET',
    path: 'saved_searches/list.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getSavedSearchesShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'saved_searches/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getSearchTweets = function(callback) {
  var params = {
    method: 'GET',
    path: 'search/tweets.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesHomeTimeline = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/home_timeline.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesLookup = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/lookup.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesMentionsTimeline = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/mentions_timeline.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesOembed = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/oembed.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesRetweetersIds = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/retweeters/ids.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesRetweets = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/retweets.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesRetweetsOfMe = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/retweets_of_me.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getStatusesUserTimeline = function(callback) {
  var params = {
    method: 'GET',
    path: 'statuses/user_timeline.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getTrendsAvailable = function(callback) {
  var params = {
    method: 'GET',
    path: 'trends/available.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getTrendsClosest = function(callback) {
  var params = {
    method: 'GET',
    path: 'trends/closest.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getTrendsPlace = function(callback) {
  var params = {
    method: 'GET',
    path: 'trends/place.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersLookup = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/lookup.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersProfileBanner = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/profile_banner.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersSearch = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/search.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersShow = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/show.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersSuggestions = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/suggestions.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersSuggestionsSlug = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/suggestions/slug.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.getUsersSuggestionsSlugMembers = function(callback) {
  var params = {
    method: 'GET',
    path: 'users/suggestions/slug/members.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountRemoveProfileBanner = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/remove_profile_banner.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountSettings = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/settings.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountUpdateProfile = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/update_profile.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountUpdateProfileBackgroundImage = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/update_profile_background_image.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountUpdateProfileBanner = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/update_profile_banner.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postAccountUpdateProfileImage = function(callback) {
  var params = {
    method: 'POST',
    path: 'account/update_profile_image.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postBlocksCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'blocks/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postBlocksDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'blocks/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsEntriesAdd = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/entries/add.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsEntriesCurate = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/entries/curate.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsEntriesMove = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/entries/move.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsEntriesRemove = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/entries/remove.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postCollectionsUpdate = function(callback) {
  var params = {
    method: 'POST',
    path: 'collections/update.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postDirectMessagesDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'direct_messages/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postDirectMessagesNew = function(callback) {
  var params = {
    method: 'POST',
    path: 'direct_messages/new.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postFavoritesCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'favorites/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postFavoritesDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'favorites/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postFriendshipsCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'friendships/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postFriendshipsDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'friendships/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postFriendshipsUpdate = function(callback) {
  var params = {
    method: 'POST',
    path: 'friendships/update.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postGeoPlace = function(callback) {
  var params = {
    method: 'POST',
    path: 'geo/place.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsMembersCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/members/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsMembersCreateAll = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/members/create/all.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsMembersDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/members/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsMembersDestroyAll = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/members/destroy/all.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsSubscribersDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/subscribers/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postListsUpdate = function(callback) {
  var params = {
    method: 'POST',
    path: 'lists/update.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postMediaUpload = function(callback) {
  var params = {
    method: 'POST',
    path: 'media/upload.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postMutesUsersCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'mutes/users/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postMutesUsersDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'mutes/users/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postSavedSearchesCreate = function(callback) {
  var params = {
    method: 'POST',
    path: 'saved_searches/create.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postSavedSearchesDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'saved_searches/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postStatusesDestroy = function(callback) {
  var params = {
    method: 'POST',
    path: 'statuses/destroy.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postStatusesRetweet = function(callback) {
  var params = {
    method: 'POST',
    path: 'statuses/retweet.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postStatusesUnretweet = function(callback) {
  var params = {
    method: 'POST',
    path: 'statuses/unretweet.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postStatusesUpdate = function(callback) {
  var params = {
    method: 'POST',
    path: 'statuses/update.json'
  };

  this.twitter.prepareRequest(params, callback);
};

Rest.prototype.postUsersReportSpam = function(callback) {
  var params = {
    method: 'POST',
    path: 'users/report_spam.json'
  };

  this.twitter.prepareRequest(params, callback);
};


module.exports = Rest;