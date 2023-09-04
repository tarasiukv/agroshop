import HomeComponent from "../component/pages/HomeComponent.vue";
import ShopComponent from "../component/pages/ShopComponent.vue";
import ContactComponent from "../component/pages/ContactComponent.vue";
import CartComponent from "../component/pages/CartComponent.vue";
import AdminComponent from "../component/adminComponent/AdminComponent.vue";
import AddCategoryComponent from "../component/adminComponent/add/AddCategoryComponent.vue";
import EditCategoryComponent from "../component/adminComponent/edit/EditCategoryComponent.vue";
import AddProductComponent from "../component/adminComponent/add/AddProductComponent.vue";
import EditProductComponent from "../component/adminComponent/edit/EditProductComponent.vue";

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
    {
        path: '/admin',
        component: AdminComponent
    },
    {
        path: '/admin/add-categories',
        component: AddCategoryComponent
    },
    {
        path: '/admin/edit-categories',
        component: EditCategoryComponent
    },
    {
        path: '/admin/add-product',
        component: AddProductComponent
    },
    {
        path: '/admin/edit-product',
        component: EditProductComponent
    },



];

export default routes;
