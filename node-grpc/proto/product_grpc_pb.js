// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_Product(arg) {
  if (!(arg instanceof product_pb.Product)) {
    throw new Error('Expected argument of type products.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_Product(buffer_arg) {
  return product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_ProductRequest(arg) {
  if (!(arg instanceof product_pb.ProductRequest)) {
    throw new Error('Expected argument of type products.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_ProductRequest(buffer_arg) {
  return product_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductsService = exports.ProductsService = {
  getProduct: {
    path: '/products.Products/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductRequest,
    responseType: product_pb.Product,
    requestSerialize: serialize_products_ProductRequest,
    requestDeserialize: deserialize_products_ProductRequest,
    responseSerialize: serialize_products_Product,
    responseDeserialize: deserialize_products_Product,
  },
  getProducts: {
    path: '/products.Products/GetProducts',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: product_pb.Product,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_products_Product,
    responseDeserialize: deserialize_products_Product,
  },
  createProduct: {
    path: '/products.Products/CreateProduct',
    requestStream: true,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_products_Product,
    requestDeserialize: deserialize_products_Product,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProductsClient = grpc.makeGenericClientConstructor(ProductsService);
