import HomeComponent from "@component/pages/HomeComponent.vue";
import ShopComponent from "@component/pages/shop/ShopComponent.vue";
import ContactComponent from "@component/pages/ContactComponent.vue";
import CartComponent from "@component/pages/CartComponent.vue";
import AdminComponent from "@component/admin/AdminComponent.vue";
import AddCategoryComponent from "@component/admin/categories/AddCategoryComponent.vue";
import EditCategoryComponent from "@component/admin/categories/EditCategoryComponent.vue";
import AddProductComponent from "@component/admin/products/AddProductComponent.vue";
import EditProductComponent from "@component/admin/products/EditProductComponent.vue";
import ProductDetailComponent from "@component/pages/shop/ProductDetailComponent.vue";
import LogInComponent from "@component/users/LogInComponent.vue";
import RegistrationComponent from "@component/users/RegistrationComponent.vue";

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
        path: '/shop/:id',
        component: ProductDetailComponent
    },
    {
        path: '/login',
        component: LogInComponent
    },
    {
        path: '/registration',
        component: RegistrationComponent
    },
    {
        path: '/admin',
        component: AdminComponent
    },
    {
        path: '/admin/add-category',
        component: AddCategoryComponent
    },
    {
        path: '/admin/edit-category',
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
