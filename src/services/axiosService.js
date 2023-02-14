import axios from "axios";
import {baseURL} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const axiosService = axios.create({baseURL});

const history = createBrowserHistory();

axiosService.interceptors.request.use((config) => {
    if (authService.isAuth()) {
        const access = authService.getAccessToken()
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

let isRefresh = false
axiosService.interceptors.response.use((config) => {
    return config
},
    async (e) => {
    const refresh = authService.getRefreshToken()

        if (e.response?.status === 401 && refresh && !isRefresh){
            isRefresh = true

            try {
                await authService.refresh(refresh)
            } catch (e) {
                authService.deleteTokens()
                history.replace('login?session=true')
            }
            isRefresh = false;
            return axiosService(e.config)
        }
        return Promise.reject(e)
    })

export {
    axiosService,
    history
}