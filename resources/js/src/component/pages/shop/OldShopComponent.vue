<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import SidebarComponent from "@component/features/SidebarComponent.vue";
import ShopProductComponent from "@component/pages/shop/ShopProductComponent.vue";
import BreadcrumbComponent from "../../features/BreadcrumbComponent.vue"

const router = useRouter();

const {products, getProducts} = useProducts();

onMounted(async () => {
    getProducts();
})
</script>

<template>
    <BreadcrumbComponent/>
    <!-- Product Section Begin -->
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <SidebarComponent/>
                </div>
                <div class="col-lg-9 col-md-7">
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="filter__found">
                                    <h6><span>{{ products.length }}</span> Products found</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-3">
                                <div class="filter__option">
                                    <span class="icon_grid-2x2"></span>
                                    <span class="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ShopProductComponent
                        v-for="product in products"
                        :key="product.id"
                        :id="product.id"
                        :title="product.title"
                        :price="product.price"
                    />
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Section End -->
</template>

<style scoped>

</style>
