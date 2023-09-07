<script setup>
import { defineProps } from "vue";

// Отримуємо доступ до props
const props = defineProps({
    id: Number,
    title: String,
    price: String,
});

</script>

<template>
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
            <ul class="product__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a :href="'/shop/' + props.id">{{ props.title }}</a></h6>
            <h5>{{ props.price }}</h5>
        </div>
    </div>
</template>

<style scoped>

</style>
