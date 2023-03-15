import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com/"
})

export const signup = async userData => {
    const {data} = await authInstance.post("/users/signup", userData)
    return data;
}