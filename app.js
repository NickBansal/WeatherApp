const yargs = require('yargs');

const geocode = require('./geocode.js');
const weather = require('./weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		},
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.a, function(errorMessage, results) {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address)
		weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
			if (errorMessage) {
				console.log("Unable to connect");
			} else {
				console.log(`It's currently ${Math.floor((results.temperature - 32) * 5/9)} but it feels like ${Math.floor((results.apparentTemperature - 32) * 5/9)}`);
			}
		});
	}
})







