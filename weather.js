const request = require('request');
const yargs = require('yargs');


var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/fc48df5ec9df619b200b58149d3a839b/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
			});	
		} else {
			callback('Unable to fetch the weather');
		};
	});
};


module.exports = {
	getWeather,
}