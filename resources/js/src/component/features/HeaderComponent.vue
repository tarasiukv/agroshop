<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";
import useAuth from "@composable/auth.js";
import HamburgerMenu from "@component/features/HamburgerMenu.vue";

const router = useRouter();
const {category, categories, getCategories} = useCategories();
const { loginUser, logOutUser } = useAuth();


onMounted(() => {
    getCategories();
})
</script>

<template>
    <HamburgerMenu />
    <!-- Header Section Begin -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> hello@mail.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-telegram"></i></a>
                            </div>
                            <div class="header__top__right__language">
                                <img src="img/language.png" alt="">
                                <div>English</div>
                                <ul>
                                    <li><a href="#">Ukraine</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__language">
                                <a href="/login"><i class="fa fa-user"></i>Вхід</a>
                                    <ul>
                                        <li><a href="#" @click="logOutUser">Вихід</a></li>
                                        <li><a href="/registration">Реєстрація</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                      <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/shop">Каталог</a></li>
                        <li><a href="/cart">Корзина</a></li>
                        <li><a href="/admin">admin</a></li>
                      </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="/cart"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>{{ counter }}</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    color: #000000;
}
</style>
