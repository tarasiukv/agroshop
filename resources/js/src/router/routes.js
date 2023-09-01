import HomeComponent from "../component/pages/HomeComponent.vue";
import ShopComponent from "../component/pages/ShopComponent.vue";
import ContactComponent from "../component/pages/ContactComponent.vue";

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/shop', component: ShopComponent },
    { path: '/contact', component: ContactComponent },
];

export default routes;
