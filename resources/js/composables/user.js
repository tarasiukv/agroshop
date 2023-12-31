import {ref, reactive, inject} from "vue";
import {useRouter} from "vue-router";
// import useBackendErrorsHelper from "./backend_errors_helper";
import axios from "axios";

export default function useUsers() {
    // const {checkBackendErrors, getBackendErrors, getBackendFieldValidationErrors, clearBackendFieldValidationErrorByField, backend_errors, backend_field_user_validation_errors} = useBackendErrorsHelper()
    const users = ref([])
    const user = ref({})
    const incoming_user = ref({})
    const outgoing_user = ref({})
    const router = useRouter()
    const user_filters = reactive({});
    const user_page = ref(1);
    const user_page_count = ref(1);
    const store = inject('store')

    /**
     * Next page for pagination
     */
    const nextUserPage = async () => {
        if (user_page.value < user_page_count.value) {
            user_page.value++;
            await getUsers();
        }
    };

    /**
     * Nex page for pagination with saving all users list (for scroll)
     */
    const nextUserPageForScroll = async (e) => {
        // if (e.target.scrollTop === e.target.scrollHeight - e.target.offsetHeight) {
        if ((e.target.scrollTop + 20) > (e.target.scrollHeight - e.target.offsetHeight)) {
            console.log("pageEnd")
            if (user_page <= user_page_count) {
                if (user_page.value < user_page_count.value) {
                    user_page.value++;
                    await getUsers('for_scroll');
                }
            }
        }
    };

    /**
     * Preview page for pagination
     */
    const prevUserPage = () => {
        if (user_page.value > 1) {
            user_page.value--;
            getUsers();
        }
    };

    /**
     * @returns {Promise<void>}
     */
    const getUsers = async () => {
        try {
            // let request_config = {
            //     params: {page: user_page.value, filters: user_filters},
            // }
            const response = await axios.get('/api/users')
            users.value = response.data.data

            // user_page_count.value = response.data.meta ? response.data.meta.last_page : null
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
    const getUser = async (id) => {
        try {
            let request_config = {
            }
            const response = await axios.get('/api/users/' + id, request_config)

            user.value = response.data.data
        } catch (e) {
            console.log(e)
        }
        return false;
    }

    /**
     * @param data
     * @returns {Promise<boolean>}
     */
    const storeUser = async () => {
        // let confirm_response = await swAlertsCustom.alertConfirm('Saving user', 'Save user?', 'Save', 'Cancel');

        // if (confirm_response) {
        console.log('!!!!!!!!  user.value')
        console.log(user.value)
            try {
                let request_config = {
                }

                const response = await axios.post('/api/users', user.value, request_config)
                console.log(user.value)
                // toasterCustom.toastSuccess('New user added successfully');
                // await router.push({name: 'a_users_edit_route', params: {user_id: response.data.data.id}});
                // setTimeout(() => {
                //     location.reload()
                // }, 2000)
            } catch (e) {console.log(e) }
        // }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const updateUser = async (id) => {

        // let confirm_response = await swAlertsCustom.alertConfirm('Updating user', 'Save changes?', 'Save', 'Cancel');
        // if (confirm_response) {
            try {
                let request_config = {
                }

                const response = await axios.patch('/api/users/' + id, user.value, request_config)

                // toasterCustom.toastSuccess('User updated successfully');
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
    const destroyUser = async (id) => {
        if (id !== undefined) {
            // let confirm_response = await swAlertsCustom.alertConfirm('Deleting user', 'Are you sure?', 'Delete', 'Cancel');
            // if (confirm_response) {
                try {
                    let request_config = {
                    }
                    const response = await axios.delete('/api/users/' + id, request_config)

                    // toasterCustom.toastSuccess('User deleted');
                } catch (e) {
                    console.log(e)
                }
            }
        // }

        return false;
    }

    const loginUser = async () => {
        // let confirm_response = await swAlertsCustom.alertConfirm('Saving user', 'Save user?', 'Save', 'Cancel');

        // if (confirm_response) {
        console.log('!!!!!!!!  user.value')
        console.log(user.value)
        try {
            let request_config = {
            }

            const response = await axios.post('/api/auth/login', user.value, request_config)
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                })
            // toasterCustom.toastSuccess('New user added successfully');
            // await router.push({name: 'a_users_edit_route', params: {user_id: response.data.data.id}});
            // setTimeout(() => {
            //     location.reload()
            // }, 2000)
        } catch (e) {console.log(e) }
        // }

        return false;
    }


    return {
        getUser,
        getUsers,
        storeUser,
        updateUser,
        destroyUser,
        nextUserPage,
        prevUserPage,
        nextUserPageForScroll,
        loginUser,
        users,
        user,
        incoming_user,
        outgoing_user,
        user_filters,
        // backend_field_user_validation_errors,
        user_page,
        user_page_count
    }
}
