import {axiosService} from "./axiosService";
import {urls} from "../configs";

const accessToken =  'access'
const refreshToken = 'refresh'

const authService = {
    login: async function (data) {
        const response = await axiosService.post(urls.auth.login, data)

        if (response.status === 200) {
            this.setTokens(response.data)
        }

        return response
    },
    refresh: async function (refresh){
        const response = await axiosService.post(urls.auth.refresh, {refresh})

        if (response.status === 200) {
            this.setTokens(response.data)
        }

        return response
    },
    me: () => axiosService.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessToken, access)
        localStorage.setItem(refreshToken, refresh)
    },
    getAccessToken: () => localStorage.getItem(accessToken),
    getRefreshToken: () => localStorage.getItem(refreshToken),
    deleteTokens: () => {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },
    isAuth: () => !! localStorage.getItem(accessToken)
}

export {
    authService
}