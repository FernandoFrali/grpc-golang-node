#!/bin/bash

GO_PROTO_DIR=../go-grpc/proto
TS_PROTO_DIR=./proto
TS_DIR=../node-grpc/

# Generate Go proto files

protoc --go_out=. --go-grpc_out=. proto/*.proto

# Generate JavaScript proto files
cd ${TS_DIR}

npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${TS_PROTO_DIR} \
  --grpc_out=${TS_PROTO_DIR} \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ${GO_PROTO_DIR} \
  ${GO_PROTO_DIR}/*.proto

# Generate TypeScript proto files

npx grpc_tools_node_protoc \
  --ts_out=${TS_PROTO_DIR} \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I ${GO_PROTO_DIR} \
  ${GO_PROTO_DIR}/*.proto
