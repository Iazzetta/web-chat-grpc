const grpc = require('grpc');
const messages = require('../stream/chat_pb');
const services = require('../stream/chat_grpc_pb');

// gRPC Config Server
const server_config = { 'host': 'localhost', 'port': 50051 }

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/assets', express.static(__dirname + '/assets'));

app.set('view engine', 'pug');
app.set('views','./web/views');

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Chat gRPC' });
})

app.post('/send-message', (req, res) => {
    let client = new services.ChatClient(
        `${server_config.host}:${server_config.port}`,
        grpc.credentials.createInsecure()
    )
    const chatRequest = new messages.ChatRequest();
    chatRequest.setName(req.body.name);
    chatRequest.setMessage(req.body.message);
    
    client.sendMessage(chatRequest, function(err, response) {
        if (err) console.log('error in sendMessage:', err)
    })
    res.json({ status: 'success' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})