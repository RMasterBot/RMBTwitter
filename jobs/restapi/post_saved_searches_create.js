/*
 post_saved_searches_create

 Usage:
   node job <bot_name> post_saved_searches_create (-a | --app) <app_name> (-u | --user) <user_name>

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
  bot.post_saved_searches_create(function (error, data) {
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