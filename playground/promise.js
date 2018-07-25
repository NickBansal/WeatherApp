var asyncAdd = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Both arguments must be numbers!!!')
			}
		}, 1500)
	});
}



asyncAdd(9,4)
.then((message) => {
	console.log(`Sum: ${message}`)
	return asyncAdd(message, 29);
})
.then((message) => {
	console.log(`Sum: ${message}`)
})
.catch((message) => {
	console.log(`Failed ${message}`)
})



// var somePromise = new Promise(function(resolve, reject){
// 	setTimeout(() => {
// 		resolve('Hey it worked');
// 	}, 2500);
// });

// somePromise
// .then((message) => {
// 	console.log("Success: " + message)
// })
// .catch((message) => {
// 	console.log("Failed: " + message)
// })