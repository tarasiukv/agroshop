<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue";

const selectedCategory = ref();
const categories = ref([]);
const loadCategories = async () => {
    try{
        const { data } = await axios.get('/api/categories');
        categories.value = data.data;
        console.log(data);
    }
    catch (e) {
        console.log(e)
    }
};

onMounted(() => {
    loadCategories();
});
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
        <div class="form-group" >
            <label>Name of category</label>
            <input type="text" class="form-control" placeholder="Name of category">
        </div>
        <label>Select category</label>
        <select
            class="form-control"
            v-model="selectedCategory"
        >
            <option v-for="category in categories" :key="category.id">{{ category.title }}</option>
        </select>
        <div class="form-group">
            <label>Name of sub-category</label>
            <input type="text" class="form-control" placeholder="Name of sub-category">
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

