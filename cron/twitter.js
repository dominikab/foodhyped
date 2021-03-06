var Twitter = require('twitter');

var client = new Twitter(require('../config/panda-config.js').twitter);

// Search for the tweets
var params = {q: 'restaurant%20%3A)&geocode=37.7880000,-122.3998380,15km&lang=en&result_type=recent&src=typd'};

client.get('https://api.twitter.com/1.1/search/tweets.json', params, function(error, tweets, response) {
 if (error) {
   console.log(error);
 } else {
   console.log(tweets);
 }
});

// Fill me out!
module.exports = {
  getApiData : function(thisYelpData, callback) {
    // Contact the API with thisYelpData, then...

    callback(dataReturnedFromApi);
  }
}

// format: 
// dataReturnedFromApi.numTweets
//   ^ number of tweets
// dataReturnedFromApi.url
//   ^ url of search query (host is not api.twitter.com)