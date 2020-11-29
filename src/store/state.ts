import { Product } from "@/BL/models";

export interface State {
  searchCriteria: string;
  products: Product[];
  isLoading: boolean;
}