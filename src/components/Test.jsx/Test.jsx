import axios from "axios";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accesToken = localStorage.getItem("accesToken");
    if (accesToken) {
      config.headers.Authorization = `Bearer ${accesToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// export const handleLogin = async () => {
//   try {
//     const response = await axios.post("http://localhost:3333/auth/login", {
//       email: "vahag",
//       password: "12345",
//     });
// localStorage.setItem("acces Token", response.data.token)
// localStorage.setItem("refresh Token", response.data.refreshToken)
//     console.log("Login successful:", response.data);
//   } catch (error) {
//     console.error("laveliiii:", error.response.data);
//   }
// };
