# Install NPM Dependencies

```
    npm install grpc google-protobuf @grpc/proto-loader
    npm install -g request
    npm install -g protoc-gen-grpc
```

# Install Python Dependencies

```
    pip install google-pasta grpcio grpcio-tools
```

# Generating Protobuf Python

```
    python -m grpc_tools.protoc -I./proto --python_out=./server --grpc_python_out=./server ./proto/chat.proto
```

# Generating Protobuf NodeJS

```
    protoc-gen-grpc --js_out=import_style=commonjs,binary:./stream/ --grpc_out=./stream --proto_path=./proto/ ./proto/chat.proto
```

# Generating Protobuf Javascript/Web

See: https://github.com/grpc/grpc-web/tree/master/packages/grpc-web

Set protoc-gen-grpc-web to the path: https://stackoverflow.com/questions/60388933/installation-of-protoc-gen-grpc-web

```
    protoc -I=./web/public/js/ --proto_path=./proto --js_out=import_style=commonjs:./web/public/gRPC --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/public/js ./proto/chat.proto
```

# WebPack Javascript

```
    npx webpack ./web/assets/js/chat.js
    mv dist/main.js /web/assets/dist/main.js
```