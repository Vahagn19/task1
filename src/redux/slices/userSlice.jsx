import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiInstance } from "../../services/apiService";


const initialState = {
  userEmail: null,
  isLogged: false,
};




export const handleLogin = createAsyncThunk(
  "user/handleLogin",
  async (authInfo) => {

    const response = await axiosApiInstance.post("/login", authInfo);
    localStorage.setItem("accessToken", response.data.token)
    localStorage.setItem("refreshToken", response.data.refreshToken)

    return response.data
  }
)


export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    const accesToken = localStorage.getItem("accessToken")
    const userData = await axiosApiInstance.post("/me", null, {
      headers: {
        Authorization: `Bearer ${accesToken}`
      }
    })

    return userData.data.email
  }
)



const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: builder => {

    builder.addCase(handleLogin.pending, (state) => {
      state.isLogged = true
    });

    builder.addCase(handleLogin.fulfilled, (state) => {
      state.isLogged = false
    });

    builder.addCase(handleLogin.rejected, (state) => {
      state.isLogged = false
    });

    builder.addCase(getUserDetails.pending, (state) => {
      state.isLogged = true
    });

    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.isLogged = false
      state.userEmail = action.payload;
    });

    builder.addCase(getUserDetails.rejected, (state) => {
      state.isLogged = false
    });
  }
});


export default userSlice.reducer