const RedisSMQ = require('rsmq');
const rsmq = new RedisSMQ( {host: "127.0.0.1", port: 6379, ns: "rsmq"} );

rsmq.createQueue({ qname: "queue1" }, function (err, resp) {
	if (err) {
		console.error(err)
		return
	}

	if (resp === 1) {
		console.log("queue1 created")
	}
});

// trigger notifications based on the events i.e account creation
// The message will be queued using the redisMQ
// redis will handle the message processing 

rsmq.sendMessage({ qname: "queue1", message: "Your account has expired"}, function (err, resp) {
	if (err) {
		console.error(err)
		return
	}

	console.log("Message sent. ID:", resp);
});