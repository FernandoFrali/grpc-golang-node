package main

import (
	"context"
	"hello/grpc/pb"
	"log"
	"net"

	"google.golang.org/grpc"
)

type Server struct {
	pb.UnimplementedProductsServer
}

func (s *Server) GetProduct(ctx context.Context, in *pb.ProductRequest) (*pb.Product, error) {
    return &pb.Product{
        Id: in.Id,
        Name: "Product " + in.Id,
        Description: "Description of product " + in.Id,
        Status: pb.ProductStatus_ACTIVE,
    }, nil
}

func main() {
	println("Running server")

	listener, err := net.Listen("tcp", ":8080")

	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	pb.RegisterProductsServer(s, &Server{})

	if error := s.Serve(listener); error != nil {
		log.Fatalf("failed to serve: %v", error)
	}
}
