<script setup>

</script>

<template>
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <h4>Log In</h4>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="checkout__input">
                                <p>Login</p>
                                <input type="email" placeholder="E-mail" class="form-control checkout__input__add">
                            </div>
                            <div class="checkout__input">
                                <p>Password</p>
                                <input type="password" placeholder="Password" class="form-control checkout__input__add">
                            </div>
                            <div class="checkout__input">
                            <button type="submit" class="site-btn">LOG IN</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h6><span class="fa fa-user"></span> Haven`t account? <a href="/registration">Click here</a>
                </h6>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
