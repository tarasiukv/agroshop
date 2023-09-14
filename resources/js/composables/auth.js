import {inject} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default function useAuth() {
    const router = useRouter()
    const store = inject('store')

    const loginUser = async () => {
        try {
            let request_config = {
            }

            const response = await axios.post('/api/auth/login', null, request_config)
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token);
                })
        } catch (e) {console.log(e) }
        // }

        return false;
    }

    const logOutUser = async () => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            }

            const response = await axios.post('/api/auth/logout', null, request_config)
                .then(response => {
                    localStorage.removeItem('access_token');
                    router.push('/').then(() => {
                        window.location.reload()
                    })
                })
        } catch (e) {console.log(e) }

        return false;
    }


    return {
        loginUser,
        logOutUser,
    }
}
