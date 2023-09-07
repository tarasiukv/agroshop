<script>
import {defineComponent} from "vue";
import HeaderComponent from "./component/HeaderComponent.vue";
import FooterComponent from "./component/FooterComponent.vue";
import LoaderComponent from "./component/features/LoaderComponent.vue";

export default defineComponent({
    components: {
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        return {}
    }
});
</script>

<template>
    <LoaderComponent />
    <HeaderComponent

    />
    <main class="main">
        <router-view/>
    </main>
    <FooterComponent/>
</template>

<style scoped>

</style>
