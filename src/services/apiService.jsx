
import axios from "axios"

export const axiosApiInstance = axios.create({
  baseURL: "http://localhost:3333/auth"
}
)


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
        console.log("response interseptor");
        originalRequest.headers.Authorization = `Bearer ${newAccesToken}`;
        return axiosApiInstance(originalRequest);
      }
    } catch (error) {
      console.log("response token error");
      throw Error(error, "response error")
    }

  }
);



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
    window.location.href = "/login";
    throw Error(err, "refresh error")
  }
}




