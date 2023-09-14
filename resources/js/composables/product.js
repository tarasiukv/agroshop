import {ref, reactive, inject} from "vue";
import {useRouter} from "vue-router";
// import useBackendErrorsHelper from "./backend_errors_helper";
import axios from "axios";

export default function useProducts() {
    // const {checkBackendErrors, getBackendErrors, getBackendFieldValidationErrors, clearBackendFieldValidationErrorByField, backend_errors, backend_field_product_validation_errors} = useBackendErrorsHelper()
    const products = ref([])
    const product = ref({})
    const incoming_product = ref({})
    const outgoing_product = ref({})
    const router = useRouter()
    const product_filters = reactive({});
    const product_page = ref(1);
    const product_page_count = ref(1);
    const store = inject('store')

    /**
     * Next page for pagination
     */
    const nextProductPage = async () => {
        if (product_page.value < product_page_count.value) {
            product_page.value++;
            await getProducts();
        }
    };

    /**
     * Nex page for pagination with saving all products list (for scroll)
     */
    const nextProductPageForScroll = async (e) => {
        // if (e.target.scrollTop === e.target.scrollHeight - e.target.offsetHeight) {
        if ((e.target.scrollTop + 20) > (e.target.scrollHeight - e.target.offsetHeight)) {
            console.log("pageEnd")
            if (product_page <= product_page_count) {
                if (product_page.value < product_page_count.value) {
                    product_page.value++;
                    await getProducts('for_scroll');
                }
            }
        }
    };

    /**
     * Preview page for pagination
     */
    const prevProductPage = () => {
        if (product_page.value > 1) {
            product_page.value--;
            getProducts();
        }
    };

    /**
     * @returns {Promise<void>}
     */
    const getProducts = async () => {
        try {
            // let request_config = {
            //     params: {page: product_page.value, filters: product_filters},
            // }
            const response = await axios.get('/api/products')
            products.value = response.data.data

            // product_page_count.value = response.data.meta ? response.data.meta.last_page : null
        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @param way
     * @returns {Promise<void>}
     */
    const getProduct = async (id) => {
        try {
            let request_config = {}
            const response = await axios.get('/api/products/' + id, request_config)

            product.value = response.data.data
        } catch (e) {
            console.log(e)
        }
        return false;
    }

    /**
     * @param formData
     * @returns {Promise<boolean>}
     */
    const storeProduct = async (formData) => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            };
            const response = await axios.post('/api/products', formData, request_config)

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const updateProduct = async (id) => {

        // let confirm_response = await swAlertsCustom.alertConfirm('Updating product', 'Save changes?', 'Save', 'Cancel');
        // if (confirm_response) {
        try {
            let request_config = {}

            const response = await axios.patch('/api/products/' + id, product.value, request_config)

            // toasterCustom.toastSuccess('Product updated successfully');
        } catch (e) {
            console.log(e)
        }
        // }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyProduct = async (id) => {
        if (id !== undefined) {
            // let confirm_response = await swAlertsCustom.alertConfirm('Deleting product', 'Are you sure?', 'Delete', 'Cancel');
            // if (confirm_response) {
            try {
                let request_config = {}
                const response = await axios.delete('/api/products/' + id, request_config)

                // toasterCustom.toastSuccess('Product deleted');
            } catch (e) {
                console.log(e)
            }
        }
        // }

        return false;
    }

    return {
        getProduct,
        getProducts,
        storeProduct,
        updateProduct,
        destroyProduct,
        nextProductPage,
        prevProductPage,
        nextProductPageForScroll,
        products,
        product,
        incoming_product,
        outgoing_product,
        product_filters,
        // backend_field_product_validation_errors,
        product_page,
        product_page_count
    }
}
