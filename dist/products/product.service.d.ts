import { Product } from "./product.module";
import { HttpService } from "@nestjs/axios";
export declare class ProductsService {
    private httpService;
    products: Product[];
    constructor(httpService: HttpService);
    insertProduct(title: string, description: string, prize: number): string;
    getSingleProduct(productId: string): Product[];
    getAllProduct(): Product[];
}
