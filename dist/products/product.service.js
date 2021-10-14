"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const nest_console_1 = require("@squareboat/nest-console");
const product_module_1 = require("./product.module");
const axios_1 = require("@nestjs/axios");
let ProductsService = class ProductsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.products = [];
    }
    insertProduct(title, description, prize) {
        const prodId = Math.random().toString();
        const newProduct = new product_module_1.Product(prodId, title, description, prize);
        this.products.push(newProduct);
        return prodId;
    }
    getSingleProduct(productId) {
        const prod = this.products.find(prod => prod.id == productId);
        if (!prod) {
            throw new common_1.NotFoundException("Not available");
        }
        else {
            return [prod];
        }
    }
    getAllProduct() {
        console.log("I am heree");
        return [...this.products];
    }
};
__decorate([
    (0, nest_console_1.Command)('login', {
        desc: 'login to inteliquent',
        args: { name: { req: false } },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsService.prototype, "getAllProduct", null);
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=product.service.js.map