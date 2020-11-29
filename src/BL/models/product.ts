import { Searchable } from '../search';
import { Customer } from './customer';

export interface ProductDto {
  id: string;
  self: string;
  name: string;
  customers: number;
}

export class Product<T extends string = string>
  implements ProductDto, Searchable<T> {
  id: string;
  self: string;
  name: string;
  customers: number;

  customerList: Customer[];

  constructor() {
    this.id = '';
    this.self = '';
    this.name = '';
    this.customers = 0;

    this.customerList = [];
  }

  isSatisfied(criteria: T): boolean {
    return (
      new RegExp(`.*${criteria}.*`, 'gi').test(this.name) ||
      this.customerList.some((customer: Customer) =>
        customer.isSatisfied(criteria)
      )
    );
  }

  isCustomerListLoaded(): boolean {
    return this.customers > 0 && this.customerList.length > 0;
  }
}
