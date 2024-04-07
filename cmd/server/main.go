package main

import (
	"context"
	"hello/grpc/pb"
	"log"
	"net"

	"google.golang.org/grpc"
)

type Server struct {
	pb.UnimplementedHelloServer
}

func (s *Server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
	return &pb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func main() {
	println("Running server")

	listener, err := net.Listen("tcp", ":8080")

	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	pb.RegisterHelloServer(s, &Server{})

	if error := s.Serve(listener); error != nil {
		log.Fatalf("failed to serve: %v", error)
	}
}
