/*
 stream

 Usage:
   node job <bot_name> get_account_verify_credentials (-a | --app) <app_name> (-u | --user) <user_name>

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
  bot.stream(extraArguments[0], function (error, stream) {
    if(error) {
      if(callback) {
        callback(error, null);
      }
      return;
    }

    stream.on('data', function(tweet) {
      console.log(tweet.getJson());
      console.log(require('util').inspect(tweet.getJson(), false, null, true));
    });

    stream.on('error', function(error) {
      console.log(error);
    });
  });
};