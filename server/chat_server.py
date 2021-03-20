import grpc
from concurrent import futures

import chat_pb2 as chat
import chat_pb2_grpc as rpc

import threading
import queue

class ChatServicer(rpc.ChatServicer):
    
    def __init__(self):
        self.messages = []
    
    def StreamMessages(self, request, context):
        lastindex = 0
        while True:
            while len(self.messages) > lastindex:
                n = self.messages[lastindex]
                lastindex += 1
                yield n
        
    def SendMessage(self, request, context):
        response = chat.ChatRequest()
        response.name = request.name
        response.message = request.message
        print(f"{request.name}: {request.message}")
        self.messages.append(response)
        return chat.Empty()
        
def main():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    rpc.add_ChatServicer_to_server(ChatServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Chat Server Started. Port: 50051")
    server.wait_for_termination()
    
main()