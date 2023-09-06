<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import useCategories from "@composable/category.js";

const router = useRouter();

const { product, storeProduct, getProduct} = useProducts();
const {category, categories, getCategories} = useCategories();

onMounted(() => {
    getCategories();
    getProduct(product.id);
});
</script>

<style scoped>
.sidebar__item {
    margin-left: 20px;
    margin-bottom: 35px;
    font-size: 14px;
    color: #252525;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    -webkit-transition: all, 0.3s;
    -moz-transition: all, 0.3s;
    -ms-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
    padding: 5px 0;
    display: block;
}

.name__page {
    margin-bottom: 35px;
}
</style>


<template>
    <div class="sidebar_admin_item">
        <h4>Admin panel</h4>
        <ul>
            <li><a href="/admin/add-categories">Add Categories</a></li>
            <li><a href="/admin/edit-categories">Edit categories</a></li>
            <li><a href="/admin/add-product">Add product</a></li>
            <li><a href="/admin/edit-product">Edit product</a></li>
        </ul>
    </div>
    <h4 class="name__page">Add product</h4>
    <form>
        <div class="form-group">
            <label>Title of product</label>
            <input
                type="text"
                class="form-control"
                placeholder="product.title"
                v-model="product.title"
            >
        </div>
        <label>Select category</label>
        <select
            class="form-control"
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
        <div class="form-group">
            <label>Description</label>
            <textarea
                class="form-control"
                rows="3"
                placeholder="Description"
                v-model="product.description"
            ></textarea>
        </div>
        <div class="form-group">
            <div class="input-group-prepend">
                <label>Price</label>
            </div>
            <input
                type="text"
                class="form-control"
                v-model="product.price"
            >
        </div>
        <!--        <div class="form-group">-->
        <!--            <label for="exampleInputFile">Photo</label>-->
        <!--            <div class="input-group">-->
        <!--                <div class="custom-file">-->
        <!--                    <input-->
        <!--                        type="file"-->
        <!--                        class="custom-file-input"-->
        <!--                        id="exampleInputFile"-->
        <!--                        v-on:change="form.img"-->
        <!--                    >-->
        <!--                    <label class="custom-file-label" for="exampleInputFile">Choose file</label>-->
        <!--                </div>-->
        <!--                <div class="input-group-append">-->
        <!--                    <span class="input-group-text">Upload</span>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="card-footer">
            <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="storeProduct"
            >Submit</button>
        </div>
    </form>
</template>

