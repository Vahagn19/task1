
import axios from "axios"
const axiosApiInstance = axios.create({
  baseURL: "http://localhost:3333/auth"
})



axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accesToken = localStorage.getItem("accessToken")
    if (accesToken) {
      config.headers.Authorization = `Bearer ${accesToken}`
    }
    return config
  },
  (error) => {
    throw Error(error.message, "request error")
  }

)

axiosApiInstance.interceptors.response.use(
  response => response,
  async function (error) {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const newAccesToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccesToken}`;
        return axiosApiInstance(originalRequest);
      }
    } catch (error) {
      throw Error(error, "response error")
    }

  }
);


export const handleLogin = async (email, password) => {
  try {
    const response = await axiosApiInstance.post(`${"/login"}`, {
      email,
      password,
    });
    localStorage.setItem("accessToken", response.data.token)
    localStorage.setItem("refreshToken", response.data.refreshToken)
    return response.data
  } catch (error) {
    throw Error(error, "login error")
  }
};





export const getUserDetails = async () => {
  try {
    const accesToken = localStorage.getItem("accessToken")
    const userData = await axiosApiInstance.post("http://localhost:3333/auth/me", null, {
      headers: {
        Authorization: `Bearer ${accesToken}`
      }
    })
    return userData.data.email
  } catch (error) {
    throw new Error("Cannot get user info");
  }
}


async function refreshAccessToken() {
  try {
    const refreshToken = localStorage.getItem("refreshToken")
    const response = await axios.post('http://localhost:3333/auth/refresh', {

      refreshToken: `Bearer ${refreshToken}`

    })
    const newAccessToken = response.data.token
    const newRefreshToken = response.data.refreshToken

    localStorage.setItem("accessToken", newAccessToken)
    localStorage.setItem("refreshToken", newRefreshToken)

    return newAccessToken

  } catch (err) {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    //location reload or something like that 
    throw Error(err, "refresh error")
  }
}




