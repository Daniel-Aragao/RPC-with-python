var zerorpc = require("zerorpc");

var server = new zerorpc.Server({
    value:  [],
    exposed_append: function(name, reply) {
        this.value = this.value.concat([reply]);
        reply(null, this.value);
    },
    exposed_value: function(reply){
        reply(null, this.value);
    }
});

server.bind("tcp://127.0.0.1:12345");

server.on("error", function(error) {
    console.error("RPC server error:", error);
});
