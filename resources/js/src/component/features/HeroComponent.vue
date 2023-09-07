<script setup>
    import { computed, onMounted} from "vue";
    import {useStore} from "vuex";

    import {useRouter} from "vue-router";
    import useCategories from "@composable/category.js";

    const router = useRouter();

    const {category, categories, getCategories} = useCategories();


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
    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul style="display: none">
                            <li
                                v-for="category_item in categories"
                                :key="category_item.id"
                            >
                                <a href="#">{{ category_item.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
<!--                                <div class="hero__search__categories">-->
<!--                                    All Categories-->
<!--                                    <span class="arrow_carrot-down"></span>-->
<!--                                </div>-->
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
