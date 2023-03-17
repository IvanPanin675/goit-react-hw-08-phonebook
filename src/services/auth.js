import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signup = async userData => {
    console.log(userData)
    const { data } = await authInstance.post("/users/signup", userData);
    setToken(data.token)
    return data;
}

export const login = async userData => {
    const { data } = await authInstance.post("/users/login", userData);
    setToken(data.token)
    return data;
}

export const logout = async token => {
  const { data } = await authInstance.post('/users/logout', token);
  setToken();
  return data;
};

export default authInstance;