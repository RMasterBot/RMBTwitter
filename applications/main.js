var Bot = require(require('path').join('..','..','core','bot.js'));

/**
 * Twitter Bot
 * @class Twitter
 * @augments Bot
 * @param {string} name
 * @param {string} folder
 * @param {Twitter~Configuration[]} allConfigurations
 * @constructor
 */
function Twitter(name, folder, allConfigurations){
  Bot.call(this, name, folder, allConfigurations);

  this.defaultValues.hostname = 'api.twitter.com';

  this.defaultValues.httpModule = 'https';
  this.defaultValues.pathPrefix = '/1.1/';
  this.defaultValues.port = 443;

  this.defaultValues.defaultRemainingRequest = 180;
  this.defaultValues.defaultRemainingTime = 60*15;
}

Twitter.prototype = new Bot();
Twitter.prototype.constructor = Twitter;

function generateString() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var length = 32;
  var result = '';

  for (; length > 0; --length) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

/**
 * Add oauth to headers parameters
 * @param {Bot~doRequestParameters} parameters
 */
Twitter.prototype.generateOauth = function(parameters) {
  if(parameters.headers === undefined) {
    parameters.headers = {};
  }

  var params = [];
  var extraParams = [];

  var signedRequest;
  var signedKeyRequest;
  var signatureRequest;
  var url = encodeURIComponent(
    'https://' +
    ( (typeof parameters.hostname === 'string') ? parameters.hostname : this.defaultValues.hostname ) +
    ( (typeof parameters.pathPrefix === 'string') ? parameters.pathPrefix : this.defaultValues.pathPrefix) +
    ( (typeof parameters.path === 'string') ? parameters.path : this.defaultValues.path)
  );
  var method = parameters.method || this.defaultValues.method;

  params.push('oauth_callback="' + encodeURIComponent(this.currentConfiguration.callback_url) + '"');
  params.push('oauth_consumer_key="' + this.currentConfiguration.consumer_key + '"');
  params.push('oauth_nonce="' + generateString() + '"');
  params.push('oauth_signature_method="HMAC-SHA1"');
  params.push('oauth_timestamp="' + Math.round(new Date().getTime() / 1000) + '"');
  if(this.accessToken.access_token) {
    params.push('oauth_token="' + this.accessToken.access_token + '"');
  }
  else if(this.currentConfiguration.access_token) {
    params.push('oauth_token="' + this.currentConfiguration.access_token + '"');
  }
  else if(parameters.options && parameters.options.accessToken) {
    params.push('oauth_token="' + parameters.options.accessToken + '"');
  }
  params.push('oauth_version="1.0"');
  if(parameters.options && parameters.options.oauthParams) {
    params = params.concat(parameters.options.oauthParams);
  }

  for(var k in parameters.get) {
    if (parameters.get.hasOwnProperty(k)) {
      extraParams.push(k + '="' + parameters.get[k] + '"');
    }
  }

  signedRequest = method  + '&' + url + '&' + encodeURIComponent(params.join('&').replace(/"/g,''))
    + encodeURIComponent( (extraParams.length > 0 ? '&' : '') + extraParams.join('&').replace(/"/g,''));
  signedKeyRequest = this.currentConfiguration.consumer_secret + '&'
    + ( (parameters.options && parameters.options.accessToken) || this.accessToken.access_token_secret || this.currentConfiguration.access_token_secret || '');
  signatureRequest = require('crypto').createHmac('sha1', signedKeyRequest).update(signedRequest).digest('base64');

  params.push('oauth_signature="'+encodeURIComponent(signatureRequest)+'"');

  parameters.headers['Authorization'] = 'OAuth ' + params.join(', ');
};

/**
 * Prepare and complete parameters for request
 * @param {Bot~doRequestParameters} parameters
 * @param {Bot~requestCallback|*} callback
 */
Twitter.prototype.prepareRequest = function(parameters, callback) {
  this.generateOauth(parameters);

  if(parameters.options && parameters.options.useRequest === true) {
    this.request(parameters, callback);
  }
  else {
    this.doRequest(parameters, callback);
  }
};

Twitter.prototype.getAccountVerifyCredentials = function(callback) {
  var params = {
    method:'GET',
    path: 'account/verify_credentials.json'
  };

  this.prepareRequest(params, callback);
};

Twitter.prototype.getStatusesHomeTimeline = function(callback) {
  var params = {
    method:'GET',
    path: 'statuses/home_timeline.json',
    output: {
      model: 'Tweet',
      isArray: true
    }
  };

  this.prepareRequest(params, callback);
};

Twitter.prototype.stream = function(word, callback) {
  var that = this;
  var params = {
    method:'GET',
    hostname: 'stream.twitter.com',
    path: 'statuses/filter.json',
    stream : true,
    get: {
      track: word
    },
    options : {
      useRequest : true
    }
  };

  this.treatDataFromStream = function(data) {
    return new that.models['Tweet'](JSON.parse(data));
  };

  this.prepareRequest(params, callback);
};

/**
 * Add access token to query parameters
 * @param {Bot~doRequestParameters} parameters
 */
Twitter.prototype.addQueryAccessToken = function(parameters) {
  if(parameters.get === undefined) {
    parameters.get = {};
  }

  parameters.get.access_token = this.accessToken.access_token;
};

/**
 * Get remaining requests from result 
 * @param {Request~Response} resultFromRequest
 * @return {Number}
 */
Twitter.prototype.getRemainingRequestsFromResult = function(resultFromRequest) {
  return resultFromRequest.headers['x-rate-limit-remaining'] >> 0;
};

/**
 * Get url for Access Token when you have to authorize an application
 * @param {string} scopes
 * @param {*} callback
 */
Twitter.prototype.getAccessTokenUrl = function(scopes, callback) {
  var params = {
    method:'POST',
    pathPrefix:'',
    path: '/oauth/request_token',
    options: {
      useRequest : true
    }
  };

  this.prepareRequest(params, function(error, data){
    if(error) {
      console.log(error);
      return;
    }

    var oauth = require('querystring').parse(data.data);
    callback('https://twitter.com/oauth/authenticate?oauth_token=' + oauth.oauth_token);
  });
};

/**
 * Extract response in data for Access Token
 * @param {Object} req request from local node server
 * @return {*} code or something from response
 */
Twitter.prototype.extractResponseDataForAccessToken = function(req) {
  var query = require('url').parse(req.url, true).query;

  if(Object.keys(query).length === 0) {
    return null;
  }

  return query;
};

/**
 * Request Access Token after getting code
 * @param {Object} oauth
 * @param {Bot~requestAccessTokenCallback} callback
 */
Twitter.prototype.requestAccessToken = function(oauth, callback) {
  var params = {
    method:'POST',
    pathPrefix:'',
    path: '/oauth/access_token',
    headers:{
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    body: 'oauth_verifier='+oauth.oauth_verifier,
    options: {
      oauthParams : ['oauth_verifier="'+oauth.oauth_verifier+'"'],
      accessToken : oauth.oauth_token,
      useRequest : true
    }
  };

  this.prepareRequest(params, function(error, data){
    if(error) {
      console.log(error);
      return;
    }

    callback(error, data.data);
  });
};

Twitter.prototype.formatNewAccessToken = function(accessTokenData, scopes, callback) {
  var oauth = require('querystring').parse(accessTokenData);

  var formatAccessToken = {
    "access_token": oauth.oauth_token,
    "access_token_secret": oauth.oauth_token_secret,
    "user_id": oauth.user_id,
    "user": oauth.screen_name.toLowerCase()
  };

  callback(null, formatAccessToken);
};

Twitter.prototype.extractDataFromRequest = function(data) {
  return data;
};

module.exports = Twitter;

/**
 * Twitter Configuration
 * @typedef {Object} Twitter~Configuration
 * @property {string} name
 * @property {string} consumer_key
 * @property {string} consumer_secret
 * @property {string} access_token_key
 * @property {string} access_token_secret
 * @property {string} callback_url
 */
/**
 * Request callback
 * @callback Twitter~requestCallback
 * @param {Error|string|null} error - Error
 * @param {*} data
 */