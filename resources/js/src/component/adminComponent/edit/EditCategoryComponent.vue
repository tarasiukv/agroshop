<script setup>

</script>

<style scoped>
.sidebar__item {
    margin-left: 20px;
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

    <h4 class="name__page">Edit category</h4>
    <form>
        <label>Choose category</label>
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
            <label>New name of category</label>
            <input type="text" class="form-control" placeholder="Name of sub-category">
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    <form>
        <label>Choose sub-category</label>
        <select multiple class="form-control">
            <option>sub-category 1</option>
            <option>sub-category 2</option>
            <option>sub-category 3</option>
            <option>sub-category 4</option>
            <option>sub-category 5</option>
            <option>sub-category 6</option>
            <option>sub-category 7</option>
        </select>
        <div class="form-group">
            <label>New name of sub-category</label>
            <input type="text" class="form-control" placeholder="Name of sub-category">
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

