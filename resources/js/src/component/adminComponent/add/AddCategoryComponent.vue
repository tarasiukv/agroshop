<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";

const router = useRouter();

const {category, categories, storeCategory, getCategories} = useCategories();

onMounted(async () => {
    getCategories();
})

</script>

<style scoped>

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
    <h4 class="name__page">Add category</h4>
    <form>
        <div class="form-group">
            <label>Name of category</label>
            <input
                type="text"
                class="form-control"
                placeholder="Name of category"
                v-model="category.title"
            >
        </div>
        <label>Select parent category</label>
        <select
            class="form-control"
            v-model="category.parent_category_id"
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
            <label>Name of sub-category</label>
            <input
                type="text"
                class="form-control"
                placeholder="Name of sub-category"

            >
        </div>
        <div class="card-footer">
            <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="storeCategory"
            >Submit
            </button>
        </div>
    </form>
</template>

