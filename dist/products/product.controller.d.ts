import { ProductsService } from "./product.service";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, description: string, prize: number): {
        id: string;
    };
    getSelectedProduct(prodId: string): import("./product.module").Product[];
    getAllProduct(): import("./product.module").Product[];
}
