import { credentials } from '@grpc/grpc-js';
import { ProductsClient } from "../proto/product_grpc_pb";
import { Product, ProductRequest, ProductStatus } from '../proto/product_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const port = 8080;

const client = new ProductsClient(`localhost:${port}`, credentials.createInsecure());

function getProduct(id: string) {
    return new Promise((resolve, reject) => {
        const request = new ProductRequest();
        request.setId(id);

        client.getProduct(request, (err, response) => {
            if (err) reject(err);
            else resolve(response.toObject());
        })
    })
}

function createProduct(product: Product) {
    const stream = client.createProduct(() => {});
    stream.write(product);
    stream.end();
    stream.on("end", () => console.log("Product created"));
}

function getProducts() {
    return new Promise<Product[]>((resolve, reject) => {
        const request = new Empty();
        const call = client.getProducts(request);
        const products: Product[] = [];

        call.on("data", (product: Product) => products.push(product));
        call.on("error", reject);
        call.on("end", () => resolve(products));
    })
}

async function main() {
    //const product = new Product();
    //product.setName("Product 1");
    //product.setDescription("Description 1");
    //product.setPrice(100);
    //product.setStatus(ProductStatus.ACTIVE);

    //createProduct(product);

    //const products = await getProducts();
    //console.log(products);

    const product1 = await getProduct("1");
    console.log(product1);
}

main();
