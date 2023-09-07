<script setup>

</script>

<template>
    <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title"><small>Log In</small></h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form id="quickForm">
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group mb-0">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="terms" class="custom-control-input" id="exampleCheck1">
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="site-btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>
