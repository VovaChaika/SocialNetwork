import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "fc253b1c-0962-4c3c-bbdd-f6ced18294b8"
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
        return instance.get(`profile/` + profileId)
    },
    getStatus(profileId){
        return instance.get(`profile/status/` + profileId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    },
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}