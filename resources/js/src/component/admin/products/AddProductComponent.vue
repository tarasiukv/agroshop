<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import useCategories from "@composable/category.js";
import SidebarAdminComponent from "@component/admin/SidebarAdminComponent.vue";

const router = useRouter();

const {product, storeProduct} = useProducts();
const {categories, getCategories} = useCategories();

onMounted(() => {
    getCategories();
});
</script>

<template>
    <section class="blog-details spad">
        <div class="container">
            <div class="row">
                <SidebarAdminComponent />
                <div class="col-lg-8 col-md-7 order-md-1 order-1">
                    <div class="blog__details__text">
                        <div class="container">
                            <div class="checkout__form">
                                <h4>Add Product</h4>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6">
                                            <div class="row">
                                                <div class="col-lg-10">
                                                    <div class="checkout__input">
                                                        <p>Title<span>*</span></p>
                                                        <input
                                                            type="text"
                                                            placeholder="Title"
                                                            v-model="product.title"
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6">
                                            <div class="row">
                                                <div class="col-lg-10">
                                                    <div class="checkout__input">
                                                        <p>Category</p>
                                                        <select class="checkout__input select"
                                                                v-model="product.category_id"
                                                        >
                                                            <option
                                                                v-for="category_item in categories"
                                                                :key="category_item.id"
                                                                :value="category_item.id"
                                                            >
                                                                {{ category_item.title }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6">
                                            <div class="row">
                                                <div class="col-lg-10">
                                                    <div class="checkout__input">
                                                        <p>Price<span>*</span></p>
                                                        <input
                                                            type="text"
                                                            placeholder="Price"
                                                            v-model="product.title"
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6">
                                            <div class="row">
                                                <div class="col-lg-10">
                                                    <div class="checkout__input">
                                                        <p>Price<span>*</span></p>
                                                        <textarea
                                                            rows="4"
                                                            placeholder="Description"
                                                            v-model="product.description"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 text-left">
                                            <button
                                                type="submit"
                                                class="site-btn"
                                                @click.prevent="storeProduct"
                                            >
                                                ADD PRODUCT
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-details{
    padding-top: 0px;
}
</style>
