<script>
    import axios from 'axios';
    import {onMounted, ref} from "vue";
    import {useStore} from "vuex";

    export default {
        components: {},
            data: () => ({
                form: {
                    title: "",
                    description: "",
                    category: "",
                    img: ""
                }
            }),
        methods: {
            store() {
                axios.post('/api/products', form.data)
            }
        }
    }
</script>

<template>
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-section set-bg" data-setbg="@img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Vegetable’s Package</h2>
                        <div class="breadcrumb__option">
                            <a href="/public">Home</a>
                            <a href="/shop">Vegetables</a>
                            <span>Vegetable’s Package</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->
</template>

<style scoped>

</style>
