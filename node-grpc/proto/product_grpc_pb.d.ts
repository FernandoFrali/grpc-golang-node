// package: products
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProductsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProduct: IProductsService_IGetProduct;
    getProducts: IProductsService_IGetProducts;
    createProduct: IProductsService_ICreateProduct;
}

interface IProductsService_IGetProduct extends grpc.MethodDefinition<product_pb.ProductRequest, product_pb.Product> {
    path: "/products.Products/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.ProductRequest>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IProductsService_IGetProducts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, product_pb.Product> {
    path: "/products.Products/GetProducts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IProductsService_ICreateProduct extends grpc.MethodDefinition<product_pb.Product, google_protobuf_empty_pb.Empty> {
    path: "/products.Products/CreateProduct";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ProductsService: IProductsService;

export interface IProductsServer {
    getProduct: grpc.handleUnaryCall<product_pb.ProductRequest, product_pb.Product>;
    getProducts: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, product_pb.Product>;
    createProduct: grpc.handleClientStreamingCall<product_pb.Product, google_protobuf_empty_pb.Empty>;
}

export interface IProductsClient {
    getProduct(request: product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProducts(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    getProducts(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    createProduct(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    createProduct(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    createProduct(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    createProduct(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
}

export class ProductsClient extends grpc.Client implements IProductsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProduct(request: product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProducts(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    public getProducts(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    public createProduct(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    public createProduct(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    public createProduct(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
    public createProduct(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<product_pb.Product>;
}
