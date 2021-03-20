const grpc = require('grpc');
const messages = require('./chat_pb');
const services = require('./chat_grpc_pb');

const server_config = { 'host': 'localhost', 'port': 50051 }
const client = new services.ChatClient(
    `${server_config.host}:${server_config.port}`,
    grpc.credentials.createInsecure()
)

let stream_messages = function(){
    let call = client.streamMessages(new messages.Empty());
    call.on('data', function(response) {
        console.log(response.getName(), response.getMessage())
    });
    call.on('error', function(e) {
        console.log("error in streamMessages", e)
    });
    call.on('end', function() {});
}

stream_messages()
