import axios from "axios"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase";

const getFirebaseToken = async () => {   
    const currentUser = auth.currentUser;
    if (currentUser) return currentUser.getIdToken();

    const hasRememberAccount = localStorage.getItem('firebaseRememberAccount');
    if (!hasRememberAccount) return null;

    return (
        new Promise((resolve, reject) => {
            const waitTimer = setTimeout(() => {
                reject(null)
            }, 10000)

            const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
                if (!user) return;
                const token = await user.getIdToken()
                resolve(token)
                clearTimeout(waitTimer)
            })
            unregisterAuthObserver()
        })
    )
}
/*-------------------------------------------------------*/

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

/*-------------------------------------------------------*/

axiosClient.interceptors.request.use(async (config) => {
    const token = await getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (erorr) {
        return Promise.reject(erorr)
    }
)