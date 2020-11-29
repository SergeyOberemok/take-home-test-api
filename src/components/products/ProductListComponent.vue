<template>
  <div class="product-list--wrapper w-full flex flex-col md:flex-row">
    <product-component
      v-for="product in products"
      :key="product.id"
      v-bind:product="product"
      class="mr-0 md:mr-4 mb-4 md:mb-0"
    />

    <div v-if="products.length === 0" class="px-2">List is empty</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductComponent from './ProductComponent.vue';
import { Product } from '@/BL/models/index';

@Component({
  components: { ProductComponent }
})
export default class ProductListComponent extends Vue {
  get products(): Product[] {
    return this.$store.getters.filteredProducts;
  }

  get criteria(): string {
    return this.$store.state.searchCriteria;
  }
}
</script>

<style lang="scss"></style>
