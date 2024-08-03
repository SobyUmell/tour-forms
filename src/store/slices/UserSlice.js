import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: { 
    name: null,
    password: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    delUser: (state) => {
      state.name = null;
      state.password = null;
      state.id = null;
    }
  },
})

export const { setUser, delUser } = userSlice.actions

export default userSlice.reducer