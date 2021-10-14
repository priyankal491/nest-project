import { CustomerService } from "./customer.service";
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    addCustomer(name: string, address: string, email: string): {
        id: string;
    };
    getCustomer(): import("./customer.module").Customer[];
}
