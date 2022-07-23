import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5b51d7fb-c9e1-4316-ae76-7b744ec2e13b"
    }
})


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(profileId) {
        axios.defaults.withCredentials = true;
        return instance.get(`profile/` + profileId)
    },
    getStatus(profileId){
        axios.defaults.withCredentials = true;
        return instance.get(`profile/status/` + profileId)
    },
    updateStatus(status){
        axios.defaults.withCredentials = true;
        return instance.put(`profile/status`, {status:status})
    },
}
export const authAPI = {
    me(){
        axios.defaults.withCredentials = true;
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false, captcha){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl(){
        axios.defaults.withCredentials = true;
        return instance.get(`security/get-captcha-url`)
    },

}