// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

interface AuthType {}

const initialState: AuthType = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
