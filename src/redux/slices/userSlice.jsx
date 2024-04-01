import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, getUserDetails } from "../../services/apiService";

const initialState = {
  userEmail: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
setUserEmail:(state,action)=>{
  state.userEmail = action.payload
}
  },
  // extraReducers:builder => {

  //  builder.addCase(handleLogin.pending,(state)=>{
  //   state.isLogged=true
  //  });

  //  builder.addCase(handleLogin.fulfilled,(state,action)=>{
  //   state.isLogged=false
  //   state.userEmail = action.payload;
  //  });

  //  builder.addCase(handleLogin.rejected,(state)=>{
  //   state.isLogged=false
  //  });

  //  builder.addCase(getUserDetails.pending,(state)=>{
  //   state.isLogged=true
  //  });

  //  builder.addCase(getUserDetails.fulfilled,(state,action)=>{
  //   state.isLogged=false
  //   state.userEmail = action.payload;
  //  });

  //  builder.addCase(getUserDetails.rejected,(state)=>{
  //   state.isLogged=false
  //  });
  // }
});



export const {setUserEmail} =userSlice.actions
export default userSlice.reducer