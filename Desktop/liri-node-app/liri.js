//commands for concert-this, spotify-this-song, movie-this
require("dotenv").config();
var fs = require('fs');
var request = require('request');
var inquirer = require("inquirer");
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var Music = require("./keys");
var bandsintown = require('bandsintown');
var moment = require('moment');

// Grab search command line argument
var search = process.argv[2];
var artist = process.argv[3];

var command = process.argv.slice(3).join(" ");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = "";
var spotifySong = "";
var bands = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
  
    }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  console.log(queryUrl);
  
axios.get(queryUrl).then(
    function(response) {
      console.log("-------------------");
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMBD Rating: " + response.data.Rating);
      console.log("Country Produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Movie Plot: " + response.data.movie.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("-------------------");
});
///////////////////////////////////////////////////////////////////////////////////////

//Spotify

function spotify(song)  {
    var artist = response.data.Artist
    var title = response.data.title
    var album = response.data.album.name
    var spotify = new Spotify(keys.spotify);
    spotify.search({type: 'track', query: song})
       .then(function(response){
 
        for (var i = 2; i < nodeArgs.length; i++) {

            if (i > 2 && i < nodeArgs.length) {
              spotifySong = spotifySong + "+" + nodeArgs[i];
            }
            else {
              spotifySong += nodeArgs[i];
          
            }
        }
            console.log("Artist:  " + response.data.Artist);
            console.log("Title:  " + response.data.title);
            console.log("Preview link: " + track.preview_url);
            console.log("Album:  " + response.data.album.name);
            console.log('=====================');
       }
    });
}
module.exports = spotify;
///////////////////////////////////////////////////////////////////////////////////////
//BandsInTown

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
      bands = bands + "+" + nodeArgs[i];
    }
    else {
      bands += nodeArgs[i];
  
    }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  console.log(queryUrl);
  
axios.get(queryUrl).then(
    function(response) {
      console.log("-------------------");
      console.log("Venue Name: " + response.date.venue.name;
      console.log("Venue location: " + response.date.venue.location;
      console.log("Date Event: " + response.date.format("MM/DD/YYYY");
      console.log("-------------------");
});











