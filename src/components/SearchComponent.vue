<template>
  <div class="search-wrapper relative flex shadow-lg">
    <input
      type="text"
      placeholder="Search"
      class="search--input appearance-none w-full p-3"
      v-model="value"
      v-on:input="$emit('search-changed', value)"
    />
    <span
      class="search--clear font-bold text-2xl text-gray-400"
      v-if="value.length > 0"
      v-on:click="(value = ''), $emit('search-changed', '')"
      >&times;</span
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SearchComponent extends Vue {
  value = '';
}
</script>

<style lang="scss">
.search--clear {
  position: absolute;
  right: 15px;
  top: calc(50% - 15px);
  cursor: pointer;
}
</style>
