import HomeComponent from "../component/pages/HomeComponent.vue";
import ShopComponent from "../component/pages/ShopComponent.vue";
import ContactComponent from "../component/pages/ContactComponent.vue";
import CartComponent from "../component/pages/CartComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/shop',
        component: ShopComponent
    },
    {
        path: '/contact',
        component: ContactComponent
    },
    {
        path: '/cart',
        component: CartComponent
    },

];

export default routes;
