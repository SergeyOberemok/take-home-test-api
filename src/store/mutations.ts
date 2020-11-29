import { fetchCustomers, fetchProducts, productsStream } from '@/BL/fetching';
import { Customer, Product } from '@/BL/models';
import { environment } from '@/environment/environment';
import { State } from './state';

export function changeSearch(state: State, criteria: string): void {
  state.searchCriteria = criteria;
}

export function loadProducts(state: State): void {
  state.isLoading = true;

  fetchProducts().then(
    (products: Product[]) => (
      (state.products = products), (state.isLoading = false)
    )
  );
}

export function loadCustomers(state: State, productId: string): void {
  const product = state.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return;
  }

  state.isLoading = true;

  fetchCustomers(product.id).then(
    (customers: Customer[]) => (
      (product.customerList = customers), (state.isLoading = false)
    )
  );
}

export function loadMissingCustomers(state: State) {
  const requests = state.products.map((product: Product) => {
    const offset = product.customerList.length;
    const limit = Math.min(
      product.customers - offset,
      environment.fetchingLimit
    );

    if (limit <= 0) {
      return;
    }

    return fetchCustomers(product.id, limit, offset).then(
      (customers: Customer[]) => {
        product.customerList = [
          ...product.customerList
            .concat(customers)
            .reduce(
              (acc: Map<number, Customer>, customer: Customer) =>
                acc.set(customer.id, customer),
              new Map()
            )
            .values()
        ];
      }
    );
  });

  state.isLoading = true;

  Promise.all(requests).then(() => (state.isLoading = false));
}

export async function updatedProducts(state: State) {
  for await (const products of productsStream) {
    state.products = products;
  }
}
