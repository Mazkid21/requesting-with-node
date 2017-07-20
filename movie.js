'use strict'

const request = require('request');

const apiKey =require('./env.js');

const movieTitle = [];

var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=012524686640135050800:_1j6pzftrqe&q=" + movieTitle;
console.log(apiUrl);

function myRequest(apiUrl, querryString) {

	request(apiUrl, function (error, response, body) {

		var bodyObject = JSON.parse(body);
		console.log(bodyObject);

	});
}





function get(movieTitle) {

	var queryArray = movieTitle.split(" ");
	var querryString = "";
		queryArray.forEach(function(element, index) {
		querryString += element;
		if (index < queryArray.length -1)
				querryString += '+';

});
myRequest(apiUrl, querryString);

}

module.exports = get;

