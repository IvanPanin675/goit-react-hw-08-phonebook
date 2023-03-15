import { createSlice } from '@reduxjs/toolkit';
import { signupOp } from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signupOp.pending, state => {
      state.loading = true;
      state.error = null;
    })
      .addCase(signupOp.fulfilled,(state, { payload: {user,token} }) => {
      state.loading = false;
          state.user = user;
          state.token = token;
          state.isLogin = true;
      })
        .addCase(signupOp.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
      })
  },
});

export default authSlice.reducer;
