<template>
  <div class="customer-list--wrapper flex flex-col pt-2">
    <customer-component
      v-for="(customer, i) in customers"
      :key="customer.id"
      v-bind:customer="customer"
      class="border-gray-200"
      v-bind:class="{
        'mb-2': i < customers.length - 1,
        'border-b': i < customers.length - 1
      }"
    />

    <div v-if="customers.length === 0" class="px-2">List is empty</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CustomerComponent from './CustomerComponent.vue';
import { Customer } from '@/BL/models';

@Component({
  components: {
    CustomerComponent
  }
})
export default class CustomerList extends Vue {
  @Prop({ required: true })
  productId!: string;

  get customers(): Customer[] {
    return this.$store.getters.customerList(this.productId);
  }
}
</script>

<style lang="scss"></style>
