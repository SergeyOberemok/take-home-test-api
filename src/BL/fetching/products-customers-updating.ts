import { environment } from '@/environment/environment';
import { Product } from '../models';
import { fetchCustomers } from './fetch-customers';
import { fetchProducts } from './fetch-products';

const timer = function(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const productsCustomersSource = async function*() {
  while (true) {
    await timer(environment.updateTime);

    const products: Product[] = await fetchProducts();

    for await (const product of products) {
      if (product.customers > 0) {
        product.customerList = await fetchCustomers(product.id);
      }
    }

    yield products;
  }
};

export const productsStream = productsCustomersSource();
