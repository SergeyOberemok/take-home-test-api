import { environment } from '@/environment/environment';
import axios from 'axios';
import { Customer, CustomerDto } from '../models';

export function fetchCustomers(
  productId: string,
  limit = 10,
  offset = 0
): Promise<Customer[]> {
  return axios
    .get<{ id: string; name: string; customers: CustomerDto[] }>(
      `${environment.api}/products/${productId}`,
      { params: { limit, offset } }
    )
    .then(({ data }) =>
      data.customers.map((customer) => Object.assign(new Customer(), customer))
    );
}
