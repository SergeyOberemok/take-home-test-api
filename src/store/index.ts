import Vue from 'vue';
import Vuex from 'vuex';
import { customerList, filteredProducts, product } from './getters';
import {
  changeSearch,
  loadCustomers,
  loadMissingCustomers,
  loadProducts,
  updatedProducts
} from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchCriteria: '',
    products: [],
    isLoading: false
  },
  getters: {
    filteredProducts,
    product,
    customerList
  },
  mutations: {
    changeSearch,
    loadProducts,
    loadCustomers,
    loadMissingCustomers,
    updatedProducts
  },
  actions: {},
  modules: {}
});
