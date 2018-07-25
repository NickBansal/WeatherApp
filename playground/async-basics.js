console.log('Starting Countdown:\n');


var countDown = 11

var interval = setInterval(() => {
	countDown -= 1;
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`${countDown}`)
	
}, 1000)


setTimeout(() => {
	clearInterval(interval);
	console.log("\nBOOOOOOM\n")
	console.log('Finished')
}, 11000 )


