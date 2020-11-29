import { Customer, Product } from '@/BL/models';
import { Searchable } from '@/BL/search';
import { State } from './state';

export function filteredProducts(state: State): Product[] {
  if (state.searchCriteria.length === 0) {
    return state.products;
  }

  return state.products.filter((product: Searchable<string>) =>
    product.isSatisfied(state.searchCriteria)
  );
}

export function product(
  state: State
): (productId: string) => Product | undefined {
  return (productId: string) => {
    return state.products.find((product: Product) => product.id === productId);
  };
}

export function customerList(
  state: State,
  getters: any
): (productId: string) => Customer[] | undefined {
  return (productId: string) => {
    const product: Product = getters.product(productId);

    if (!product) {
      return undefined;
    }

    if (state.searchCriteria.length === 0) {
      return product.customerList;
    }

    return product.customerList.filter((customer: Searchable<string>) =>
      customer.isSatisfied(state.searchCriteria)
    );
  };
}
