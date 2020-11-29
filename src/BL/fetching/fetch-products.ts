import { environment } from '@/environment/environment';
import axios from 'axios';
import { Product, ProductDto } from '../models';

export function fetchProducts(): Promise<Product[]> {
  return axios
    .get<ProductDto[]>(`${environment.api}/products`)
    .then(({ data }) =>
      data.map((product) => Object.assign(new Product(), product))
    );
}
