import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: 'checking', // 'not-authenticated', 'authenticated' 
   uid: null,
   email: null,
   displayName: null,
   photoURL: null,
   errorMessage: null,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action ) => {
         
      },
      logout: (state, payload ) => {

      },
      checkingCredentials: (state) => {

      },
   },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;