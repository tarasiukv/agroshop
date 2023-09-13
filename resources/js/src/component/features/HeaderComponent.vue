<script setup>
import {defineComponent, computed, onMounted} from "vue";
import {useStore} from "vuex";

import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";

const router = useRouter();

const {category, categories, storeCategory, getCategories} = useCategories();


const links = [
    {
        title: "Home",
        href: '/',
    },
    {
        title: "Shop",
        href: '/shop',
        // subLinks: [
        //     {
        //         title: "Seed",
        //         href: '/seed',
        //     },
        //     {
        //         title: 'Means of protection',
        //         href: '/meansOfProtection',
        //     },
        //     {
        //         title: 'Fertilizers and soils',
        //         href: '/fertilizersAndSoils'
        //     }
        // ]
    },
    {
        title: "Contact",
        href: '/contact',
    },
]

const store = useStore();

const counter = computed(() => {
    return store.state.count;
})

const myItem = '0';
const cartItem = '0';

const increment = () => {
    store.commit('increment')
}

onMounted(() => {
    getCategories();
})
</script>

<template>
    <!-- Humberger Begin -->
    <div class="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
            <a href="/public"><img src="img/logo.png" alt=""></a>
        </div>
        <div class="humberger__menu__cart">
            <ul>
                <li><a href="#"><i class="fa fa-heart"></i> <span>{{ myItem }}</span></a></li>
                <li><a href="/cart"><i class="fa fa-shopping-bag"></i> <span>{{ cartItem }}</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>{{ counter }}</span></div>
        </div>
        <div class="humberger__menu__widget">
            <div class="header__top__right__language">
                <img src="img/language.png" alt="">
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Ukraine</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div class="header__top__right__auth">
                <a href="/login"><i class="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
            <ul>
                <li v-for="link in links">
                    <router-link :to="link.href">{{ link.title }}</router-link>
                    <ul v-if="link.subLinks" class="header__menu__dropdown">
                        <li v-for="subLink in link.subLinks" :key="subLink.href">
                            <router-link :to="subLink.href">{{ subLink.title }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-telegram"></i></a>
        </div>
        <div class="humberger__menu__contact">
            <ul>
                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
    <!-- Humberger End -->

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
                                <a href="/login"><i class="fa fa-user"></i> Login</a>
                                    <ul>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/registration">Registation</a></li>
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
                            <li v-for="link in links">
                                <router-link :to="link.href">{{ link.title }}</router-link>
                                <ul v-if="link.subLinks" class="header__menu__dropdown">
                                    <li v-for="subLink in link.subLinks" :key="subLink.href">
                                        <router-link :to="subLink.href">{{ subLink.title }}</router-link>
                                    </li>
                                </ul>
                            </li>
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

                        <button @click="increment"></button>

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
