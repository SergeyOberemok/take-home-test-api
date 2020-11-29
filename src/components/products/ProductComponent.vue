<template>
  <div class="product--wrapper">
    <div class="card border rounded-md shadow bg-white overflow-hidden">
      <div class="title bg-gray-50 p-2 border-b-2 border-gray-200">
        <span
          :inner-html.prop="product.name | highlight(searchCriteria)"
        ></span>
      </div>

      <div class="content">
        <customer-list-component v-bind:product-id="product.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/BL/models';
import { Component, Vue, Prop } from 'vue-property-decorator';
import CustomerListComponent from '../customers/CustomerListComponent.vue';

@Component({
  components: { CustomerListComponent }
})
export default class ProductComponent extends Vue {
  @Prop({ required: true })
  product!: Product;

  created(): void {
    if (!this.product.isCustomerListLoaded()) {
      this.$store.commit('loadCustomers', this.product.id);
    }
  }

  get searchCriteria(): string {
    return this.$store.state.searchCriteria;
  }
}
</script>

<style lang="scss"></style>
