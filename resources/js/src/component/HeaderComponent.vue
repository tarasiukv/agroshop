<script setup>
import {defineComponent, computed, onMounted} from "vue";
import {useStore} from "vuex";


const links = [
    {
        title: "Home",
        href: '/',
    },
    {
        title: "Shop",
        href: '/shop',
        subLinks: [
            {
                title: "Seed",
                href: '/seed',
            },
            {
                title: 'Means of protection',
                href: '/meansOfProtection',
            },
            {
                title: 'Fertilizers and soils',
                href: '/fertilizersAndSoils'
            }
        ]
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
document.querySelector('.hero__categories__all').addEventListener('click', function() {
        console.log('435654643643vgerhtye5h6h43643');
        var categoriesList = document.querySelector('.hero__categories ul');
        if (categoriesList.style.display === 'none' || categoriesList.style.display === '') {
            categoriesList.style.display = 'block';
        } else {
            categoriesList.style.display = 'none';
        }
    });
})
</script>

<style scoped>

</style>


<template>
    <!-- Page Preloder-->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Humberger Begin -->
    <div class="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt=""></a>
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
                <a href="#"><i class="fa fa-user"></i> Login</a>
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
                                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
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
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Ukraine</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#"><i class="fa fa-user"></i> Login</a>
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
    <!-- Header Section End -->
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li v-for="subLink in links.subLinks" :key="subLink.href">
                                <router-link :to="subLink.href">{{ subLink.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+380 (00) 000 0000</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

