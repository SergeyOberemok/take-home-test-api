<template>
  <div class="customer--wrapper">
    <div class="container p-2 flex flex-col">
      <div class="flex flex-row mb-2">
        <div class="customer--avatar w-10 h-10 flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            v-bind:src="customer.avatar"
            v-bind:alt="customer.name"
          />
        </div>

        <div class="flex flex-col mx-3">
          <div class="customer--fio text-lg">
            <span
              :inner-html.prop="customer.name | highlight(searchCriteria)"
            ></span>
          </div>

          <div class="text-sm">
            <div class="customer--role inline">
              <span
                :inner-html.prop="
                  customer.job.title | highlight(searchCriteria)
                "
              ></span>
            </div>

            <div class="customer--company inline text-gray-500">
              <span
                :inner-html.prop="
                  customer.job.company | highlight(searchCriteria)
                "
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="customer--quotes border-l-4 border-gray-300 italic text-gray-700 text-sm pl-5"
      >
        <blockquote
          :inner-html.prop="customer.quote | highlight(searchCriteria)"
        >
          {{ customer.quote }}
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Customer } from '@/BL/models';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Product extends Vue {
  @Prop({ required: true })
  customer!: Customer;

  get searchCriteria(): string {
    return this.$store.state.searchCriteria;
  }
}
</script>

<style lang="scss">
.customer--company {
  display: flex;
  &:before {
    content: ' @ ';
  }
}
</style>
