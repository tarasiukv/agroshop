<script setup>

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
            <input type="text" class="form-control" placeholder="Name of category">
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    <form>
        <label>Select category</label>
        <select multiple class="form-control">
            <option>category 1</option>
            <option>category 2</option>
            <option>category 3</option>
            <option>category 4</option>
            <option>category 5</option>
            <option>category 6</option>
            <option>category 7</option>
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

