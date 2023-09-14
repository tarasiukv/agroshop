<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";

const router = useRouter();

const {category, categories, getCategories} = useCategories();

onMounted(async () => {
    getCategories();
})

</script>

<template>
    <div class="col-lg-3 col-md-5">
        <div class="sidebar">
            <div class="sidebar__item">
                <h4>Категорії</h4>
                <ul>
                    <li
                        v-for="category_item in categories"
                        :key="category_item.id"
                    >
                        <a href="#">{{ category_item.title }}</a>
                    </li>
                </ul>
            </div>
            <div class="sidebar__item">
                <h4>Ціна</h4>
                <div class="price-range-wrap">
                    <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                         data-min="10" data-max="540">
                        <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div class="range-slider">
                        <div class="price-input">
                            <input type="text" id="minamount">
                            <input type="text" id="maxamount">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
