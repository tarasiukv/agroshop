<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import useCategories from "@composable/category.js";

const router = useRouter();

const {product, storeProduct} = useProducts();
const {categories, getCategories} = useCategories();

onMounted(() => {
    getCategories();
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

.form-group {
    float: none;
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
                v-model="product.title"
            >
        </div>
        <div class="form-group">
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
        </div>
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
        <div class="col-md-6">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">General</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="inputName">Project Name</label>
                        <input type="text" id="inputName" class="form-control" value="AdminLTE">
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Project Description</label>
                        <textarea
                            id="inputDescription"
                            class="form-control"
                            rows="4"
                            placeholder="Description"
                            v-model="product.description"
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputStatus">Status</label>
                        <select
                            id="inputStatus"
                            class="form-control custom-select"
                            v-model="product.category_id"
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
                    <div class="form-group">
                        <label for="inputClientCompany">Price</label>
                        <input
                            type="text"
                            id="inputClientCompany"
                            class="form-control"
                            v-model="product.price"
                        >
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <div class="row">
            <div class="col-12">
                <a href="#" class="btn btn-secondary">Cancel</a>
                <input
                    type="submit"
                    @click.prevent="storeProduct"
                    class="btn btn-success float-right">
            </div>
        </div>
    </form>
</template>

