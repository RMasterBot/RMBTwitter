/*
 get_followers_ids

 Usage:
   node job <bot_name> get_followers_ids (-a | --app) <app_name> (-u | --user) <user_name>

 API endpoint used:
   GET /

 Scope:
   xxx
*/
/**
 * @param {Twitter} bot
 * @param {string[]} extraArguments
 * @param {Job~Callback} callback
 */
module.exports = function(bot, extraArguments, callback) {
  bot.api.rest.getFollowersIds(function (error, data) {
    if(error) {
      if(callback) {
        callback(error, null);
      }
      return;
    }

    if(callback) {
      callback(null, data);
    }
  });
};