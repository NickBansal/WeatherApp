var getUser = (id, callback) => {
	
	var user = {
		id: id, 
		name: "Nick"
	}

	setTimeout(function() {
		callback(user)
	}, 3000)
}

getUser(31, function(userObject) {
	console.log(userObject)
})

































