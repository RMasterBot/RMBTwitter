/**
 * AccountSettings Model
 * @class AccountSettings
 * @param {AccountSettings~Json} AccountSettings json of the AccountSettings
 * @constructor
 */
function AccountSettings(AccountSettings) {
  this.accountSettings = AccountSettings;
}

/**
 * @return {AccountSettings~Json|*}
 */
AccountSettings.prototype.getJson = function() {
  return this.accountSettings;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getAlwaysUseHttps = function() {
  return this.accountSettings.always_use_https;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getDiscoverableByEmail = function() {
  return this.accountSettings.discoverable_by_email;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getGeoEnabled = function() {
  return this.accountSettings.geo_enabled;
};

/**
 * @return {string}
 */
AccountSettings.prototype.getLanguage = function() {
  return this.accountSettings.language;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getProtected = function() {
  return this.accountSettings.protected;
};

/**
 * @return {string}
 */
AccountSettings.prototype.getScreenName = function() {
  return this.accountSettings.screen_name;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getShowAllInlineMedia = function() {
  return this.accountSettings.show_all_inline_media;
};

/**
 * @return {Object}
 */
AccountSettings.prototype.getSleepTime = function() {
  return this.accountSettings.sleep_time;
};

/**
 * @return {Object}
 */
AccountSettings.prototype.getTimeZone = function() {
  return this.accountSettings.time_zone;
};

/**
 * @return {Object}
 */
AccountSettings.prototype.getTrendLocation = function() {
  return this.accountSettings.trend_location;
};

/**
 * @return {boolean}
 */
AccountSettings.prototype.getUseCookiePersonalization = function() {
  return this.accountSettings.use_cookie_personalization;
};

/**
 * @return {string}
 */
AccountSettings.prototype.getAllowContributorRequest = function() {
  return this.accountSettings.allow_contributor_request;
};

module.exports = AccountSettings;

/**
 * AccountSettings Json
 * @typedef {Object} AccountSettings~Json
 * @property {boolean} always_use_https
 * @property {boolean} discoverable_by_email
 * @property {boolean} geo_enabled
 * @property {string} language
 * @property {boolean} protected
 * @property {string} screen_name
 * @property {boolean} show_all_inline_media
 * @property {Object} sleep_time
 * @property {Object} time_zone
 * @property {Object} trend_location
 * @property {boolean} use_cookie_personalization
 * @property {string} allow_contributor_request
 */