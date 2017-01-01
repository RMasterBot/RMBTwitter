/*
 get_account_settings

 Usage:
   node job <bot_name> get_account_settings (-a | --app) <app_name> (-u | --user) <user_name>

 API endpoint used:
   GET /1.1/account/settings

 Scope:
   xxx
*/
/**
 * @param {Twitter} bot
 * @param {string[]} extraArguments
 * @param {Job~Callback} callback
 */
module.exports = function(bot, extraArguments, callback) {
  bot.api.rest.getAccountSettings(function (error, data) {
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