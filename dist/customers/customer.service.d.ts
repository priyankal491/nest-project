import { Customer } from "./customer.module";
export declare class CustomerService {
    customer: Customer[];
    insertCustomer(name: string, address: string, email: string): string;
    getCustomer(): Customer[];
}
