import { Injectable } from "@nestjs/common";
import { Customer } from "./customer.module";

@Injectable()
export class CustomerService {
    customer : Customer[] = [];

    insertCustomer(name: string, address: string, email: string){
        const custId = new Date().toString();
        const newCustomer = new Customer(custId,name, address, email);

        this.customer.push(newCustomer);
        return custId;
    }

    getCustomer(){
        return this.customer;
    }
}