// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_ChatRequest(arg) {
  if (!(arg instanceof chat_pb.ChatRequest)) {
    throw new Error('Expected argument of type ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatRequest(buffer_arg) {
  return chat_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof chat_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return chat_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  streamMessages: {
    path: '/Chat/StreamMessages',
    requestStream: false,
    responseStream: true,
    requestType: chat_pb.Empty,
    responseType: chat_pb.ChatRequest,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_ChatRequest,
    responseDeserialize: deserialize_ChatRequest,
  },
  sendMessage: {
    path: '/Chat/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.ChatRequest,
    responseType: chat_pb.Empty,
    requestSerialize: serialize_ChatRequest,
    requestDeserialize: deserialize_ChatRequest,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
