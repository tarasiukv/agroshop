<script setup>

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
            <input type="text" class="form-control" placeholder="Title of product">
        </div>
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
        <label>Select sub-category</label>
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
            <label>Description</label>
            <textarea class="form-control" rows="3" placeholder="Description"></textarea>
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
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

