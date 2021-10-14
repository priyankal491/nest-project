import { Controller, Post, Body, Get } from "@nestjs/common";
import { groupEnd } from "console";
import { CustomerService } from "./customer.service";

@Controller('customers')
export class CustomerController{
    constructor(private readonly customerService: CustomerService){

    }

    @Post()
    addCustomer(
        @Body('name') name: string,
        @Body('address') address: string,
        @Body('email') email: string){
            const generatedId =  this.customerService.insertCustomer(name, address, email);
            return { id : generatedId};
        }

    @Get()
    getCustomer(){
        return this.customerService.getCustomer();
    }
}
