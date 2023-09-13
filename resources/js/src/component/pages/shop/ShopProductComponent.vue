<script setup>
import {defineProps} from "vue";

const props = defineProps({
    product: Object,
});
</script>

<template>
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" :style='{ backgroundImage: `url(storage/${product.file_path})` }'>
                    <ul class="product__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6><a :href="'/shop/' + product.id">{{ product.title }}</a></h6>
                    <h5>{{ product.price }}</h5>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>
