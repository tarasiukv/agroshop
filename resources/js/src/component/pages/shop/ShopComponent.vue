<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import SidebarComponent from "@component/features/SidebarComponent.vue";
import HeroComponent from "@component/features/HeroComponent.vue";
import FilterItemComponent from "@component/features/FilterItemComponent.vue";
import ShopProductComponent from "@component/pages/shop/ShopProductComponent.vue";

const router = useRouter();

const {products, getProducts} = useProducts();

onMounted(async () => {
  getProducts();
})
</script>

<template>
  <HeroComponent/>
  <!-- Breadcrumb Section Begin -->
  <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Каталог</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Breadcrumb Section End -->

  <!-- Product Section Begin -->
  <section class="product spad">
    <div class="container">
      <div class="row">
        <SidebarComponent/>
        <div class="col-lg-9 col-md-7">
          <FilterItemComponent/>
          <div class="row">
            <ShopProductComponent
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
          </div>
          <div class="product__pagination">
            <a href="#">1</a>
            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
