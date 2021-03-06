var thecallr = require('thecallr');

try {
	// initialize instance Thecallr
	// set your credentials or an Exception will raise
	var tc = new thecallr.api("login", "password");

	// Basic example
	// Example to send a SMS
	// 1. "call" method: each parameter of the method as an argument
	tc.call("sms.send", "THECALLR", "+33123456789", "Hello, world", {
		flash_message: false
	})
		.success(function(data) {
			console.log("Response:", data);
		})
		.error(function(error) {
			console.error("\nError:", error.message);
			console.error("Code:", error.code);
			console.error("Data:", error.data);
		});

	// 2. "send" method: parameter of the method is an array
	var my_array = ["THECALLR", "+33123456789", "Hello, world", {
		"flash_message": false
	}];
	tc.send("sms.send", my_array)
		.success(function(data) {
			console.log("Response 2:", data);
		})
		.error(function(error) {
			console.error("\nError:", error.message);
			console.error("Code:", error.code);
			console.error("Data:", error.data);
		});
}
catch (e) {
	console.error("Fatal error");
	console.error(e);
}
