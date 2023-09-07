<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useUsers from "@composable/user.js";

const router = useRouter();

const {user, storeUser} = useUsers();

onMounted(async () => {
    getCategories();
})

</script>

<template>
    <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <h4>Registration</h4>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Fist Name<span>*</span></p>
                                        <input
                                            type="text"
                                            v-model="user.name"
                                        >
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Last Name<span>*</span></p>
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Password<span>*</span></p>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="form-control checkout__input__add"
                                    v-model="user.password"
                                >
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    class="form-control checkout__input__add"
                                    v-model="user.password_confirm"
                                >
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text" class="form-control checkout__input__add">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input
                                            type="email"
                                            class="form-control checkout__input__add"
                                            v-model="user.email"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="site-btn"
                        @click.prevent="storeUser"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>
            </div>
        </div>
    </section>
    <!-- Checkout Section End -->
</template>

<style scoped>
section.checkout {
    padding-top: 0px;
}
</style>
