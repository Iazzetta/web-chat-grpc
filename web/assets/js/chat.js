const {ChatClient} = require('./chat_grpc_web_pb.js');
const {ChatRequest} = require('./chat_pb.js');

const client = new ChatClient('localhost:50051');

$(document).on('submit', 'form', function(event){
    event.preventDefault();
    let data = $('form').serialize();
    
    const request = new ChatRequest();
    request.setName(data.name);
    request.setMessage(data.message);

    const metadata = {'Access-Control-Allow-Origin': '*'};
    
    client.sendMessage(request, metadata, (err, response) => {
      if (err) console.log(err)
      else {
          console.log(response)
      }
    });
    
});