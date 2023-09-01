<script>
import {defineComponent} from "vue";
import HeaderComponent from "./component/HeaderComponent.vue";
import FooterComponent from "./component/FooterComponent.vue";
export default defineComponent({
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    return {
    }
  }
});
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped>

</style>
