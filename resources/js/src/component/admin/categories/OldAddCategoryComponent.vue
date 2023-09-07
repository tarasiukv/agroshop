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
        <div class="col-md-6">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Add Product</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="form-group">
                        <label for="inputName">Title</label>
                        <input
                            type="text"
                            id="inputName"
                            class="form-control"
                            placeholder="Name of category"
                            v-model="category.title"
                        >
                    </div>
                    <div class="form-group">
                        <label for="inputStatus">Category</label>
                        <select
                            id="inputStatus"
                            class="form-control custom-select"
                            v-model="category.parent_category_id"
                        >
                            <option
                                disabled
                                v-for="category_item in categories"
                                :key="category_item.id"
                                :value="category_item.id"
                            >
                                {{ category_item.title }}
                            </option>
                            <option>On Hold</option>
                            <option>Canceled</option>
                            <option selected>Success</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="#" class="cancel-btn">Cancel</a>
                        <button
                            type="submit"
                            class="site-btn"
                            @click.prevent="storeCategory"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </form>
</template>

