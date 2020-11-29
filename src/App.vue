<template>
  <div id="app" class="pt-16 md:pt-0">
    <header class="fixed top-0 w-full md:static">
      <search-component class="mb-3" v-on:search-changed="applySearch" />
    </header>

    <main>
      <div class="container mx-auto md:mx-0 px-4">
        <product-list-component />
      </div>
    </main>

    <div
      v-if="isLoading"
      class="fixed inset-0 transition-opacity flex justify-center items-center"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="loading font-bold text-white text-3xl z-50">Loading...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchComponent from './components/SearchComponent.vue';
import ProductListComponent from './components/products/ProductListComponent.vue';
import { environment } from './environment/environment';
import { throttle } from 'lodash-es';

@Component({
  components: {
    SearchComponent,
    ProductListComponent
  }
})
export default class App extends Vue {
  applySearch(criteria: string): void {
    this.$store.commit('changeSearch', criteria);
  }

  created(): void {
    this.$store.commit('loadProducts');

    if (environment.isUpdatingOn) {
      this.$store.commit('updatedProducts');
    }
  }

  mounted(): void {
    window.addEventListener(
      'scroll',
      throttle(() => {
        if (
          window.scrollY > 100 &&
          window.scrollY ===
            document.body.scrollHeight - document.body.offsetHeight
        ) {
          this.$store.commit('loadMissingCustomers');
        }
      }, 1000)
    );
  }

  get isLoading(): boolean {
    return this.$store.state.isLoading;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loading {
  text-shadow: 1px 1px lighten(black, 25);
}
</style>
