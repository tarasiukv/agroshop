<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();

const form = ref({
    title: '',
    description: '',
    category: '',
    // img: '',
});

const store = async () => {
    try {
        await axios.post('/api/products', form, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => {
                if (res.data.status) {
                    router.push('/shop/' + res.data.post.id)
                }

            });
        // Ви можете додати обробку успішного збереження даних тут, наприклад, редірект або повідомлення про успішне збереження.
    } catch (error) {
        // Обробка помилок, якщо збереження даних не вдалося.
        console.error('Помилка при збереженні даних:', error);
    }
};

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
                placeholder="Title of product"
                v-model="form.title"
            >
        </div>
        <label>Select category</label>
        <select
            class="form-control"
            v-model="form.category"
        >
            <option v-for="category in categories" :key="category.id">{{ category.title }}</option>
        </select>
        <div class="form-group">
            <label>Description</label>
            <textarea
                class="form-control"
                rows="3"
                placeholder="Description"
                v-model="form.description"
            ></textarea>
        </div>
        <div class="form-group">
            <label for="exampleInputFile">Photo</label>
            <div class="input-group">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="exampleInputFile">
                    <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text">Upload</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="store"
            >Submit</button>
        </div>
    </form>
</template>

