/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ChatRequest>}
 */
const methodDescriptor_Chat_StreamMessages = new grpc.web.MethodDescriptor(
  '/Chat/StreamMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Empty,
  proto.ChatRequest,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.ChatRequest>}
 */
const methodInfo_Chat_StreamMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ChatRequest,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatRequest.deserializeBinary
);


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatRequest>}
 *     The XHR Node Readable Stream
 */
proto.ChatClient.prototype.streamMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Chat/StreamMessages',
      request,
      metadata || {},
      methodDescriptor_Chat_StreamMessages);
};


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatRequest>}
 *     The XHR Node Readable Stream
 */
proto.ChatPromiseClient.prototype.streamMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Chat/StreamMessages',
      request,
      metadata || {},
      methodDescriptor_Chat_StreamMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ChatRequest,
 *   !proto.Empty>}
 */
const methodDescriptor_Chat_SendMessage = new grpc.web.MethodDescriptor(
  '/Chat/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.ChatRequest,
  proto.Empty,
  /**
   * @param {!proto.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ChatRequest,
 *   !proto.Empty>}
 */
const methodInfo_Chat_SendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /**
   * @param {!proto.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.ChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage,
      callback);
};


/**
 * @param {!proto.ChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.ChatPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage);
};


module.exports = proto;

