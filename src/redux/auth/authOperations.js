import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "services/auth";

export const signupOp = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await api.signup(data);
            return result;
        } catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)