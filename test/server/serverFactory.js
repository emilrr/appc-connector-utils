const Arrow = require ('arrow');
module.exports = function(config, callback) {
    const server = new Arrow(config);
    server.start(function() {
		callback(null, server);
	});
}
