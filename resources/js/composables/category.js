import {ref, reactive, inject} from "vue";
import {useRouter} from "vue-router";
// import useBackendErrorsHelper from "./backend_errors_helper";
import axios from "axios";

export default function useCategories() {
    // const {checkBackendErrors, getBackendErrors, getBackendFieldValidationErrors, clearBackendFieldValidationErrorByField, backend_errors, backend_field_category_validation_errors} = useBackendErrorsHelper()
    const categories = ref([])
    const category = ref({})
    const incoming_category = ref({})
    const outgoing_category = ref({})
    const router = useRouter()
    const category_filters = reactive({});
    const category_page = ref(1);
    const category_page_count = ref(1);
    const store = inject('store')

    /**
     * Next page for pagination
     */
    const nextCategoryPage = async () => {
        if (category_page.value < category_page_count.value) {
            category_page.value++;
            await getCategories();
        }
    };

    /**
     * Nex page for pagination with saving all categories list (for scroll)
     */
    const nextCategoryPageForScroll = async (e) => {
        // if (e.target.scrollTop === e.target.scrollHeight - e.target.offsetHeight) {
        if ((e.target.scrollTop + 20) > (e.target.scrollHeight - e.target.offsetHeight)) {
            console.log("pageEnd")
            if (category_page <= category_page_count) {
                if (category_page.value < category_page_count.value) {
                    category_page.value++;
                    await getCategories('for_scroll');
                }
            }
        }
    };

    /**
     * Preview page for pagination
     */
    const prevCategoryPage = () => {
        if (category_page.value > 1) {
            category_page.value--;
            getCategories();
        }
    };

    /**
     * @returns {Promise<void>}
     */
    const getCategories = async () => {
        try {
            let request_config = {
                params: {page: category_page.value, filters: category_filters},
            }
            const response = await axios.get('/api/categories', request_config)

            categories.value = response.data.data

            category_page_count.value = response.data.meta ? response.data.meta.last_page : null
        } catch (e) { await checkBackendErrors(e) }

        return false;
    }

    /**
     * @param id
     * @param way
     * @returns {Promise<void>}
     */
    const getCategory = async (id) => {
        try {
            let request_config = {
            }
            const response = await axios.get('/api/categories/' + id, request_config)

            category.value = response.data.data
        } catch (e) { await checkBackendErrors(e) }

        return false;
    }

    /**
     * @param data
     * @returns {Promise<boolean>}
     */
    const storeCategory = async () => {

        // if (confirm_response) {
        console.log('!!!!!!!!  category.value')
        console.log(category.value)
            try {
                let request_config = {
                    headers: {
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                }
                const response = await axios.post('/api/categories', category.value, request_config)
            } catch (e) {console.log(e) }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const updateCategory = async (id) => {

            try {
                let request_config = {
                }

                const response = await axios.patch('/api/categories/' + id, category.value, request_config)

            } catch (e) { await checkBackendErrors(e) }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyCategory = async (id) => {
        if (id !== undefined) {
            // let confirm_response = await swAlertsCustom.alertConfirm('Deleting category', 'Are you sure?', 'Delete', 'Cancel');
            // if (confirm_response) {
                try {
                    let request_config = {
                    }
                    const response = await axios.delete('/api/categories/' + id, request_config)

                    // toasterCustom.toastSuccess('Category deleted');
                } catch (e) { await checkBackendErrors(e) }
            }
        // }

        return false;
    }

    return {
        getCategory,
        getCategories,
        storeCategory,
        updateCategory,
        destroyCategory,
        nextCategoryPage,
        prevCategoryPage,
        nextCategoryPageForScroll,
        categories,
        category,
        incoming_category,
        outgoing_category,
        category_filters,
        // backend_field_category_validation_errors,
        category_page,
        category_page_count
    }
}
