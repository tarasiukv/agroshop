<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";

const router = useRouter();

const {products, getProducts} = useProducts();

onMounted(async () => {
    getProducts();
})
</script>

<template>
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
</template>

<style scoped>

</style>
